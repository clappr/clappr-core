// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var BaseObject = require('base_object')
var CoreFactory = require('./core_factory')
var Loader = require('./loader')
var assign = require('lodash.assign')
var ScrollMonitor = require('scrollmonitor');
var PlayerInfo = require('player_info')

class Player extends BaseObject {
  constructor(options) {
    super(options)
    window.p = this
    var defaultOptions = {persistConfig: true, width: 640, height: 360}
    this.options = assign(defaultOptions, options)
    this.options.sources = this.normalizeSources(options)
    this.loader = new Loader(this.options.plugins || {})
    this.coreFactory = new CoreFactory(this, this.loader)
    PlayerInfo.currentSize = {width: options.width, height: options.height}
    if (this.options.parentId) {
      this.setParentId(this.options.parentId)
    }
  }

  setParentId(parentId) {
    var el = document.querySelector(parentId)
    if (el) {
      this.attachTo(el)
    }
  }

  attachTo(element) {
    this.options.parentElement = element
    this.core = this.coreFactory.create()
    if (this.options.autoPlayVisible) {
      this.bindAutoPlayVisible(this.options.autoPlayVisible)
    }
  }

  bindAutoPlayVisible(option) {
    this.elementWatcher = ScrollMonitor.create(this.core.$el)
    if (option === 'full') {
      this.elementWatcher.fullyEnterViewport(() => this.enterViewport())
    } else if (option === 'partial') {
      this.elementWatcher.enterViewport(() => this.enterViewport())
    }
  }

  enterViewport() {
    if (this.elementWatcher.top !== 0 && !this.isPlaying()) {
      this.play()
    }
  }

  normalizeSources(options) {
    options.source = options.source && options.source.constructor === String ? [options.source] : options.source;
    var sources = [options.source, options.sources].reduce((a, b) => a.concat(b)).filter((s) => s && s !== "")
    return sources.length === 0 ? ['no.op'] : sources
  }

  resize(size) {
    this.core.resize(size);
  }

  load(sources) {
    this.core.load(sources)
  }

  destroy() {
    this.core.destroy()
  }

  play() {
    this.core.mediaControl.container.play();
  }

  pause() {
    this.core.mediaControl.container.pause();
  }

  stop() {
    this.core.mediaControl.container.stop();
  }

  seek(time) {
    this.core.mediaControl.container.setCurrentTime(time);
  }

  setVolume(volume) {
    this.core.mediaControl.container.setVolume(volume);
  }

  mute() {
    this.core.mediaControl.container.setVolume(0);
  }

  unmute() {
    this.core.mediaControl.container.setVolume(100);
  }

  isPlaying() {
    return this.core.mediaControl.container.isPlaying();
  }

  getContainerPlugin(name) {
    return this.core.mediaControl.container.getPlugin(name)
  }

  getCorePlugin(name) {
    return this.core.getPlugin(name)
  }
}

module.exports = Player


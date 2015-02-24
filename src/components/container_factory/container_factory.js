// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * The ContainerFactory is responsible for manage playback bootstrap and create containers.
 */

var assign = require('lodash.assign');
var BaseObject = require('base_object');
var Container = require('container');
var $ = require('zepto');
var Events = require('events');

class ContainerFactory extends BaseObject {
  constructor(options, loader) {
    super(options);
    this.options = options;
    this.loader = loader;
  }

  createContainers() {
    return $.Deferred((promise) => {
      promise.resolve(this.options.sources.map((source) => {
        return this.createContainer(source);
      }));
    });
  }

  findPlaybackPlugin(source) {
    return this.loader.playbackPlugins.find((p) => { return p.canPlay(source.toString()) });
  }

  createContainer(source, options) {
    var playbackPlugin = this.findPlaybackPlugin(source)
    var options = assign({}, options, this.options, {src: source, autoPlay: !!this.options.autoPlay})
    var playback = new playbackPlugin(options)
    var container = new Container({playback: playback})
    var defer = $.Deferred()
    defer.promise(container)
    this.addContainerPlugins(container, source)
    this.listenToOnce(container, Events.CONTAINER_READY, () => defer.resolve(container))
    return container
  }

  addContainerPlugins(container, source) {
    this.loader.containerPlugins.forEach((Plugin) => {
      var options = assign(this.options, {container: container, src: source});
      container.addPlugin(new Plugin(options));
    });
  }
}

module.exports = ContainerFactory;

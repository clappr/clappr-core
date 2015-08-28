// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

/**
 * The ContainerFactory is responsible for manage playback bootstrap and create containers.
 */

import BaseObject from 'base/base_object'
import Events from 'base/events'
import Container from 'components/container'
import $ from 'clappr-zepto'

import assign from 'lodash.assign'
import find from 'lodash.find'

export default class ContainerFactory extends BaseObject {
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
    return find(this.loader.playbackPlugins, (p) => { return p.canPlay(source.toString(), this.options.mimeType) })
  }

  createContainer(source, options) {
    if (!!source.match(/^\/\//)) source = window.location.protocol + source
    options = assign({}, this.options, {src: source}, options)
    var playbackPlugin = this.findPlaybackPlugin(source)
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

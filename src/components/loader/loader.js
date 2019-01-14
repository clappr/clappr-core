// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import BaseObject from '../../base/base_object'
import PlayerInfo from '../player_info'

/* Playback Plugins */
import HTML5VideoPlayback from '../../playbacks/html5_video'
import NoOp from '../../playbacks/no_op'

/* Core Plugins */
import SourcesPlugin from '../../plugins/sources'
import Strings from '../../plugins/strings'

/**
 * It keeps a list of the default plugins (playback, container, core) and it merges external plugins with its internals.
 * @class Loader
 * @constructor
 * @extends BaseObject
 * @module components
 */
export default class Loader extends BaseObject {
  /**
   * builds the loader
   * @method constructor
   * @param {Object} externalPlugins the external plugins
   * @param {Number} playerId you can embed multiple instances of clappr, therefore this is the unique id of each one.
   */
  constructor(externalPlugins = [], playerId = 0) {
    super()
    this.playerId = playerId

    this.playbackPlugins = [
      HTML5VideoPlayback,
      NoOp
    ]

    this.containerPlugins = []
    this.corePlugins = [SourcesPlugin, Strings]

    if (!Array.isArray(externalPlugins))
      this.validateExternalPluginsType(externalPlugins)

    this.addExternalPlugins(externalPlugins)
  }

  /**
   * groups by type the external plugins that were passed through `options.plugins` it they're on a flat array
   * @method addExternalPlugins
   * @private
   * @param {Object} an config object or an array of plugins
   * @return {Object} plugins the config object with the plugins separated by type
   */
  groupPluginsByType(plugins) {
    if (Array.isArray(plugins)) {
      plugins = plugins.reduce(function(memo, plugin) {
        memo[plugin.type] || (memo[plugin.type] = [])
        memo[plugin.type].push(plugin)
        return memo
      }, {})
    }
    return plugins
  }

  removeDups(list) {
    const groupUp = (plugins, plugin) => {
      plugins[plugin.prototype.name] && delete plugins[plugin.prototype.name]
      plugins[plugin.prototype.name] = plugin
      return plugins
    }
    const pluginsMap = list.reduceRight(groupUp, Object.create(null))

    const plugins = []
    for (let key in pluginsMap)
      plugins.unshift(pluginsMap[key])

    return plugins
  }

  /**
   * adds all the external plugins that were passed through `options.plugins`
   * @method addExternalPlugins
   * @private
   * @param {Object} plugins the config object with all plugins
   */
  addExternalPlugins(plugins) {
    plugins = this.groupPluginsByType(plugins)
    if (plugins.playback)
      this.playbackPlugins = this.removeDups(plugins.playback.concat(this.playbackPlugins))

    if (plugins.container)
      this.containerPlugins = this.removeDups(plugins.container.concat(this.containerPlugins))

    if (plugins.core)
      this.corePlugins = this.removeDups(plugins.core.concat(this.corePlugins))


    PlayerInfo.getInstance(this.playerId).playbackPlugins = this.playbackPlugins
  }

  /**
   * validate if the external plugins that were passed through `options.plugins` are associated to the correct type
   * @method validateExternalPluginsType
   * @private
   * @param {Object} plugins the config object with all plugins
   */
  validateExternalPluginsType(plugins) {
    const plugintypes = ['playback', 'container', 'core']
    plugintypes.forEach((type) => {
      (plugins[type] || []).forEach((el) => {
        const errorMessage = 'external ' + el.type + ' plugin on ' + type + ' array'
        if (el.type !== type)  throw new ReferenceError(errorMessage)
      })
    })
  }
}

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import {uniqueId, currentScriptUrl} from 'base/utils'

import BaseObject from 'base/base_object'
import Events from 'base/events'
import CoreFactory from 'components/core_factory'
import Loader from 'components/loader'
import PlayerInfo from 'components/player_info'
import $ from 'clappr-zepto'
import find from 'lodash.find'

var baseUrl = currentScriptUrl().replace(/\/[^\/]+$/, "")

/**
 * @class Player
 * @constructor
 * @extends BaseObject
 * @module components
 * @example
 * ### Using the Player
 *
 * Add the following script on your HTML:
 * ```html
 * <head>
 *   <script type="text/javascript" src="http://cdn.clappr.io/latest/clappr.min.js"></script>
 * </head>
 * ```
 * Now, create the player:
 * ```html
 * <body>
 *   <div id="player"></div>
 *   <script>
 *     var player = new Clappr.Player({source: "http://your.video/here.mp4", parentId: "#player"});
 *   </script>
 * </body>
 * ```
 */
export default class Player extends BaseObject {
  /**
   * ## Player's constructor
   *
   * You might pass the options object to build the player.
   * ```javascript
   * var options = {source: "http://example.com/video.mp4", param1: "val1"};
   * var player = new Clappr.Player(options);
   * ```
   *
   * @method constructor
   * @param {Object} options Data
   * options to build a player instance
   * @param {Number} [options.width]
   * player's width **default**: `640`
   * @param {Number} [options.height]
   * player's height **default**: `360`
   * @param {String} [options.parentId]
   * the id of the element on the page that the player should be inserted into
   * @param {Object} [options.parent]
   * a reference to a dom element that the player should be inserted into
   * @param {Boolean} [options.autoPlay]
   * automatically play after page load **default**: `false`
   * @param {Boolean} [options.loop]
   * automatically replay after it ends **default**: `false`
   * @param {Boolean} [options.chromeless]
   * player acts in chromeless mode **default**: `false`
   * @param {Boolean} [options.muted]
   * start the video muted **default**: `false`
   * @param {String} [options.mimeType]
   * add `mimeType: "application/vnd.apple.mpegurl"` if you need to use a url without extension.
   * @param {String} [options.actualLiveTime]
   * show duration and seek time relative to actual time.
   * @param {String} [options.actualLiveServerTime]
   * specify server time as a string, format: "2015/11/26 06:01:03". This option is meant to be used with actualLiveTime.
   * @param {Boolean} [options.persistConfig]
   * persist player's settings (volume) through the same domain **default**: `true`
   * @param {String} [options.preload]
   * video will be preloaded according to `preload` attribute options **default**: `'metadata'`
   * @param {Number} [options.maxBufferLength]
   * the default behavior for the **HLS playback** is to keep buffering indefinitely, even on VoD. This replicates the behavior for progressive download, which continues buffering when pausing the video, thus making the video available for playback even on slow networks. To change this behavior use `maxBufferLength` where **value is in seconds**.
   * @param {String} [options.gaAccount]
   * enable Google Analytics events dispatch **(play/pause/stop/buffering/etc)** by adding your `gaAccount`
   * @param {String} [options.gaTrackerName]
   * besides `gaAccount` you can optionally, pass your favorite trackerName as `gaTrackerName`
   * @param {Object} [options.mediacontrol]
   * customize control bar colors, example: `mediacontrol: {seekbar: "#E113D3", buttons: "#66B2FF"}`
   * @param {Boolean} [options.hideMediaControl]
   * control media control auto hide **default**: `true`
   * @param {Boolean} [options.hideVolumeBar]
   * when embedded with width less than 320, volume bar will hide. You can force this behavior for all sizes by adding `true` **default**: `false`
   * @param {String} [options.watermark]
   * put `watermark: 'http://url/img.png'` on your embed parameters to automatically add watermark on your video. You can customize corner position by defining position parameter. Positions can be `bottom-left`, `bottom-right`, `top-left` and `top-right`.
   * @param {Boolean} [options.disableVideoTagContextMenu]
   * disables the context menu (right click) on the video element if a HTML5Video playback is used.
   * @param {String} [options.poster]
   * define a poster by adding its address `poster: 'http://url/img.png'`. It will appear after video embed, disappear on play and go back when user stops the video.
   * @param {String} [options.playbackNotSupportedMessage]
   * define a custom message to be displayed when a playback is not supported.
   */
  constructor(options) {
    super(options)
    var defaultOptions = {playerId: uniqueId(""), persistConfig: true, width: 640, height: 360, baseUrl: baseUrl}
    this.options = $.extend(defaultOptions, options)
    this.options.sources = this.normalizeSources(options)
    this.loader = new Loader(this.options.plugins || {}, this.options.playerId)
    this.coreFactory = new CoreFactory(this, this.loader)
    this.playerInfo = PlayerInfo.getInstance(this.options.playerId)
    this.playerInfo.currentSize = {width: options.width, height: options.height}
    this.playerInfo.options = this.options
    if (this.options.parentId) {
      this.setParentId(this.options.parentId)
    }
    else if (this.options.parent) {
      this.attachTo(this.options.parent)
    }
  }

  /**
   * Specify a `parentId` to the player.
   * @method setParentId
   * @param {String} parentId the element parent id.
   */
  setParentId(parentId) {
    var el = document.querySelector(parentId)
    if (el) {
      this.attachTo(el)
    }
  }

  /**
   * You can use this method to attach the player to a given element. You don't need to do this when you specify it during the player instantiation passing the `parentId` param.
   * @method attachTo
   * @param {Object} element a given element.
   */
  attachTo(element) {
    this.options.parentElement = element
    this.core = this.coreFactory.create()
    this.addEventListeners()
  }

  addEventListeners() {
    this.listenTo(this.core.mediaControl,  Events.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged)
    var container = this.core.mediaControl.container
    if (!!container) {
      this.listenTo(container, Events.CONTAINER_PLAY, this.onPlay)
      this.listenTo(container, Events.CONTAINER_PAUSE, this.onPause)
      this.listenTo(container, Events.CONTAINER_STOP, this.onStop)
      this.listenTo(container, Events.CONTAINER_ENDED, this.onEnded)
      this.listenTo(container, Events.CONTAINER_SEEK, this.onSeek)
      this.listenTo(container, Events.CONTAINER_ERROR, this.onError)
      this.listenTo(container, Events.CONTAINER_TIMEUPDATE, this.onTimeUpdate)
      this.listenTo(container, Events.CONTAINER_VOLUME, this.onVolumeUpdate)
    }
  }

  containerChanged() {
    this.stopListening()
    this.addEventListeners()
  }

  onVolumeUpdate(volume) {
    this.trigger(Events.PLAYER_VOLUMEUPDATE, volume)
  }

  onPlay() {
    this.trigger(Events.PLAYER_PLAY)
  }

  onPause() {
    this.trigger(Events.PLAYER_PAUSE)
  }

  onStop() {
    this.trigger(Events.PLAYER_STOP, this.getCurrentTime())
  }

  onEnded() {
    this.trigger(Events.PLAYER_ENDED)
  }

  onSeek(time) {
    this.trigger(Events.PLAYER_SEEK, time)
  }

  onTimeUpdate(timeProgress) {
    this.trigger(Events.PLAYER_TIMEUPDATE, timeProgress)
  }

  onError(error) {
    this.trigger(Events.PLAYER_ERROR, error)
  }

  is(value, type) {
    return value.constructor === type
  }

  normalizeSources(options) {
    var sources = options.sources || (options.source !== undefined? [options.source.toString()] : [])
    return sources.length === 0 ? ['no.op'] : sources
  }

  /**
   * resizes the current player canvas.
   * @method resize
   * @param {Object} size should be a literal object with `height` and `width`.
   * @example
   * ```javascript
   * player.resize({height: 360, width: 640})
   * ```
   */
  resize(size) {
    this.core.resize(size);
  }

  /**
   * loads a new source.
   * @method load
   * @param {Object} sources source or sources of video.
   * @param {Object} mimeType a mime type, example: `'application/vnd.apple.mpegurl'`
   *
   */
  load(sources, mimeType) {
    this.core.load(sources, mimeType)
  }

  /**
   * destroys the current player and removes it from the DOM.
   * @method destroy
   */
  destroy() {
    this.core.destroy()
  }

  /**
   * plays the current video (`source`).
   * @method play
   */
  play() {
    this.core.mediaControl.container.play();
  }

  /**
   * pauses the current video (`source`).
   * @method pause
   */
  pause() {
    this.core.mediaControl.container.pause();
  }

  /**
   * stops the current video (`source`).
   * @method stop
   */
  stop() {
    this.core.mediaControl.container.stop();
  }


  /**
   * seeks the current video (`source`). For example, `player.seek(120)` will seek to second 120 (2minutes) of the current video.
   * @method seek
   * @param {Number} time should be a number between 0 and the video duration.
   */
  seek(time) {
    this.core.mediaControl.container.seek(time);
  }

  /**
   * seeks the current video (`source`). For example, `player.seek(50)` will seek to the middle of the current video.
   * @method seekPercentage
   * @param {Number} time should be a number between 0 and 100.
   */
  seekPercentage(percentage) {
    this.core.mediaControl.container.seekPercentage(percentage);
  }

  /**
   * Set the volume for the current video (`source`).
   * @method setVolume
   * @param {Number} volume should be a number between 0 and 100, 0 being mute and 100 the max volume.
   */
  setVolume(volume) {
    this.core.mediaControl.container.setVolume(volume);
  }

  /**
   * Get the volume for the current video
   * @method getVolume
   * @return {Number} volume should be a number between 0 and 100, 0 being mute and 100 the max volume.
   */
  getVolume() {
    return this.core.mediaControl.container.volume;
  }

  /**
   * mutes the current video (`source`).
   * @method mute
   */
  mute() {
    this.core.mediaControl.container.setVolume(0);
  }

  /**
   * unmutes the current video (`source`).
   * @method unmute
   */
  unmute() {
    this.core.mediaControl.container.setVolume(100);
  }

  /**
   * checks if the player is playing.
   * @method isPlaying
   * @return {Boolean} `true` if the current source is playing, otherwise `false`
   */
  isPlaying() {
    return this.core.mediaControl.container.isPlaying();
  }

  /**
   * get a plugin by its name.
   * @method getPlugin
   * @param {String} name of the plugin.
   * @return {Object} the plugin instance
   * @example
   * ```javascript
   * var poster = player.getPlugin('poster');
   * poster.hidePlayButton();
   * ```
   */
  getPlugin(name) {
    var plugins = this.core.plugins.concat(this.core.mediaControl.container.plugins);
    return find(plugins, function(plugin) {
      return plugin.name === name;
    });
  }

  /**
   * the current time in seconds.
   * @method getCurrentTime
   * @return {Number} current time (in seconds) of the current source
   */
  getCurrentTime() {
    return this.core.mediaControl.container.getCurrentTime()
  }

  /**
   * the duration time in seconds.
   * @method getDuration
   * @return {Number} duration time (in seconds) of the current source
   */
  getDuration() {
    return this.core.mediaControl.container.getDuration()
  }
}

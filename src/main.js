// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import Player from 'components/player'
import Utils from 'base/utils'
import Events from 'base/events'
import Playback from 'base/playback'
import ContainerPlugin from 'base/container_plugin'
import CorePlugin from 'base/core_plugin'
import UICorePlugin from 'base/ui_core_plugin'
import UIContainerPlugin from 'base/ui_container_plugin'
import BaseObject from 'base/base_object'
import UIObject from 'base/ui_object'
import Browser from 'components/browser'
import Container from 'components/container'
import Core from 'components/core'
import Mediator from 'components/mediator'
import MediaControl from 'components/media_control'
import PlayerInfo from 'components/player_info'
import Flash from 'playbacks/flash'
import HLS from 'playbacks/hls'
import HTML5Audio from 'playbacks/html5_audio'
import HTML5Video from 'playbacks/html5_video'
import HTMLImg from 'playbacks/html_img'
import Poster from 'plugins/poster'
import Log from 'plugins/log'

window.DEBUG = false

var version = VERSION

export default {
    Player,
    Mediator,
    Events,
    Browser,
    PlayerInfo,
    MediaControl,
    ContainerPlugin,
    UIContainerPlugin,
    CorePlugin,
    UICorePlugin,
    Playback,
    Container,
    Core,
    BaseObject,
    UIObject,
    Utils,
    Flash,
    HLS,
    HTML5Audio,
    HTML5Video,
    HTMLImg,
    Poster,
    Log,
    version
}

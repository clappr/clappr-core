// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import $ from 'clappr-zepto'
import template from '../template'

/**
 * This callback is displayed as part of the Requester class.
 * @callback Styler_getStypeFor
 * @param {string} style
 * @param {Object} options
 * @param {string} options.baseUrl
 */
/**
 * @typedef StylerType
 * @type {object}
 * @property {Styler_getStypeFor} getStyleFor
 */
/**
 * @type {StylerType}
 */
const Styler = {
  getStyleFor: function(style, options={ baseUrl: '' }) {
    return $('<style class="clappr-style"></style>').html(template(style.toString())(options))
  }
}

export default Styler

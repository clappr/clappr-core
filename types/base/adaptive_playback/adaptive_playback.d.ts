/**
 * @typedef {Function} AdaptiveMediaActivatorFunction
 * @function
 * @param {Boolean} scheduleActivity Enable/disable activity, switch to a different media representation
 * @param {Boolean} immediateFlush (default = false) Immediate switching, flushes playout buffer
 * @returns {Boolean} Whether the switch request could be processed
 *
 */
/**
 * Video quality level description.
 * In a set of quality levels, there should be exactly one of these objects representing each
 * available quality at a given moment.
 * @typedef {Object} VideoQualityLevel
 * @class
 * @property {String} id
 * @property {Boolean} active
 * @property {String} language
 * @property {Number} width pixel
 * @property {Number} height pixels
 * @property {Number} bitrate bits/s
 * @property {String} codec
 * @member {AdaptiveMediaActivatorFunction} setActive
 *
 */
/**
 * Audio option available.
 * @typedef {Object} AudioOption
 * @class
 * @property {String} id
 * @property {Boolean} active
 * @property {Number} volume
 * @property {String} language
 * @property {String} codec
 * @property {Number} channels
 * @property {String[]} roles
 * @member {AdaptiveMediaActivatorFunction} setActive
 */
/**
 * Closed caption option available.
 * @typedef ClosedCaptionOption
 * @class
 * @property {String} id
 * @property {Boolean} active
 * @property {String} language
 * @property {String[]} roles
 * @member {AdaptiveMediaActivatorFunction} setActive
 */
export default class AdaptivePlayback {
    /**
     * @returns {Boolean}
     */
    get isAdaptive(): boolean;
    /**
     * @param {Boolean} enabled
     */
    set isAutoAdaptive(arg: boolean);
    /**
     * @returns {Boolean}
     */
    get isAutoAdaptive(): boolean;
    /**
     * @returns {VideoQualityLevel[]}
     */
    get activeVideoQualityLevels(): any[];
    /**
     * @returns {VideoQualityLevel[]}
     */
    get videoQualityLevels(): any[];
    /**
     * @returns {AudioOption[]}
     */
    get availableAudioOptions(): any[];
    /**
     * @returns {AudioOption[]}
     */
    get audioOptions(): any[];
    /**
     * @returns {ClosedCaptionOption[]}
     */
    get availableClosedCaptions(): any[];
    /**
     * @returns {ClosedCaptionOption[]}
     */
    get closedCaptions(): any[];
}
export type AdaptiveMediaActivatorFunction = Function;
/**
 * Video quality level description.
 * In a set of quality levels, there should be exactly one of these objects representing each
 * available quality at a given moment.
 */
export type VideoQualityLevel = any;
/**
 * Audio option available.
 */
export type AudioOption = any;
/**
 * Closed caption option available.
 */
export type ClosedCaptionOption = any;

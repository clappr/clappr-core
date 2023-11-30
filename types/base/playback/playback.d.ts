/**
 * An object representing a single audio track.
 * @typedef {Object} AudioTrack
 * @property {string} id - A unique identifier for the track. Used to identify it among the others.
 * @property {string} language - The language of the track (e.g., 'en', 'pt-BR').
 * @property {string} [label] - An optional label to be used in the UI to describe the track.
 * @property {('main'|'description')} kind - The category the audio track belongs to.
 * The kind 'description' is applied to audio tracks that narrate or describe the visual content.
 */
/**
 * An abstraction to represent a generic playback, it's like an interface to be implemented by subclasses.
 * @class Playback
 * @constructor
 * @extends UIObject
 * @module base
 */
declare class Playback {
    /**
     * @method constructor
     * @param {Object} options the options object
     * @param {Strings} i18n the internationalization component
     */
    constructor(options: any, i18n: Strings, playerError: any);
    /**
    * Determine if the playback does not contain video/has video but video should be ignored.
    * @property isAudioOnly
    * @type Boolean
    */
    get isAudioOnly(): boolean;
    /**
     * @property isAdaptive
     * @return {boolean}
     */
    get isAdaptive(): boolean;
    /**
     * Determine if the playback has ended.
     * @property ended
     * @type {boolean}
     */
    get ended(): boolean;
    /**
     * The internationalization plugin.
     * @property i18n
     * @type {Strings}
     */
    get i18n(): Strings;
    /**
     * Determine if the playback is having to buffer in order for
     * playback to be smooth.
     * (i.e if a live stream is playing smoothly, this will be false)
     * @property buffering
     * @type Boolean
     */
    get buffering(): boolean;
    /**
     * @property settings
     * @type {Object}
     */
    settings: any;
    /**
     * @property _i18n
     * @type {string}
     */
    _i18n: string;
    playerError: any;
    /**
     * @property _consented
     * @type {boolean}
     */
    _consented: boolean;
    /**
     * Gives user consent to playback (mobile devices).
     * @method consent
     * @param {Function} callback function called when playback is consented
     */
    consent(cb: any): void;
    /**
     * plays the playback.
     * @method play
     */
    play(): void;
    /**
     * pauses the playback.
     * @method pause
     */
    pause(): void;
    /**
     * stops the playback.
     * @method stop
     */
    stop(): void;
    /**
     * seeks the playback to a given `time` in seconds
     * @method seek
     * @param {Number} time should be a number between 0 and the video duration
     */
    seek(time: number): void;
    /**
     * seeks the playback to a given `percentage` in percentage
     * @method seekPercentage
     * @param {Number} time should be a number between 0 and 100
     */
    seekPercentage(percentage: any): void;
    /**
     * The time that "0" now represents relative to when playback started.
     * For a stream with a sliding window this will increase as content is
     * removed from the beginning.
     * @method getStartTimeOffset
     * @return {Number} time (in seconds) that time "0" represents.
     */
    getStartTimeOffset(): number;
    /**
     * gets the duration in seconds
     * @method getDuration
     * @return {Number} duration (in seconds) of the current source
     */
    getDuration(): number;
    /**
     * checks if the playback is playing.
     * @method isPlaying
     * @return {Boolean} `true` if the current playback is playing, otherwise `false`
     */
    isPlaying(): boolean;
    /**
     * checks if the playback is ready.
     * @property isReady
     * @type {Boolean} `true` if the current playback is ready, otherwise `false`
     */
    get isReady(): boolean;
    /**
     * checks if the playback has closed caption tracks.
     * @property hasClosedCaptionsTracks
     * @type {Boolean}
     */
    get hasClosedCaptionsTracks(): boolean;
    /**
     * gets the playback available closed caption tracks.
     * @property closedCaptionsTracks
     * @type {Array} an array of objects with at least 'id' and 'name' properties
     */
    get closedCaptionsTracks(): any[];
    /**
     * sets the selected closed caption track index. (-1 is disabled)
     * @property closedCaptionsTrackId
     * @type {Number}
     */
    set closedCaptionsTrackId(arg: number);
    /**
     * gets the selected closed caption track index. (-1 is disabled)
     * @property closedCaptionsTrackId
     * @type {Number}
     */
    get closedCaptionsTrackId(): number;
    /**
     * returns a list of the available audio tracks for the playback.
     * @type {AudioTrack[]} audio tracks
     */
    get audioTracks(): AudioTrack[];
    /**
     * returns the audio track currently in use by the playback.
     * @type {AudioTrack} audio track
     */
    get currentAudioTrack(): AudioTrack;
    /**
     * switches the current audio track used by the playback.
     * @param {string} id - id of the audio track to be set.
     */
    switchAudioTrack(id: string): void;
    /**
     * gets the playback type (`'vod', 'live', 'aod'`)
     * @method getPlaybackType
     * @return {String} you should write the playback type otherwise it'll assume `'no_op'`
     * @example
     * ```javascript
     * html5VideoPlayback.getPlaybackType() //vod
     * html5AudioPlayback.getPlaybackType() //aod
     * html5VideoPlayback.getPlaybackType() //live
     * flashHlsPlayback.getPlaybackType() //live
     * ```
     */
    getPlaybackType(): string;
    /**
     * checks if the playback is in HD.
     * @method isHighDefinitionInUse
     * @return {Boolean} `true` if the playback is playing in HD, otherwise `false`
     */
    isHighDefinitionInUse(): boolean;
    /**
     * mutes the playback
     * @method mute
     */
    mute(): void;
    /**
     * restores the playback volume
     * @method unmute
     */
    unmute(): void;
    /**
     * sets the volume for the playback
     * @method volume
     * @param {Number} value a number between 0 (`muted`) to 100 (`max`)
     */
    volume(value: number): void;
    /**
     * enables to configure the playback after its creation
     * @method configure
     * @param {Object} options all the options to change in form of a javascript object
     */
    configure(options: any): void;
    _options: any;
    /**
     * attempt to autoplays the playback.
     * @method attemptAutoPlay
     */
    attemptAutoPlay(): void;
    /**
     * checks if the playback can autoplay.
     * @method canAutoPlay
     * @param {Function} callback function where first param is Boolean and second param is playback Error or null
     */
    canAutoPlay(cb: any): void;
}
declare namespace Playback {
    function extend(properties: any): any;
    /**
     * checks if the playback can play a given `source`
     * If a mimeType is provided then this will be used instead of inferring the mimetype
     * from the source extension.
     * @method canPlay
     * @static
     * @param {String} source the given source ex: `http://example.com/play.mp4`
     * @param {String} [mimeType] the given mime type, ex: `'application/vnd.apple.mpegurl'`
     * @return {Boolean} `true` if the playback is playable, otherwise `false`
     */
    function canPlay(source: string, mimeType?: string): boolean;
    let VOD: string;
    let AOD: string;
    let LIVE: string;
    let NO_OP: string;
    let type: string;
}
export default Playback;
/**
 * An object representing a single audio track.
 */
export type AudioTrack = {
    /**
     * - A unique identifier for the track. Used to identify it among the others.
     */
    id: string;
    /**
     * - The language of the track (e.g., 'en', 'pt-BR').
     */
    language: string;
    /**
     * - An optional label to be used in the UI to describe the track.
     */
    label?: string;
    /**
     * - The category the audio track belongs to.
     * The kind 'description' is applied to audio tracks that narrate or describe the visual content.
     */
    kind: ('main' | 'description');
};

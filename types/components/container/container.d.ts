/**
 * An abstraction to represent a container for a given playback
 * TODO: describe its responsabilities
 * @class Container
 * @constructor
 * @extends UIObject
 * @module base
 */
export default class Container {
    /**
     * it builds a container
     * @method constructor
     * @param {Object} options the options object
     * @param {Strings} i18n the internationalization component
     */
    constructor(options: any, i18n: Strings, playerError: any);
    /**
     * container's name
     * @method name
     * @default Container
     * @return {String} container's name
     */
    get name(): string;
    get attributes(): {
        class: string;
        'data-container': string;
    };
    get events(): {
        click: string;
        dblclick: string;
        touchend: string;
        contextmenu: string;
        mouseenter: string;
        mouseleave: string;
        mouseup: string;
        mousedown: string;
    };
    /**
     * Determine if the playback has ended.
     * @property ended
     * @type Boolean
     */
    get ended(): boolean;
    /**
     * Determine if the playback is having to buffer in order for
     * playback to be smooth.
     * (i.e if a live stream is playing smoothly, this will be false)
     * @property buffering
     * @type Boolean
     */
    get buffering(): boolean;
    /**
     * The internationalization plugin.
     * @property i18n
     * @type {Strings}
     */
    get i18n(): Strings;
    /**
     * checks if has closed caption tracks.
     * @property hasClosedCaptionsTracks
     * @type {Boolean}
     */
    get hasClosedCaptionsTracks(): boolean;
    /**
     * gets the available closed caption tracks.
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
     * returns a list of the available audio tracks.
     * @type {import('../../base/playback/playback').AudioTrack[]} audio tracks
     */
    get audioTracks(): import("../../base/playback/playback").AudioTrack[];
    /**
    * returns the audio track currently in use.
    * @type {import('../../base/playback/playback').AudioTrack} audio track
    */
    get currentAudioTrack(): import("../../base/playback/playback").AudioTrack;
    _i18n: Strings;
    currentTime: number;
    volume: number;
    playback: any;
    playerError: any;
    settings: any;
    isReady: boolean;
    mediaControlDisabled: boolean;
    plugins: any[];
    dblTapHandler: any;
    clickTimer: any;
    clickDelay: number;
    actionsMetadata: {};
    /**
     * binds playback events to the methods of the container.
     * it listens to playback's events and triggers them as container events.
     *
     * | Playback |
     * |----------|
     * | progress |
     * | timeupdate |
     * | ready |
     * | buffering |
     * | bufferfull |
     * | settingsupdate |
     * | loadedmetadata |
     * | highdefinitionupdate |
     * | bitrate |
     * | playbackstate |
     * | dvr |
     * | mediacontrol_disable |
     * | mediacontrol_enable |
     * | ended |
     * | play |
     * | pause |
     * | error |
     *
     * ps: the events usually translate from PLABACK_x to CONTAINER_x, you can check all the events at `Event` class.
     *
     * @method bindEvents
     */
    bindEvents(): void;
    subtitleAvailable(): void;
    subtitleChanged(track: any): void;
    audioAvailable(tracks: any): void;
    audioChanged(track: any): void;
    playbackStateChanged(state: any): void;
    playbackDvrStateChanged(dvrInUse: any): void;
    dvrInUse: any;
    updateBitrate(newBitrate: any): void;
    statsReport(metrics: any): void;
    getPlaybackType(): any;
    /**
     * returns `true` if DVR is enable otherwise `false`.
     * @method isDvrEnabled
     * @return {Boolean}
     */
    isDvrEnabled(): boolean;
    /**
     * returns `true` if DVR is in use otherwise `false`.
     * @method isDvrInUse
     * @return {Boolean}
     */
    isDvrInUse(): boolean;
    /**
     * destroys the container
     * @method destroy
     */
    destroy(): void;
    setStyle(style: any): void;
    animate(style: any, duration: any): any;
    ready(): void;
    isPlaying(): any;
    getStartTimeOffset(): any;
    getCurrentTime(): number;
    getDuration(): any;
    error(error: any): void;
    loadedMetadata(metadata: any): void;
    timeUpdated(timeProgress: any): void;
    onProgress(...args: any[]): void;
    playing(): void;
    paused(): void;
    stopped(): void;
    /**
     * plays the playback
     * @method play
     * @param {Object} customData
     */
    play(customData?: any): void;
    /**
     * stops the playback
     * @method stop
     * @param {Object} customData
     */
    stop(customData?: any): void;
    switchAudioTrack(id: any): void;
    /**
     * pauses the playback
     * @method pause
     * @param {Object} customData
     */
    pause(customData?: any): void;
    onEnded(): void;
    clicked(): void;
    cancelClicked(): void;
    dblClicked(): void;
    dblTap(evt: any): void;
    onContextMenu(event: any): void;
    seek(time: any): void;
    onSeek(time: any): void;
    onSeeked(): void;
    seekPercentage(percentage: any): void;
    setVolume(value: any): void;
    fullscreen(): void;
    onBuffering(): void;
    bufferfull(): void;
    /**
     * adds plugin to the container
     * @method addPlugin
     * @param {Object} plugin
     */
    addPlugin(plugin: any): void;
    /**
     * checks if a plugin, given its name, exist
     * @method hasPlugin
     * @param {String} name
     * @return {Boolean}
     */
    hasPlugin(name: string): boolean;
    /**
     * get the plugin given its name
     * @method getPlugin
     * @param {String} name
     */
    getPlugin(name: string): any;
    mouseEnter(): void;
    mouseLeave(): void;
    mouseUp(): void;
    mouseDown(): void;
    settingsUpdate(): void;
    highDefinitionUpdate(isHD: any): void;
    isHighDefinitionInUse(): any;
    disableMediaControl(): void;
    enableMediaControl(): void;
    updateStyle(): void;
    enableResizeObserver(): void;
    resizeObserverInterval: NodeJS.Timer;
    disableResizeObserver(): void;
    checkResize(): void;
    currentSize: {
        width: any;
        height: any;
    };
    /**
     * enables to configure the container after its creation
     * @method configure
     * @param {Object} options all the options to change in form of a javascript object
     */
    configure(options: any): void;
    _options: any;
    render(): this;
}

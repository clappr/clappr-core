declare class HTML5Video {
    constructor(...args: any[]);
    get name(): string;
    get supportedVersion(): {
        min: any;
    };
    get tagName(): "audio" | "video";
    get isAudioOnly(): any;
    get attributes(): {
        'data-html5-video': string;
    };
    get events(): {
        canplay: string;
        canplaythrough: string;
        durationchange: string;
        ended: string;
        error: string;
        loadeddata: string;
        loadedmetadata: string;
        pause: string;
        playing: string;
        progress: string;
        seeking: string;
        seeked: string;
        stalled: string;
        timeupdate: string;
        waiting: string;
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
     * This is related to the PLAYBACK_BUFFERING and PLAYBACK_BUFFERFULL events
     * @property buffering
     * @type Boolean
     */
    get buffering(): boolean;
    get isLive(): boolean;
    get dvrEnabled(): boolean;
    get minimumDVRSizeConfig(): any;
    get isValidMinimumDVRSizeConfig(): boolean;
    get sourceMedia(): any;
    _destroyed: boolean;
    _loadStarted: boolean;
    _isBuffering: boolean;
    _playheadMoving: boolean;
    _playheadMovingTimer: NodeJS.Timeout;
    _stopped: boolean;
    _ccTrackId: number;
    _minDvrSize: any;
    settings: {
        default: string[];
    };
    configure(options: any): void;
    attemptAutoPlay(): void;
    canAutoPlay(cb: any): void;
    _setupExternalTracks(tracks: any): void;
    _externalTracks: any;
    /**
     * Sets the source url on the <video> element, and also the 'src' property.
     * @method load
     * @public
     * @param {String} srcUrl The source URL.
     */
    public load(srcUrl: string): void;
    /**
     * Sets the source url on the <video> element, and also the 'src' property.
     * @method setupSrc
     * @private
     * @param {String} srcUrl The source URL.
     */
    private _setupSrc;
    _ccIsSetup: boolean;
    _src: any;
    _onLoadedMetadata(e: any): void;
    _onDurationChange(): void;
    _updateSettings(): void;
    isSeekEnabled(): boolean;
    getPlaybackType(): any;
    isHighDefinitionInUse(): boolean;
    consent(cb: any): void;
    play(): any;
    pause(): void;
    stop(): void;
    volume(value: any): void;
    /**
     * @deprecated
     * @private
     */
    private mute;
    /**
     * @deprecated
     * @private
     */
    private unmute;
    isMuted(): boolean;
    isPlaying(): boolean;
    get isReady(): boolean;
    _startPlayheadMovingChecks(): void;
    _playheadMovingTimeOnCheck: any;
    _stopPlayheadMovingChecks(): void;
    _determineIfPlayheadMoving(): void;
    _onWaiting(): void;
    _onLoadedData(): void;
    _onCanPlay(): void;
    _onPlaying(): void;
    _onPause(): void;
    _onSeeking(): void;
    _onSeeked(): void;
    _onEnded(): void;
    _handleBufferingEvents(): void;
    _onError(): void;
    destroy(): void;
    _updateDvr(status: any): void;
    seek(time: any): void;
    seekPercentage(percentage: any): void;
    _checkInitialSeek(): void;
    getCurrentTime(): any;
    getDuration(): any;
    _scheduleUpdateSettingsCheck(): void;
    _updateSettingsCheckInFlight: any;
    _onTimeUpdate(): void;
    _onProgress(): void;
    _typeFor(src: any): any;
    _ready(): void;
    _isReadyState: boolean;
    _checkForClosedCaptions(): void;
    set closedCaptionsTrackId(arg: number);
    get closedCaptionsTrackId(): number;
    handleTextTrackChange: any;
    _handleTextTrackChange(): void;
    get isHTML5Video(): boolean;
    get closedCaptionsTracks(): {
        id: number;
        name: any;
        track: any;
    }[];
    get template(): any;
    render(): this;
}
declare namespace HTML5Video {
    function _mimeTypesForUrl(resourceUrl: any, mimeTypesByExtension: any, mimeType: any): any[];
    function _canPlay(type: any, mimeTypesByExtension: any, resourceUrl: any, mimeType: any): boolean;
    function canPlay(resourceUrl: any, mimeType: any): boolean;
}
export default HTML5Video;

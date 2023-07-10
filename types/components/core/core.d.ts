/**
 * The Core is responsible to manage Containers and the player state.
 * @class Core
 * @constructor
 * @extends UIObject
 * @module components
 */
export default class Core {
    constructor(options: any);
    get events(): {
        webkitfullscreenchange: string;
        mousemove: string;
        mouseleave: string;
    };
    get attributes(): {
        'data-player': string;
        tabindex: number;
    };
    /**
     * checks if the core is ready.
     * @property isReady
     * @type {Boolean} `true` if the core is ready, otherwise `false`
     */
    get isReady(): boolean;
    /**
     * The internationalization plugin.
     * @property i18n
     * @type {Strings}
     */
    get i18n(): Strings;
    /**
     * @deprecated
     * This property currently exists for backward compatibility reasons.
     * If you need to access the media control instance, use the method getPlugin('media_control').
     * This approach is still not recommended.
     */
    get mediaControl(): any;
    _mediaControl: any;
    get dummyMediaControl(): any;
    _dummyMediaControl: any;
    /**
     * sets the active container reference and trigger a event with the new reference.
     * @property activeContainer
     * @type {Object}
     */
    set activeContainer(arg: any);
    /**
     * gets the active container reference.
     * @property activeContainer
     * @type {Object}
     */
    get activeContainer(): any;
    _activeContainer: any;
    /**
     * gets the active playback reference.
     * @property activePlayback
     * @type {Object}
     */
    get activePlayback(): any;
    /**
     * gets the active playback's video element.
     * @property activePlaybackEl
     * @type {Object}
     */
    get activePlaybackEl(): any;
    playerError: any;
    firstResize: boolean;
    plugins: any[];
    containers: any[];
    _boundFullscreenHandler: () => void;
    configureDomRecycler(): void;
    createContainers(options: any): void;
    defer: any;
    containerFactory: any;
    prepareContainers(): void;
    updateSize(): void;
    setFullscreen(): void;
    previousSize: any;
    currentSize: any;
    setPlayerSize(): void;
    resize(options: any): void;
    enableResizeObserver(): void;
    resizeObserverInterval: NodeJS.Timer;
    triggerResize(newSize: any): void;
    oldHeight: any;
    oldWidth: any;
    computedSize: any;
    disableResizeObserver(): void;
    resolveOnContainersReady(containers: any): void;
    ready: boolean;
    addPlugin(plugin: any): void;
    hasPlugin(name: any): boolean;
    getPlugin(name: any): any;
    load(sources: any, mimeType: any): void;
    destroy(): void;
    handleFullscreenChange(): void;
    handleWindowResize(event: any): void;
    _screenOrientation: any;
    removeContainer(container: any): void;
    setupContainer(container: any): void;
    setupContainers(containers: any): any[];
    renderContainers(): void;
    createContainer(source: any, options: any): any;
    /**
     * @deprecated
     * This method currently exists for retrocompatibility reasons.
     * If you want the current container reference, use the activeContainer getter.
     */
    getCurrentContainer(): any;
    /**
     * @deprecated
     * This method currently exists for retrocompatibility reasons.
     * If you want the current playback reference, use the activePlayback getter.
     */
    getCurrentPlayback(): any;
    getPlaybackType(): any;
    isFullscreen(): any;
    toggleFullscreen(): void;
    onMouseMove(event: any): void;
    onMouseLeave(event: any): void;
    /**
     * enables to configure the container after its creation
     * @method configure
     * @param {Object} options all the options to change in form of a javascript object
     */
    configure(options: any): void;
    _options: any;
    appendToParent(): void;
    render(): this;
}

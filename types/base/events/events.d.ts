/**
 * @class Events
 * @constructor
 * @module base
 */
declare class Events {
    static register(eventName: any): void;
    static listAvailableCustomEvents(): string[];
    /**
     * listen to an event indefinitely, if you want to stop you need to call `off`
     * @method on
     * @param {String} name
     * @param {Function} callback
     * @param {Object} context
     */
    on(name: string, callback: Function, context: any): this;
    _events: {};
    /**
     * listen to an event only once
     * @method once
     * @param {String} name
     * @param {Function} callback
     * @param {Object} context
     */
    once(name: string, callback: Function, context: any): this;
    /**
     * stop listening to an event
     * @method off
     * @param {String} name
     * @param {Function} callback
     * @param {Object} context
     */
    off(name: string, callback: Function, context: any): this;
    /**
     * triggers an event given its `name`
     * @method trigger
     * @param {String} name
     */
    trigger(name: string, ...args: any[]): this;
    /**
     * stop listening an event for a given object
     * @method stopListening
     * @param {Object} obj
     * @param {String} name
     * @param {Function} callback
     */
    stopListening(obj: any, name: string, callback: Function): this;
}
declare namespace Events {
    let PLAYER_READY: string;
    let PLAYER_RESIZE: string;
    let PLAYER_FULLSCREEN: string;
    let PLAYER_PLAY: string;
    let PLAYER_PAUSE: string;
    let PLAYER_STOP: string;
    let PLAYER_ENDED: string;
    let PLAYER_SEEK: string;
    let PLAYER_ERROR: string;
    let ERROR: string;
    let PLAYER_TIMEUPDATE: string;
    let PLAYER_VOLUMEUPDATE: string;
    let PLAYER_SUBTITLE_AVAILABLE: string;
    let PLAYBACK_PROGRESS: string;
    let PLAYBACK_TIMEUPDATE: string;
    let PLAYBACK_READY: string;
    let PLAYBACK_BUFFERING: string;
    let PLAYBACK_BUFFERFULL: string;
    let PLAYBACK_SETTINGSUPDATE: string;
    let PLAYBACK_LOADEDMETADATA: string;
    let PLAYBACK_HIGHDEFINITIONUPDATE: string;
    let PLAYBACK_BITRATE: string;
    let PLAYBACK_LEVELS_AVAILABLE: string;
    let PLAYBACK_LEVEL_SWITCH_START: string;
    let PLAYBACK_LEVEL_SWITCH_END: string;
    let PLAYBACK_PLAYBACKSTATE: string;
    let PLAYBACK_DVR: string;
    let PLAYBACK_MEDIACONTROL_DISABLE: string;
    let PLAYBACK_MEDIACONTROL_ENABLE: string;
    let PLAYBACK_ENDED: string;
    let PLAYBACK_PLAY_INTENT: string;
    let PLAYBACK_PLAY: string;
    let PLAYBACK_PAUSE: string;
    let PLAYBACK_SEEK: string;
    let PLAYBACK_SEEKED: string;
    let PLAYBACK_STOP: string;
    let PLAYBACK_ERROR: string;
    let PLAYBACK_STATS_ADD: string;
    let PLAYBACK_FRAGMENT_LOADED: string;
    let PLAYBACK_LEVEL_SWITCH: string;
    let PLAYBACK_SUBTITLE_AVAILABLE: string;
    let PLAYBACK_SUBTITLE_CHANGED: string;
    let PLAYBACK_AUDIO_AVAILABLE: string;
    let PLAYBACK_AUDIO_CHANGED: string;
    let CORE_CONTAINERS_CREATED: string;
    let CORE_ACTIVE_CONTAINER_CHANGED: string;
    let CORE_OPTIONS_CHANGE: string;
    let CORE_READY: string;
    let CORE_FULLSCREEN: string;
    let CORE_RESIZE: string;
    let CORE_SCREEN_ORIENTATION_CHANGED: string;
    let CORE_MOUSE_MOVE: string;
    let CORE_MOUSE_LEAVE: string;
    let CONTAINER_PLAYBACKSTATE: string;
    let CONTAINER_PLAYBACKDVRSTATECHANGED: string;
    let CONTAINER_BITRATE: string;
    let CONTAINER_STATS_REPORT: string;
    let CONTAINER_DESTROYED: string;
    let CONTAINER_READY: string;
    let CONTAINER_RESIZE: string;
    let CONTAINER_ERROR: string;
    let CONTAINER_LOADEDMETADATA: string;
    let CONTAINER_SUBTITLE_AVAILABLE: string;
    let CONTAINER_SUBTITLE_CHANGED: string;
    let CONTAINER_AUDIO_AVAILABLE: string;
    let CONTAINER_AUDIO_CHANGED: string;
    let CONTAINER_TIMEUPDATE: string;
    let CONTAINER_PROGRESS: string;
    let CONTAINER_PLAY: string;
    let CONTAINER_STOP: string;
    let CONTAINER_PAUSE: string;
    let CONTAINER_ENDED: string;
    let CONTAINER_CLICK: string;
    let CONTAINER_DBLCLICK: string;
    let CONTAINER_CONTEXTMENU: string;
    let CONTAINER_MOUSE_ENTER: string;
    let CONTAINER_MOUSE_LEAVE: string;
    let CONTAINER_MOUSE_UP: string;
    let CONTAINER_MOUSE_DOWN: string;
    let CONTAINER_SEEK: string;
    let CONTAINER_SEEKED: string;
    let CONTAINER_VOLUME: string;
    let CONTAINER_FULLSCREEN: string;
    let CONTAINER_STATE_BUFFERING: string;
    let CONTAINER_STATE_BUFFERFULL: string;
    let CONTAINER_SETTINGSUPDATE: string;
    let CONTAINER_HIGHDEFINITIONUPDATE: string;
    let CONTAINER_MEDIACONTROL_SHOW: string;
    let CONTAINER_MEDIACONTROL_HIDE: string;
    let CONTAINER_MEDIACONTROL_DISABLE: string;
    let CONTAINER_MEDIACONTROL_ENABLE: string;
    let CONTAINER_STATS_ADD: string;
    let CONTAINER_OPTIONS_CHANGE: string;
    let MEDIACONTROL_RENDERED: string;
    let MEDIACONTROL_FULLSCREEN: string;
    let MEDIACONTROL_SHOW: string;
    let MEDIACONTROL_HIDE: string;
    let MEDIACONTROL_MOUSEMOVE_SEEKBAR: string;
    let MEDIACONTROL_MOUSELEAVE_SEEKBAR: string;
    let MEDIACONTROL_PLAYING: string;
    let MEDIACONTROL_NOTPLAYING: string;
    let MEDIACONTROL_CONTAINERCHANGED: string;
    let MEDIACONTROL_OPTIONS_CHANGE: string;
}
export default Events;

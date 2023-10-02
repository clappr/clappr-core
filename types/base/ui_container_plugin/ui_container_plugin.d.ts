/**
 * The base class for an ui container plugin
 * @class UIContainerPlugin
 * @constructor
 * @extends UIObject
 * @module base
 */
declare class UIContainerPlugin {
    constructor(container: any);
    get playerError(): any;
    container: any;
    /**
     * @property enabled
     * @type {boolean}
     */
    enabled: boolean;
    enable(): void;
    disable(): void;
    bindEvents(): void;
}
declare namespace UIContainerPlugin {
    function extend(properties: any): any;
    let type: string;
}
export default UIContainerPlugin;

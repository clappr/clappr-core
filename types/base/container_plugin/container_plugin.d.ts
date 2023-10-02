/**
 * The base class for a container plugin
 * @class ContainerPlugin
 * @constructor
 * @extends BaseObject
 * @module base
 */
declare class ContainerPlugin {
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
    destroy(): void;
}
declare namespace ContainerPlugin {
    function extend(properties: any): any;
    let type: string;
}
export default ContainerPlugin;

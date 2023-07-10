/**
 * The Core Factory is responsible for instantiate the core and it's plugins.
 * @class CoreFactory
 * @constructor
 * @extends BaseObject
 * @module components
 */
export default class CoreFactory {
    /**
     * it builds the core factory
     * @method constructor
     * @param {Player} player the player object
     */
    constructor(player: Player);
    get loader(): any;
    player: Player;
    /**
     * creates a core and its plugins
     * @method create
     * @return {Core} created core
     */
    create(): Core;
    core: any;
    /**
     * given the core plugins (`loader.corePlugins`) it builds each one
     * @method addCorePlugins
     * @return {Core} the core with all plugins
     */
    addCorePlugins(): Core;
    setupExternalInterface(plugin: any): void;
}

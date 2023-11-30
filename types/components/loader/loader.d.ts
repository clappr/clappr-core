declare const _default: {
    new (externalPlugins?: any, playerId?: number): {
        playerId: number;
        playbackPlugins: any[];
        containerPlugins: any[];
        corePlugins: any[];
        /**
         * groups by type the external plugins that were passed through `options.plugins` it they're on a flat array
         * @method addExternalPlugins
         * @private
         * @param {Object} an config object or an array of plugins
         * @return {Object} plugins the config object with the plugins separated by type
         */
        groupPluginsByType(plugins: any): any;
        removeDups(list: any, useReversePrecedence?: boolean): any[];
        /**
         * adds all the external plugins that were passed through `options.plugins`
         * @method addExternalPlugins
         * @private
         * @param {Object} plugins the config object with all plugins
         */
        addExternalPlugins(plugins: any): void;
        /**
         * validate if the external plugins that were passed through `options.plugins` are associated to the correct type
         * @method validateExternalPluginsType
         * @private
         * @param {Object} plugins the config object with all plugins
         */
        validateExternalPluginsType(plugins: any): void;
    };
    readonly registeredPlaybacks: any[];
    readonly registeredPlugins: {
        core: {};
        container: {};
    };
    checkVersionSupport(entry: any): boolean;
    registerPlugin(pluginEntry: any): boolean;
    registerPlayback(playbackEntry: any): boolean;
    unregisterPlugin(name: any): boolean;
    unregisterPlayback(name: any): boolean;
    clearPlugins(): void;
    clearPlaybacks(): void;
};
export default _default;

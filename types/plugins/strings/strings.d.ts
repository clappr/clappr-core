/**
 * The internationalization (i18n) plugin
 * @class Strings
 * @constructor
 * @extends CorePlugin
 * @module plugins
 */
export default class Strings {
    constructor(core: any);
    get name(): string;
    get supportedVersion(): {
        min: any;
    };
    /**
     * Gets a translated string for the given key.
     * @method t
     * @param {String} key the key to all messages
     * @return {String} translated label
     */
    t(key: string): string;
    _language(): any;
    _initializeMessages(): void;
    _messages: any;
}

/**
 * @class BaseObject
 * @constructor
 * @extends Events
 * @module base
 */
export default class BaseObject {
    /**
     * @method constructor
     * @param {Object} options
     */
    constructor(options?: any);
    /**
     * returns the object options
     * @property options
     * @type Object
     */
    get options(): any;
    _options: any;
    uniqueId: any;
}

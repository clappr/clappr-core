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
    /**
     * the options
     *
     * @property _options
     * @type {Object}
     */
    _options: any;
    /**
    * a unique id prefixed with `'o'`, `o1, o232`
    *
    * @property uniqueId
    * @type String
    */
    uniqueId: string;
}

export default PlayerError;
/**
 * The PlayerError is responsible to receive and propagate errors.
 * @class PlayerError
 * @constructor
 * @extends BaseObject
 * @module components
 */
declare class PlayerError {
    /**
     * @property Levels
     * @type {Object} object with error levels
     */
    static get Levels(): any;
    constructor(options: {}, core: any);
    get name(): string;
    core: any;
    /**
     * creates and trigger an error.
     * @method createError
     * @param {Object} err should be an object with code, description, level, origin, scope and raw error.
     */
    createError(err: any): void;
}

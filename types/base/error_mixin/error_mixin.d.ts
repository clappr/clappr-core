export default ErrorMixin;
declare namespace ErrorMixin {
    /**
     * creates an error.
     * @method createError
     * @param {Object} error should be an object with code, description, level and raw error.
     * @return {Object} Object with formatted error data including origin and scope
     */
    function createError(error: any, options?: {
        useCodePrefix: boolean;
    }): any;
}

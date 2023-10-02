export default Styler;
/**
 * This callback is displayed as part of the Requester class.
 */
export type Styler_getStypeFor = (style: string, options: {
    baseUrl: string;
}) => any;
export type StylerType = {
    getStyleFor: Styler_getStypeFor;
};
/**
 * This callback is displayed as part of the Requester class.
 * @callback Styler_getStypeFor
 * @param {string} style
 * @param {Object} options
 * @param {string} options.baseUrl
 */
/**
 * @typedef StylerType
 * @type {object}
 * @property {Styler_getStypeFor} getStyleFor
 */
/**
 * @type {StylerType}
 */
declare const Styler: StylerType;

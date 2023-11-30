export default tmpl;
export type SettingsTmplType = {
    evaluate: RegExp;
    interpolate: RegExp;
    escape: RegExp;
};
/**
 * JavaScript micro-templating, similar to John Resig's implementation.
 * Underscore templating handles arbitrary delimiters, preserves whitespace,
 * and correctly escapes quotes within interpolated code.
 *
 * @param {string} text
 * @param {*=} data
 * @returns
 */
declare function tmpl(text: string, data?: any | undefined): any;
declare namespace tmpl {
    export { settings };
}
/**
 * @typedef SettingsTmplType
 * @type {object}
 * @property {RegExp} evaluate
 * @property {RegExp} interpolate
 * @property {RegExp} escape
 */
/**
 * @type {SettingsTmplType}
 */
declare var settings: SettingsTmplType;

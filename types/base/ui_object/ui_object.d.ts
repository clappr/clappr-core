/**
 * A base class to create ui object.
 * @class UIObject
 * @constructor
 * @extends BaseObject
 * @module base
 *
 * @typedef {Object} UIObject
 * @property {string} cid - a unique id prefixed with `'c'`, `c1, c232`
 * @property {HTMLElement} el - the dom itself
 * @property {HTMLElement} $el - the dom element wrapped by $
 */
export default class UIObject {
    /**
     * it builds an ui component by:
     *  * creating an id for the component `cid`
     *  * making sure the element is created `$el`
     *  * delegating all `events` to the element
     * @method constructor
     * @param {Object} options the options object
     */
    constructor(options: any);
    /**
     * a unique id prefixed with `'c'`, `c1, c232`
     *
     * @property {String} cid
     * @type {String}
     */
    /**
     * the dom element itself
     *
     * @property {HTMLElement} el
     * @type {HTMLElement}
     */
    /**
     * the dom element wrapped by `$`
     *
     * @property {HTMLElement} $el
     * @type {HTMLElement}
     */
    /**
     * gets the tag name for the ui component
     * @method tagName
     * @default div
     * @return {String} tag's name
     */
    get tagName(): string;
    /**
     * a literal object mapping element's events to methods
     * @property events
     * @type Object
     * @example
     *
     *```javascript
     *
     * class MyButton extends UIObject {
     *   constructor(options) {
     *     super(options)
     *     this.myId = 0
     *   }
     *   get events() { return { 'click': 'myClick' } }
     *   myClick(){ this.myId = 42 }
     * }
     *
     * // when you click on MyButton the method `myClick` will be called
     *```
     */
    get events(): any;
    /**
     * a literal object mapping attributes and values to the element
     * element's attribute name and the value the attribute value
     * @property attributes
     * @type Object
     * @example
     *
     *```javascript
     *
     * class MyButton extends UIObject {
     *    constructor(options) { super(options) }
     *    get attributes() { return { class: 'my-button'} }
     * }
     *
     * // MyButton.el.className will be 'my-button'
     * ```
     */
    get attributes(): any;
    /**
     * @property cid
     * @type string
     */
    cid: string;
    /**
     * selects within the component.
     * @method $
     * @param {String} selector a selector to find within the component.
     * @return {HTMLElement} an element, if it exists.
     * @example
     * ```javascript
     * fullScreenBarUIComponent.$('.button-full') //will return only `.button-full` within the component
     * ```
     */
    $(selector: string): HTMLElement;
    /**
     * render the component, usually attach it to a real existent `element`
     * @method render
     * @return {UIObject} itself
     */
    render(): UIObject;
    /**
     * removes the ui component from DOM
     * @method destroy
     * @return {UIObject} itself
     */
    destroy(): UIObject;
    /**
     * set element to `el` and `$el`
     * @method setElement
     * @param {HTMLElement} element
     * @param {Boolean} delegate whether is delegate or not
     * @return {UIObject} itself
     */
    setElement(element: HTMLElement, delegate: boolean): UIObject;
    $el: any;
    el: any;
    /**
     * delegates all the original `events` on `element` to its callbacks
     * @method delegateEvents
     * @param {Object} events
     * @return {UIObject} itself
     */
    delegateEvents(events: any): UIObject;
    /**
     * undelegats all the `events`
     * @method undelegateEvents
     * @return {UIObject} itself
     */
    undelegateEvents(): UIObject;
    /**
     * ensures the creation of this ui component
     * @method _ensureElement
     * @private
     */
    private _ensureElement;
}
/**
 * A base class to create ui object.
 */
export type UIObject = {
    /**
     * - a unique id prefixed with `'c'`, `c1, c232`
     */
    cid: string;
    /**
     * - the dom itself
     */
    el: HTMLElement;
    /**
     * - the dom element wrapped by $
     */
    $el: HTMLElement;
};

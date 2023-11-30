export function assign(obj: any, source: any): any;
export function extend(parent: any, properties: any): {
    new (...args: any[]): {
        [x: string]: any;
    };
    [x: string]: any;
};
export function formatTime(time: any, paddedHours: any): string;
export function seekStringToSeconds(paramName?: string): number;
export function uniqueId(prefix: any): any;
export function isNumber(value: any): boolean;
export function currentScriptUrl(): string;
export function getBrowserLanguage(): string;
export function now(): number;
export function removeArrayItem(arr: any, item: any): void;
export function listContainsIgnoreCase(item: any, items: any): boolean;
export function canAutoPlayMedia(cb: any, options: any): void;
export const requestAnimationFrame: any;
export const cancelAnimationFrame: any;
export namespace Fullscreen {
    function fullscreenElement(): any;
    function requestFullscreen(el: any): any;
    function cancelFullscreen(el?: Document): void;
    function fullscreenEnabled(): boolean;
}
export class Config {
    static _defaultConfig(): {
        volume: {
            value: number;
            parse: typeof parseInt;
        };
    };
    static _defaultValueFor(key: any): any;
    static _createKeyspace(key: any): string;
    static restore(key: any): any;
    static persist(key: any, value: any): boolean;
}
export class QueryString {
    static get params(): {};
    static get hashParams(): {};
    static parse(paramsString: any): {};
}
export class DomRecycler {
    static configure(options: any): void;
    static create(name: any): any;
    static garbage(el: any): void;
}
export namespace DomRecycler {
    let options: any;
}
export class DoubleEventHandler {
    constructor(delay?: number);
    delay: number;
    lastTime: number;
    handle(event: any, cb: any, prevented?: boolean): void;
}
declare namespace _default {
    export { Config };
    export { Fullscreen };
    export { QueryString };
    export { DomRecycler };
    export { assign };
    export { extend };
    export { formatTime };
    export { seekStringToSeconds };
    export { uniqueId };
    export { currentScriptUrl };
    export { isNumber };
    export { requestAnimationFrame };
    export { cancelAnimationFrame };
    export { getBrowserLanguage };
    export { now };
    export { removeArrayItem };
    export { listContainsIgnoreCase };
    export { canAutoPlayMedia };
    export { Media };
    export { DoubleEventHandler };
}
export default _default;
import Media from '../base/media';

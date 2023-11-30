declare class Log {
    constructor(level?: number, offLevel?: number);
    set level(arg: any);
    get level(): any;
    _level: any;
    EXCLUDE_LIST: string[];
    previousLevel: any;
    offLevel: number;
    debug(klass: any, ...args: any[]): void;
    info(klass: any, ...args: any[]): void;
    warn(klass: any, ...args: any[]): void;
    error(klass: any, ...args: any[]): void;
    onOff(): void;
    log(klass: any, level: any, message: any): void;
}
declare namespace Log {
    export { LEVEL_DEBUG };
    export { LEVEL_INFO };
    export { LEVEL_WARN };
    export { LEVEL_ERROR };
    export function getInstance(): any;
    export function setLevel(level: any): void;
    export function debug(...args: any[]): void;
    export function info(...args: any[]): void;
    export function warn(...args: any[]): void;
    export function error(...args: any[]): void;
}
export default Log;
declare const LEVEL_DEBUG: 0;
declare const LEVEL_INFO: 1;
declare const LEVEL_WARN: 2;
declare const LEVEL_ERROR: 3;

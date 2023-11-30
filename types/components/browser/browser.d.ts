export function getBrowserInfo(ua: string): getBrowserDataReturnType;
export function getBrowserData(): {
    name: string;
    group: string;
};
export function getOsData(): {
    name: string;
    group: string;
};
export function getViewportSize(): ViewportSizeType;
export function getDevice(ua: string): string;
export default Browser;
export type getBrowserDataReturnType = {
    name: string;
    version: number;
};
export type ViewportSizeType = {
    width: number;
    height: number;
};
declare namespace Browser {
    export let isEdge: boolean;
    export let isChrome: boolean;
    export let isSafari: boolean;
    export let isFirefox: boolean;
    export let isLegacyIE: boolean;
    export let isIE: boolean;
    export let isIE11: boolean;
    export let isChromecast: boolean;
    export let isMobile: boolean;
    export let isiOS: boolean;
    export let isAndroid: boolean;
    export let isWindowsPhone: boolean;
    export let isWin8App: boolean;
    export let isWiiU: boolean;
    export let isPS4: boolean;
    export let hasLocalstorage: boolean;
    export let hasFlash: boolean;
    import name = name;
    export { name };
    import version = version;
    export { version };
    export let userAgent: string;
    export namespace data {
        let name_1: string;
        export { name_1 as name };
        export let group: string;
    }
    export namespace os {
        let name_2: string;
        export { name_2 as name };
        let group_1: string;
        export { group_1 as group };
    }
    export let isWindows: boolean;
    export let isMacOS: boolean;
    export let isLinux: boolean;
    export namespace viewport {
        let width: number;
        let height: number;
    }
    export let device: string;
}
declare namespace browserInfo {
    let name_3: string;
    export { name_3 as name };
    let version_1: number;
    export { version_1 as version };
}

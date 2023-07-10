declare class CorePlugin {
    constructor(core: any);
    get playerError(): any;
    core: any;
    enabled: boolean;
    bindEvents(): void;
    enable(): void;
    disable(): void;
    getExternalInterface(): {};
    destroy(): void;
}
declare namespace CorePlugin {
    function extend(properties: any): any;
    let type: string;
}
export default CorePlugin;

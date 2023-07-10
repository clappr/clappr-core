declare class UICorePlugin {
    constructor(core: any);
    get playerError(): any;
    core: any;
    enabled: boolean;
    bindEvents(): void;
    getExternalInterface(): {};
    enable(): void;
    disable(): void;
    render(): this;
}
declare namespace UICorePlugin {
    function extend(properties: any): any;
    let type: string;
}
export default UICorePlugin;

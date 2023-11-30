declare class HTMLImg {
    constructor(params: any);
    get name(): string;
    get supportedVersion(): {
        min: any;
    };
    get tagName(): string;
    get attributes(): {
        'data-html-img': string;
    };
    get events(): {
        load: string;
        abort: string;
        error: string;
    };
    getPlaybackType(): any;
    render(): this;
    _onLoad(): void;
    _onError(evt: any): void;
}
declare namespace HTMLImg {
    function canPlay(resource: any): boolean;
}
export default HTMLImg;

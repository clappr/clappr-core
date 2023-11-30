declare class NoOp {
    constructor(...args: any[]);
    get name(): string;
    get supportedVersion(): {
        min: any;
    };
    get template(): any;
    get attributes(): {
        'data-no-op': string;
    };
    _noiseFrameNum: number;
    render(): this;
    _noise(): void;
    _loop(): void;
    _animationHandle: any;
    destroy(): void;
    _stop: boolean;
    _animate(): void;
    canvas: any;
    context: any;
}
declare namespace NoOp {
    function canPlay(source: any): boolean;
}
export default NoOp;

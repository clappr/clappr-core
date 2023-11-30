declare class HTML5Audio {
    get name(): string;
    get supportedVersion(): {
        min: any;
    };
    get tagName(): string;
    get isAudioOnly(): boolean;
    updateSettings(): void;
    getPlaybackType(): any;
}
declare namespace HTML5Audio {
    function canPlay(resourceUrl: any, mimeType: any): any;
}
export default HTML5Audio;

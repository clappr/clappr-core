export default class SourcesPlugin {
    get name(): string;
    get supportedVersion(): {
        min: any;
    };
    bindEvents(): void;
    onContainersCreated(): void;
}

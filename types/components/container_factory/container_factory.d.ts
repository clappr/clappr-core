export default class ContainerFactory {
    constructor(options: any, loader: any, i18n: any, playerError: any);
    set options(arg: any);
    get options(): any;
    _options: any;
    _i18n: any;
    loader: any;
    playerError: any;
    createContainers(): any;
    findPlaybackPlugin(source: any, mimeType: any): any;
    createContainer(source: any): any;
    addContainerPlugins(container: any): void;
}

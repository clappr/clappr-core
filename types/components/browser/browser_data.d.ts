export default BROWSER_DATA;
declare const BROWSER_DATA: ({
    name: string;
    group: string;
    identifier: string;
    versionIdentifier?: undefined;
} | {
    name: string;
    group: string;
    identifier: string;
    versionIdentifier: string;
})[];

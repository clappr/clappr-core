export default OS_DATA;
declare const OS_DATA: ({
    name: string;
    group: string;
    identifier: string;
    version: string;
    versionIdentifier?: undefined;
    versionSeparator?: undefined;
} | {
    name: string;
    group: string;
    identifier: string;
    version?: undefined;
    versionIdentifier?: undefined;
    versionSeparator?: undefined;
} | {
    name: string;
    group: string;
    identifier: string;
    versionIdentifier: string;
    version?: undefined;
    versionSeparator?: undefined;
} | {
    name: string;
    group: string;
    identifier: string;
    versionIdentifier: string;
    versionSeparator: string;
    version?: undefined;
} | {
    name: string;
    group: string;
    identifier: string;
    versionSeparator: string;
    version?: undefined;
    versionIdentifier?: undefined;
})[];

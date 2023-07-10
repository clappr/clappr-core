export default class Version {
    static parse(str?: string): Version;
    constructor(major: any, minor: any, patch: any);
    major: number;
    minor: number;
    patch: number;
    compare(other: any): number;
    inc(type?: string): this;
    satisfies(min: any, max: any): boolean;
    toString(): string;
}

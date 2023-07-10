export default tmpl;
declare function tmpl(text: any, data: any): any;
declare namespace tmpl {
    export { settings };
}
declare namespace settings {
    let evaluate: RegExp;
    let interpolate: RegExp;
    let escape: RegExp;
}

/**
 * global-this.ts
 *
 * @author jasmith79@gmail.com
 * @license MIT
 * @description Polyfills the globalThis from the current stage-3 TC 39 proposal.
 *
 * See https://github.com/tc39/proposal-global
 * See https://mathiasbynens.be/notes/globalthis
 *
 * Works in IE 8+, node, workers, Chrome extensions, etc.
 *
 * **NOTE** importing this file has the side-effect of creating the
 * missing global reference `globalThis`.
 *
 * Note that this code potentially modifies Object.prototype and can
 * have negative performance implications. Use at your own risk. Since
 * globalThis is already (as of late 2019) showing up in browsers,
 * you may wish to include a deprecation notice to remove this polyfill
 * once support solidifies.
 */
declare global {
    interface Object {
        __gt__: any;
    }
}
declare const metaObject: any;
export default metaObject;

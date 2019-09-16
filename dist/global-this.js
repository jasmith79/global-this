"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const metaObject = (() => {
    // eslint-disable-next-line no-undef
    if (typeof globalThis === 'object')
        return globalThis;
    // This is a filthy dirty hack, but it's the only certain way of
    // getting a hold of the global object reference if the CSP forbids
    // eval or the Function constructor.
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(Object.prototype, '__gt__', {
        get() {
            return this;
        },
        configurable: true,
    });
    const gt = Object.prototype.__gt__;
    delete Object.prototype.__gt__;
    return gt;
})();
metaObject.globalThis = metaObject;
exports.default = metaObject;
//# sourceMappingURL=global-this.js.map
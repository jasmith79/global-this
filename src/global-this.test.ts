/**
 * global-this.ts
 *
 * @author jasmith79@gmail.com
 * @license MIT
 * @description Test file for global-this polyfill.
 */

import gt from './global-this';

describe('returned value', () => {
  it('should be the meta object', () => {
    const this_ = (new Function('return this;'))();
    expect(gt).toBe(this_);
  });
});

describe('globalThis', () => {
  it('should exist in scope', () => {
    expect(typeof globalThis).toBe('object');
  });
});
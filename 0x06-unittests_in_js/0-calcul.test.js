const chai = require('chai');
const { describe } = require('mocha');
const assert = chai.assert;
const isEqual = assert.strictEqual;
const calculateNumber = require('./0-calcul')

describe('calculateNumber', () => {
  it('should pass_0', () => {
    isEqual(calculateNumber(1, 3), 4);
  });
  it('should pass_1', () => {
    isEqual(calculateNumber(10, 3), 13);
  });
  it('should pass_2', () => {
    isEqual(calculateNumber(1, 0), 1);
  });
  it('should pass_3', () => {
    isEqual(calculateNumber(2.5, 2.5), 6);
  });
  it('should pass_4', () => {
    isEqual(calculateNumber(0.1, 0.3), 0);
  });
  it('should pass_5', () => {
    isEqual(calculateNumber(1, 3), 4);
  });
  it('should pass_6', () => {
    isEqual(calculateNumber(893390874874, 494788474298), 1388179349172);
  });
  it('should pass_7', () => {
    isEqual(calculateNumber(0.1, 0.5), 1);
  });
  it('should pass_8', () => {
    isEqual(calculateNumber(1e5, 3e5), 4e5);
  });
  it('should pass_9', () => {
    isEqual(calculateNumber(96, 3), 99);
  });
  it('should pass_10', () => {
    isEqual(calculateNumber(Infinity, Infinity), Infinity);
  });
});

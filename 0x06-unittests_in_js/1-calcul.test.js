const chai = require('chai');
const { describe } = require('mocha');
const assert = chai.assert;
const isEqual = assert.strictEqual;
const calculateNumber = require('./1-calcul')

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('test for `SUM`_0', () => {
      isEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('test for `SUM`_1', () => {
      isEqual(calculateNumber('SUM', 10, 3), 13);
    });

    it('test for `SUM`_2', () => {
      isEqual(calculateNumber('SUM', 1, 0), 1);
    });

    it('test for `SUM`_3', () => {
      isEqual(calculateNumber('SUM', 2.5, 2.5), 6);
    });

    it('test for `SUM`_4', () => {
      isEqual(calculateNumber('SUM', 0.1, 0.3), 0);
    });

    it('test for `SUM`_5', () => {
      isEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('test for `SUM`_6', () => {
      isEqual(calculateNumber('SUM', 893390874874, 494788474298), 1388179349172);
    });

    it('test for `SUM`_7', () => {
      isEqual(calculateNumber('SUM', 0.1, 0.5), 1);
    });

    it('test for `SUM`_8', () => {
      isEqual(calculateNumber('SUM', 1e5, 3e5), 4e5);
    });

    it('test for `SUM`_9', () => {
      isEqual(calculateNumber('SUM', 96, 3), 99);
    });

    it('test for `SUM`_10', () => {
      isEqual(calculateNumber('SUM', Infinity, Infinity), Infinity);
    });
  });

  describe('SUBTRACT', () => {
    it('test for `SUBTRACT`_0', () => {
      isEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('test for `SUBTRACT`_1', () => {
      isEqual(calculateNumber('SUBTRACT', 10, 3), 7);
    });

    it('test for `SUBTRACT`_2', () => {
      isEqual(calculateNumber('SUBTRACT', 1, 0), 1);
    });

    it('test for `SUBTRACT`_3', () => {
      isEqual(calculateNumber('SUBTRACT', 2.5, 2.5), 0);
    });

    it('test for `SUBTRACT`_4', () => {
      isEqual(calculateNumber('SUBTRACT', 0.1, 0.3), 0);
    });

    it('test for `SUBTRACT`_5', () => {
      isEqual(calculateNumber('SUBTRACT', 22, 44), -22);
    });

    it('test for `SUBTRACT`_6', () => {
      isEqual(calculateNumber('SUBTRACT', 893390874874, 494788474298), 398602400576);
    });

    it('test for `SUBTRACT`_7', () => {
      isEqual(calculateNumber('SUBTRACT', 0.1, 0.5), -1);
    });

    it('test for `SUBTRACT`_8', () => {
      isEqual(calculateNumber('SUBTRACT', 1e5, 3e5), -2e5);
    });

    it('test for `SUBTRACT`_9', () => {
      isEqual(calculateNumber('SUBTRACT', 96, 3), 93);
    });
  });

  describe('DIVIDE', () => {
    it('test for `DIVIDE`_0', () => {
      isEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
    });

    it('test for `DIVIDE`_1', () => {
      isEqual(Math.round(calculateNumber('DIVIDE', 10, 3)), 3);
    });

    it('test for `DIVIDE`_2', () => {
      isEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });

    it('test for `DIVIDE`_3', () => {
      isEqual(calculateNumber('DIVIDE', 2.5, 2.5), 1);
    });

    it('test for `DIVIDE`_4', () => {
      isEqual(calculateNumber('DIVIDE', 1.00393, 1.4), 1);
    });

    it('test for `DIVIDE`_5', () => {
      isEqual(calculateNumber('DIVIDE', 22, 44), 0.5);
    });

    it('test for `DIVIDE`_6', () => {
      isEqual(Math.round(calculateNumber('DIVIDE', 893390874874, 494788474298)), 2);
    });

    it('test for `DIVIDE`_7', () => {
      isEqual(calculateNumber('DIVIDE', 0.1, 0.5), 0);
    });

    it('test for `DIVIDE`_8', () => {
      isEqual(calculateNumber('DIVIDE', 1e5, 4e5), 0.25);
    });

    it('test for `DIVIDE`_9', () => {
      isEqual(calculateNumber('DIVIDE', 96, 3), 32);
    });
  });
});
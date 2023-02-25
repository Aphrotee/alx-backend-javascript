const chai = require('chai');
const { describe } = require('mocha');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai')

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('test for `SUM`_0', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('test for `SUM`_1', () => {
      expect(calculateNumber('SUM', 10, 3)).to.equal(13);
    });

    it('test for `SUM`_2', () => {
      expect(calculateNumber('SUM', 1, 0)).to.equal(1);
    });

    it('test for `SUM`_3', () => {
      expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6);
    });

    it('test for `SUM`_4', () => {
      expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
    });

    it('test for `SUM`_5', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('test for `SUM`_6', () => {
      expect(calculateNumber('SUM', 893390874874, 494788474298)).to.equal(1388179349172);
    });

    it('test for `SUM`_7', () => {
      expect(calculateNumber('SUM', 0.1, 0.5)).to.equal(1);
    });

    it('test for `SUM`_8', () => {
      expect(calculateNumber('SUM', 1e5, 3e5)).to.equal(4e5);
    });

    it('test for `SUM`_9', () => {
      expect(calculateNumber('SUM', 96, 3)).to.equal(99);
    });

    it('test for `SUM`_10', () => {
      expect(calculateNumber('SUM', Infinity, Infinity)).to.equal(Infinity);
    });
  });

  describe('SUBTRACT', () => {
    it('test for `SUBTRACT`_0', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('test for `SUBTRACT`_1', () => {
      expect(calculateNumber('SUBTRACT', 10, 3)).to.equal(7);
    });

    it('test for `SUBTRACT`_2', () => {
      expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
    });

    it('test for `SUBTRACT`_3', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0);
    });

    it('test for `SUBTRACT`_4', () => {
      expect(calculateNumber('SUBTRACT', 0.1, 0.3)).to.equal(0);
    });

    it('test for `SUBTRACT`_5', () => {
      expect(calculateNumber('SUBTRACT', 22, 44)).to.equal(-22);
    });

    it('test for `SUBTRACT`_6', () => {
      expect(calculateNumber('SUBTRACT', 893390874874, 494788474298)).to.equal(398602400576);
    });

    it('test for `SUBTRACT`_7', () => {
      expect(calculateNumber('SUBTRACT', 0.1, 0.5)).to.equal(-1);
    });

    it('test for `SUBTRACT`_8', () => {
      expect(calculateNumber('SUBTRACT', 1e5, 3e5)).to.equal(-2e5);
    });

    it('test for `SUBTRACT`_9', () => {
      expect(calculateNumber('SUBTRACT', 96, 3)).to.equal(93);
    });
  });

  describe('DIVIDE', () => {
    it('test for `DIVIDE`_0', () => {
      expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
    });

    it('test for `DIVIDE`_1', () => {
      expect(Math.round(calculateNumber('DIVIDE', 10, 3))).to.equal(3);
    });

    it('test for `DIVIDE`_2', () => {
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    });

    it('test for `DIVIDE`_3', () => {
      expect(calculateNumber('DIVIDE', 2.5, 2.5)).to.equal(1);
    });

    it('test for `DIVIDE`_4', () => {
      expect(calculateNumber('DIVIDE', 1.00393, 1.4)).to.equal(1);
    });

    it('test for `DIVIDE`_5', () => {
      expect(calculateNumber('DIVIDE', 22, 44)).to.equal(0.5);
    });

    it('test for `DIVIDE`_6', () => {
      expect(Math.round(calculateNumber('DIVIDE', 893390874874, 494788474298))).to.equal(2);
    });

    it('test for `DIVIDE`_7', () => {
      expect(calculateNumber('DIVIDE', 0.1, 0.5)).to.equal(0);
    });

    it('test for `DIVIDE`_8', () => {
      expect(calculateNumber('DIVIDE', 1e5, 4e5)).to.equal(0.25);
    });

    it('test for `DIVIDE`_9', () => {
      expect(calculateNumber('DIVIDE', 96, 3)).to.equal(32);
    });
  });
});

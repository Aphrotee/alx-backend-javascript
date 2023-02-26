const sinon = require('sinon');
const payment = require('./3-payment');
const sendPaymentRequestToApi = payment.sendPaymentRequestToApi;
const Utils = payment.Utils;
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('Validates correct usage of Utils.CalculateNumber', () => {
    sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.firstCall.args[0]).to.equal('SUM');
    expect(Utils.calculateNumber.firstCall.args[1]).to.equal(100);
    expect(Utils.calculateNumber.firstCall.args[2]).to.equal(20);
    Utils.calculateNumber.restore();
  });
});
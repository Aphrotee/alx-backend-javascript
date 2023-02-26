const sinon = require('sinon');
const payment = require('./4-payment');
const sendPaymentRequestToApi = payment.sendPaymentRequestToApi;
let Utils = payment.Utils;
const console = payment.console;
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('Validates correct usage of Utils.CalculateNumber', () => {
    sinon.stub(Utils, 'calculateNumber').returns(10);
    sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.firstCall.args[0]).to.equal('SUM');
    expect(Utils.calculateNumber.firstCall.args[1]).to.equal(100);
    expect(Utils.calculateNumber.firstCall.args[2]).to.equal(20);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.firstCall.args[0]).to.equal('The total is: 10');
    Utils.calculateNumber.restore();
    console.log.restore();
  });
});
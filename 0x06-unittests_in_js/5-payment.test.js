const sinon = require('sinon');
const payment = require('./4-payment');
const sendPaymentRequestToApi = payment.sendPaymentRequestToApi;
const console = payment.console;
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('Validates correct usage of Utils.CalculateNumber', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.firstCall.args[0]).to.equal('The total is: 120');
  });

  it('Validates correct usage of Utils.CalculateNumber', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.firstCall.args[0]).to.equal('The total is: 20');
  });
});
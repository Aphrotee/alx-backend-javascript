const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('test for async function', (done) => {
    getPaymentTokenFromAPI(true)
    .then((res) => {
      expect(res().data).to.equal('Successful response from API');
      done();
    });
  });
});
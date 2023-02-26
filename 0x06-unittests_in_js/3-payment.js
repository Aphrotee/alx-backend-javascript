const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const amount = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${amount}`);
};

module.exports = { Utils, sendPaymentRequestToApi };

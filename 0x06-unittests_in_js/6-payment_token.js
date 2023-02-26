const getPaymentTokenFromAPI = (success) => new Promise((resolve) => {
  resolve(() => {
    if (success) { return { data: 'Successful response from API' }; }
    return {};
  });
});

module.exports = getPaymentTokenFromAPI;

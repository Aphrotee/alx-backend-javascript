const { expect } = require('chai');
const request = require('request');

/**
describe('tests api response for index page', () => {
  it('checks status code', (done) => {
    request.get('http://127.0.0.1:7865/', (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }).then((res) => {
        expect(res.statusCode).to.equal(200);
      });
    });
    done();
  });

  it('checks response body', (done) => {
    request.get('http://127.0.0.1:7865/', (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      }).then((body) => {
        expect(body).to.equal('Welcome to the payment system');
      });
    });
    done();
  });
});

describe('tests api response for payment methods', () => {
  it('checks status code', (done) => {
    request.get('http://127.0.0.1:7865/cart/12', (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }).then((res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  it('checks response body', (done) => {
    request.get('http://127.0.0.1:7865/cart/12', (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      }).then((body) => {
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  });

  it('checks status code for no id specified', (done) => {
    request.get('http://127.0.0.1:7865/cart/', (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }).then((res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  it('checks status code for invalid id #0', (done) => {
    request.get('http://127.0.0.1:7865/cart/abc', (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }).then((res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  it('checks status code for invalid id #1', (done) => {
    request.get('http://127.0.0.1:7865/cart/3a', (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }).then((res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  it('checks status code for invalid id #2', (done) => {
    request.get('http://127.0.0.1:7865/cart/???', (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }).then((res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  it('checks response body for large id', (done) => {
    request.get('http://127.0.0.1:7865/cart/123456789', (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      }).then((body) => {
        expect(body).to.equal('Payment methods for cart 123456789');
        done();
      });
    });
  });
});
*/
describe('tests api response for login and available payment methods', () => {
  it('checks status code', (done) => {
    request.post('http://127.0.0.1:7865/login', {'userName': 'Betty'}, (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }).then((res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  it('checks response body', (done) => {
    request.post('http://127.0.0.1:7865/login', {'userName': 'Betty'}, (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      }).then((body) => {
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  it('checks status code', (done) => {
    request.post('http://127.0.0.1:7865/login', {'userName': 'Opeyemi'}, (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }).then((res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  it('checks response body', (done) => {
    request.post('http://127.0.0.1:7865/login', {'userName': 'Opeyemi'}, (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      }).then((body) => {
        expect(body).to.equal('Welcome Opeyemi');
        done();
      });
    });
  });
  it('checks response body', (done) => {
    request.get('http://127.0.0.1:7865/available_payments', (err, res, body) =>{
      new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      }).then((body) => {
        const methods = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        }
        expect(JSON.parse(body)).to.eql(methods);
        done();
      });
    });
  });
});
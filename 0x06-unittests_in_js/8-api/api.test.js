const { expect } = require('chai');
const request = require('request');

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

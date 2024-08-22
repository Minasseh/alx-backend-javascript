const assert = require("assert");
const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber with SUM and the correct arguments', () => {
      const spy = sinon.spy(Utils, 'calculateNumber');
  
      sendPaymentRequestToApi(100, 20);
  
      assert(spy.calledOnce);
      assert(spy.calledWith('SUM', 100, 20));
  
      spy.restore();
    });
  });
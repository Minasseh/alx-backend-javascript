const sinon = require('sinon');
const chai = require("chai");
const { expect } = require('chai');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const screen = sinon.spy(console);
    const sum = sinon.stub(Utils, 'calculateNumber');

    sum.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(sum.calledWith('SUM', 100, 20)).to.be.true;
    expect(sum.callCount).to.be.equal(1);
    expect(screen.log.calledWith('The total is: 10')).to.be.true;
    expect(screen.log.callCount).to.be.equal(1);
    sum.restore();
    screen.log.restore();
  });
});
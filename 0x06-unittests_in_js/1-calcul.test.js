const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', () => {
    it('SUM 1.4 and 4.5 output 6', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('DIVIDE 1.4 by 0 output \'Error\'', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('SUBTRACT 1.4 and 4.5 output -4', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('DIVIDE 1.4 and 4.5 output 0.2', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
});
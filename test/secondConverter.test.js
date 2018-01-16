const chai = require('chai');
const expect = chai.expect;
const SecondConverter = require('../app/secondConverter');

describe('second converter Test: \n', () => {
    it('should return valid second when input is 00', () => {
        let secondConverter = new SecondConverter('00');
        const result = secondConverter.convertSeconds()
        expect(result[0]).to.equal('Y');
    });
    it('should return valid second when input is 01', () => {
        let secondConverter = new SecondConverter('1');
        const result = secondConverter.convertSeconds()
        expect(result[0]).to.equal('O');
    });
});
const chai = require('chai');
const expect = chai.expect;
const MinuteConverter = require('../app/minuteConverter');

describe('minute converter Test: \n', () => {
    it('should return valid minute when input is 00', () => {
        let minuteConverter = new MinuteConverter('00');
        const result = minuteConverter.convertMinutes()
        expect(result[0]).to.equal('OOOOOOOOOOO');
        expect(result[1]).to.equal('OOOO');
    });
    it('should return valid minute when input is 17', () => {
        let minuteConverter = new MinuteConverter('17');
        const result = minuteConverter.convertMinutes()
        expect(result[0]).to.equal('YYROOOOOOOO');
        expect(result[1]).to.equal('YYOO');
    });
    it('should return error when input is invalid', () => {
        let minuteConverter = new MinuteConverter('invalid');
        const result = minuteConverter.convertMinutes()
        expect(result).to.equal('invalid minute format');
    });
});
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
    it("should throw if time is invalid", function () {
        let minuteConverter = new MinuteConverter('invalid');
        expect(function () {
            minuteConverter.convertMinutes()
        }).to.throw(Error);
    });
});
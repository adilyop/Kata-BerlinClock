const chai = require('chai');
const expect = chai.expect;
const HourConverter = require('../app/hourConverter');

describe('hour converter Test: \n', () => {
    it('should return valid hour when input is 00', () => {
        let hourConverter = new HourConverter('00');
        const result = hourConverter.convertHours()
        expect(result[0]).to.equal('OOOO');
        expect(result[1]).to.equal('OOOO');
    });
    it('should return valid hour when input is 01', () => {
        let hourConverter = new HourConverter('13');
        const result = hourConverter.convertHours()
        expect(result[0]).to.equal('RROO');
        expect(result[1]).to.equal('RRRO');
    });
    it('should return error when input is invalid', () => {
        let hourConverter = new HourConverter('invalid');
        const result = hourConverter.convertHours()
        expect(result).to.equal('invalid hour format');
    });
});
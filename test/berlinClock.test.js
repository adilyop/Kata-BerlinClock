const chai = require('chai');
const sinon = require('sinon')
const expect = chai.expect;
const assert = chai.assert;
const BerlinClock = require('../app/berlinClock');
const HourConverter = require('../app/hourConverter');
const MinuteConverter = require('../app/minuteConverter');
const SecondConverter = require('../app/secondConverter');

describe('BerlinClock Kata Test: \n', () => {
    let saveHour, saveMinute, saveSecond;
    let berlinClock = new BerlinClock();
    afterEach(function () {
        saveHour.restore();
        saveMinute.restore();
        saveSecond.restore();
    });
    it('should return valid clock when input is 00:00:00 - use minute/second/hour mock', () => {
        saveSecond = sinon.stub(SecondConverter.prototype, 'convertSeconds').callsFake(() => {
            return ['Y'];
        })
        saveMinute = sinon.stub(MinuteConverter.prototype, 'convertMinutes').callsFake(() => {
            return ['OOOOOOOOOOO', 'OOOO'];
        })
        saveHour = sinon.stub(HourConverter.prototype, 'convertHours').callsFake(() => {
            return ['OOOO', 'OOOO'];
        })
        const result = berlinClock.convertClock('00:00:00');
        expect(result[0]).to.equal('Y');
        expect(result[1]).to.equal('OOOO');
        expect(result[2]).to.equal('OOOO');
        expect(result[3]).to.equal('OOOOOOOOOOO');
        expect(result[4]).to.equal('OOOO');
    });
    it('should return valid clock when input is 13:17:01 - use minute/second/hour mock', () => {
        sinon.stub(SecondConverter.prototype, 'convertSeconds').callsFake(() => {
            return ['O'];
        })
        sinon.stub(MinuteConverter.prototype, 'convertMinutes').callsFake(() => {
            return ['YYROOOOOOOO', 'YYOO'];
        })
        sinon.stub(HourConverter.prototype, 'convertHours').callsFake(() => {
            return ['RROO', 'RRRO'];
        })
        const result = berlinClock.convertClock('13:17:01');
        expect(result[0]).to.equal('O');
        expect(result[1]).to.equal('RROO');
        expect(result[2]).to.equal('RRRO');
        expect(result[3]).to.equal('YYROOOOOOOO');
        expect(result[4]).to.equal('YYOO');
    });
    it("should throw if time is invalid", function () {
        expect(function () {
            berlinClock.convertClock('invalid time');
        }).to.throw(Error);
    });
});
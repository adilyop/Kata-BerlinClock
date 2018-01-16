

const Hour = require('../app/hour');
const Minute = require('../app/minute');
const Second = require('../app/second');
class berlinClock {
    constructor(clock) {
        this.clock = clock;
    }

    convertClock() {
        let clockTab = this.clock.split(':');
        var hour = new Hour(clockTab[0]);
        var minute = new Minute(clockTab[1]);
        var second = new Second(clockTab[2]);
        const seconds = second.convertSeconds();
        const minutes = minute.convertMinutes();
        const hours = hour.convertHours();
        const result = seconds + '\n' + hours + '\n' + minutes;
        return result;
    }
}

module.exports = berlinClock;
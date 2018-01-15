

class berlinClock {
    constructor(clock) {
        this.clock = clock;
    }

    convertClock() {
        let clockTab = this.clock.split(':');
        const seconds = this.convertSeconds(clockTab[2]);
        const minutes = this.convertMinutes(clockTab[1]);
        const hours = this.convertHours(clockTab[0]);
        const result = seconds  + '\n' +  hours + '\n' + minutes;
        return result;
    }
     convertSeconds(input) {
        return input;
    }
    
     convertMinutes(input) {
        return input;
    }
    
     convertHours(input) {
        return input;
    }
}

module.exports = berlinClock;
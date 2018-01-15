

class berlinClock {
    constructor(clock) {
        this.clock = clock;
    }

    convertClock() {
        let clockTab = this.clock.split(':');
        const seconds = this.convertSeconds(clockTab[2]);
        const minutes = this.convertMinutes(clockTab[1]);
        const hours = this.convertHours(clockTab[0]);
        const result = seconds + '\n' + hours + '\n' + minutes;
        return result;
    }
     convertSeconds(input) {
        if (input % 2 === 0)
            return 'Y';
        return 'O';
    }
    
     convertMinutes(input) {
        return input;
    }
    
     convertHours(input) {
        let firstLine = Math.floor(input / 5);
        let secondLine = input % 5;
        return 'R'.repeat(firstLine) + 'O'.repeat(4 - firstLine) + 
        '\n' + 'R'.repeat(secondLine) + 'O'.repeat(4 - secondLine);
    }
}

module.exports = berlinClock;
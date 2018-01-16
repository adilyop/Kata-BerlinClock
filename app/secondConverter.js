class SecondConverter {
    constructor(time) {
        this.time = time;
    }

     convertSeconds() {
         const result = (this.time % 2 === 0) ? 'Y' : 'O';
        return [result]
    }
}

module.exports = SecondConverter;
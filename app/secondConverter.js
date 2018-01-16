class SecondConverter {
    constructor(time) {
        this.time = time;
    }

    convertSeconds() {
        var regex = new RegExp('([0-5][0-9])');
        if (regex.test(this.time)) {
            const result = (this.time % 2 === 0) ? 'Y' : 'O';
            return [result]
        } else { 
            return 'invalid second format' 
        }

    }
}

module.exports = SecondConverter;
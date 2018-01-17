class SecondConverter {
    constructor(time) {
        this.time = time;
    }

    convertSeconds() {
        var regex = new RegExp('([0-5][0-9])');
        if (!regex.test(this.time)) { 
            return 'invalid second format' 
        }
        const result = (this.time % 2 === 0) ? 'Y' : 'O';
        return [result]
    }
}

module.exports = SecondConverter;
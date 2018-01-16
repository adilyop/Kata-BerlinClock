class Second {
    constructor(time) {
        this.time = time;
    }

     convertSeconds() {
        if (this.time % 2 === 0)
            return 'Y';
        return 'O';
    }
}

module.exports = Second;
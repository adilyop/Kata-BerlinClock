class Second {
    constructor(time) {
        this.time = time;
    }

     convertSeconds() {
        return (this.time % 2 === 0) ? 'Y' : 'O';
    }
}

module.exports = Second;
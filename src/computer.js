class Computer {
    #move

    getMove() {
        return this.move;
    }

    setMove(object) {
        const objectKeys = Object.keys(object);
        this.move = object[objectKeys[objectKeys.length * Math.random() << 0]]
    }
}

export default Computer;

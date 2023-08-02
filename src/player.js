class Player {
    #name
    #move
    constructor(name) {
        this.name = name;
    }
    getName() { return this.name; }

    getMove() { return this.move; }

    setMove(move) { this.move = move; }

}

export default Player;

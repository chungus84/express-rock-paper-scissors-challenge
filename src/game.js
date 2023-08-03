class Game {
    #player1
    #player2
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    static resultsHash = {
        "rock": ["scissors"],
        "paper": ["rock"],
        "scissors": ["paper"],
    }

    determineWinner() {
        if (Game.resultsHash[this.player1.getMove()].includes(this.player2.getMove())) {
            return `${this.player1.getName()} wins, ${this.player1.getMove()} beats ${this.player2.getMove()}`;
        }
        if (Game.resultsHash[this.player2.getMove()].includes(this.#player2.getMove())) {
            return `${this.player2.name ? this.player2.getName() : "Computer"} wins ${this.player2.getMove()} beats ${this.player1.getMove()}`;
        }

    }

}

export default Game;

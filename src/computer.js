import Player from "./player.js";

class Computer extends Player {


    setMove(object) {
        const objectKeys = Object.keys(object);
        this.move = object[objectKeys[Math.round((objectKeys.length - 1) * Math.random())]]
    }
}

export default Computer;

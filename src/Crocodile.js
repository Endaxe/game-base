import Enemy from "./Enemy";

export default class Crocodile extends Enemy {
    constructor (game) {
        super(game)
        this.width = 32
        this.height = 32
        this.x = this.game.width
        this.y = Math.random() * (this.game.height * 0.9 - this.height)
        //this.speedY = Math.random() * -1.5 - 0.5
        this.speedX = Math.random() * -1.5 - 0.5
        this.lives = 2
    }
}
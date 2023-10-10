export default class Player {
    constructor(game) {
        this.game = game;

        this.width = 32;
        this.height = 64;

        this.x = 50;
        this.y = 100;

        this.speedX = 1
        this.speedY = 0
        this.maxspeed = 10
    }


    update(deltaTime) {
        if (this.game.keys.includes('ArrowUp')) {
            this.speedY = -this.maxspeed;
        } else if (this.game.keys.includes('ArrowDown')) {
            this.speedY = this.maxspeed;
        } else {
            this.speedY = 0;

        }

        this.y += this.speedY

        if (this.game.keys.includes('ArrowLeft')) {
            this.speedX = -this.maxspeed;
        } else if (this.game.keys.includes('ArrowRight')) {
            this.speedX = this.maxspeed;
        } else {
            this.speedX = 0;

        }

        this.x += this.speedX
    }


    draw(context) {
        context.fillstyle = '#f00';
        context.fillRect(this.x, this.y, this.width, this.height)
    }

}
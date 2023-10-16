export default class Enemy {
    constructor (game) {
        this.game = game
        this.x = 0
        this.y = 0
        this.speedX = 0
        this.markedForDetection = false
    }

    update () {
        this.x += this.speedX
        if (this.x < 0) this.markedForDetection = true
    }
    draw(context) {
        context.fillStyle = '#0f0'
        
    }
}
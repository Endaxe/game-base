import Projectile from "./Projectile.js";

export default class Player {
    constructor(game) {
        this.game = game;
        this.Projectile = []

        this.width = 32;
        this.height = 64;

        this.frameX = 0

        this.x = 50;
        this.y = 100;

        this.speedX = 0
        this.speedY = 0
        this.maxSpeed = 5
        this.jumpSpeed = 15
        this.grounded = false
    }


    update(deltaTime) {

        if (this.game.keys.includes('ArrowLeft')) {
            this.speedX = -this.maxSpeed
          } else if (this.game.keys.includes('ArrowRight')) {
            this.speedX = this.maxSpeed
          } else {
            this.speedX = 0
          }

          
      
          if (this.game.keys.includes('ArrowUp') && this.grounded) {
            this.speedY = -this.jumpSpeed
            this.grounded = false
          }
      
          if (this.grounded) {
            this.speedY = 0
          } else {
            this.speedY += this.game.gravity
          }
            
          this.y += this.speedY
          this.x += this.speedX
    

            this.Projectile.forEach((Projectile) => {
                Projectile.update()
            })
            this.Projectile = this.Projectile.filter(
                (Projectile) => !Projectile.markedForDeletion
                )
    }



    draw(context) {
        context.fillStyle = '#FFFFFF';
        context.fillRect(this.x, this.y, this.width, this.height)
        this.Projectile.forEach((Projectile) => {
            Projectile.draw(context)
        })
      
        if (this.game.debug) {
            context.strokeRect(this.x, this.y, this.width, this.height)
            context.fillStyle = 'black'
            context.font = '12px, arial'
            context.fillText(this.frameX, this.x, this.y - 5)
            context.fillText(this.grounded, this.x + 20, this.y - 5)
        }
    }
    shoot() {

        this.Projectile.push(
            new Projectile(this.game, this.x + this.width, this.y + this.height / 2)
        )
    }
}

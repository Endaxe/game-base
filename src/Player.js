import  Projectile from "./Projectile.js";

export default class Player {
    constructor(game) {
        this.game = game;
        this.Projectile = []

        this.width = 32;
        this.height = 64;

        this.x = 50;
        this.y = 100;

        this.speedX = 1
        this.speedY = 0
        this.maxspeed = 5
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
        this.Projectile.forEach((Projectile) => {
            Projectile.update()
        })
        this.Projectile = this.Projectile.filter(
            (Projectile) => !Projectile.markedForDeletion
        )
    }
    

    
    draw(context) {
        context.fillStyle = '#f00';
        context.fillRect(this.x, this.y, this.width, this.height)
        if (this.game.debug) {
            context.strokeRect(this.x, this.y, this.width, this.height)
            context.fillStyle = 'black'
            context.font = '12px, arial'
            context.fillText(this.frameX, this.x, this.y - 5)
        }
        this.Projectile.forEach((Projectile) => {
        Projectile.draw(context)
        })
    }
    shoot() {
       
        this.Projectile.push(
            new Projectile(this.game, this.x + this.width, this.y + this.height/2)
            )
    }
}

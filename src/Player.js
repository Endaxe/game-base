
import spriteImage from './assets/witch.png'

export default class Player {
  constructor(game) {

    this.game = game;

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


    const image = new Image()
    image.src = spriteImage
    this.image = image

    this.frameX = 0
    this.frameY = 1
    this.maxFrame = 8
    this.fps = 20
    this.timer = 0
    this.interval = 1000 / this.fps


    this.flip = false
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


    if (this.flip) {
      context.save()
      context.scale(-1, 1)
    }
  }



  draw(context) {
    if (this.flip) {
      context.save()
      context.scale(-1, 1)
    }





    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height)
      context.fillStyle = 'black'
      context.font = '12px, arial'
      context.fillText(this.frameX, this.x, this.y - 5)
      context.fillText(this.grounded, this.x + 20, this.y - 5)
    }

    context.drawImage(

      this.image,
      this.frameX * this.width,
      this.frameY * this.height - 14,
      this.width*3,
      this.height*2,
      this.flip ? this.x * -1 - this.width : this.x,
      this.y,
      this.width*2,
      this.height*2

    )
    context.restore()

  }


}

export default class Layer {
  constructor(game, image, width, height, speedModifier, offsetY = 0, offsetX= 0) {
    this.game = game
    this.image = image
    this.width = width
    this.height = height
    this.speedModifier = speedModifier
    this.x = 0
    this.y = 0

    this.offsetY = offsetY
    this.offsetX = offsetX
  }

  update() {
    if (this.x <= -this.width) {
      this.x = 0
    }
    this.x -= this.game.speed * this.speedModifier
  }

  draw(context) {

    context.drawImage(this.image, this.x, this.y)
    context.drawImage(this.image, this.x + this.width + this.offsetX, this.y + this.offsetY)
  }

}
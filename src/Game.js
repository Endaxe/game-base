import Player from "./Player.js";
import InputHandler from "./InputHandler.js";
import UserInterface from "./UserInterface.js";
import Crocodile from "./Crocodile.js";
import Enemy from "./Enemy.js";
import Platform from "./Platform.js";
export default class Game {
  constructor(width, height) {
    this.height = height
    this.width = width

    this.player = new Player(this)
    this.input = new InputHandler(this)
    this.userinterface = new UserInterface(this)
    this.enemies = []
    this.enemyTimer = 0
    this.enemyInterval = 1000

    this.keys = []

    this.enemies = []
    this.gameOver = false
    this.gravity = 0.7
    this.debug = false
    this.ground = this.height - 100


    this.platforms = [
      new Platform(this, 0, this.ground, this.width, 100),
      new Platform(this, this.width - 200, 280, 200, 20),
      new Platform(this, 200, 200, 300, 20),
    ]





  }


  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
      this.player.update(deltaTime)

      this.platforms.forEach((platform) => {
        if (this.checkPlatformCollision(this.player, platform)) {
          this.player.speedY = 0
          this.player.y = platform.y - this.player.height
          this.player.grounded = true
        }
        this.enemies.forEach((enemy) => {
          if (this.checkPlatformCollision(enemy, platform)) {
            enemy.speedY = 0
            enemy.y = platform.y - enemy.height
          }
        })
      })
    }
    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      this.addEnemy()
      this.enemyTimer = 0
    } else {
      this.enemyTimer += deltaTime
    }
    this.enemies.forEach((Enemy) => Enemy.update(deltaTime))
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion)
  }

  addEnemy() {
    this.enemies.push(new Crocodile(this))
  }



  draw(context) {
    this.player.draw(context)
    this.userinterface.draw(context)
    this.enemies.forEach((enemy) => enemy.draw(context))
    this.platforms.forEach((platform) => platform.draw(context))
  }

  checkPlatformCollision(object, platform) {
    if (
      object.y + object.height >= platform.y &&
      object.y < platform.y &&
      object.x + object.width >= platform.x &&
      object.x <= platform.x + platform.width
    ) {
      if (object.grounded && object.y + object.height > platform.y) {
        object.speedY = 0
        object.y = platform.y - object.height
        object.grounded = true
      }
      return true
    } else {
      if (object.grounded && object.y + object.height < platform.y) {
        object.grounded = false
      }
      return false
    }
  }
}

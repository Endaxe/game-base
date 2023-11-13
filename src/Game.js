import Player from "./Player.js";
import InputHandler from "./InputHandler.js";
import UserInterface from "./UserInterface.js";
import Crocodile from "./Crocodile.js";
import Enemy from "./Enemy.js";
import Platform from "./Platform.js";
import Camera from "./Camera.js";
import Level from "./Level.js";

export default class Game {
  constructor(width, height) {

    
    this.height = height
    this.width = width


    this.gameTime = 0
    this.player = new Player(this)

    this.camera = new Camera(this, this.player.x, this.player.y, 0, 100)
   
    this.input = new InputHandler(this)
    this.enemies = new Enemy(this)

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

    this.level = new Level(this)


    this.platforms = [
      new Platform(this, 0, this.ground, 2000, 400),
      new Platform(this, this.width - 350, 280, 100, 100),
      new Platform(this, this.width - 50, 280, 100, 100),
      new Platform(this, this.width - -300, 280, 100, 100),
      new Platform(this, this.width - -600, 280, 100, 100),

      
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

    this.player.update(deltaTime)
    this.camera.update(this.player)


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
    this.userinterface.draw(context)
    this.camera.apply(context)
    this.player.draw(context)
    this.level.draw(context)
    this.enemies.forEach((enemy) => enemy.draw(context))
    this.platforms.forEach((platform) => platform.draw(context))
    this.camera.reset(context)

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

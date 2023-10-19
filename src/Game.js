import  Player from "./Player.js";
import  InputHandler from "./InputHandler.js";
import UserInterface from "./UserInterface.js";
import Crocodile from "./Crocodile.js";
import Enemy from "./Enemy.js";
export default class Game {
  constructor(width, height) {

    this.enemies = []
    this.enemyTimer = 0
    this.enemyInterval = 1000
    
    this.player = new Player(this)
    this.input = new InputHandler(this)
    this.userinterface = new UserInterface(this)
   
    this.width = width
    this.height = height
   
    this.keys = []
   
    this.enemies = []
    this.gameOver = false
    this.gravity = 1
    this.debug = false
  }


  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
      this.player.update(deltaTime)
    }
    if(this.enemyTimer > this.enemyInterval && !this.gameOver) {
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
  }
}

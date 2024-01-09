import Layer from './Layer'
import skyImage from './assets/BG.png'
import groundImage from './assets/water.png'
import pillarImage from './assets/stones.png'


export default class Background {
  constructor(game) {
    this.game = game
    const sky = new Image()
    sky.src = skyImage
    this.skyLayer = new Layer(this.game, sky, 1760, 512, 0.2)
    
    const ground = new Image()
    ground.src = groundImage
    this.groundLayer = new Layer(this.game, ground, 1760, 512, 0.6)
    
    
    const pillar = new Image()
    pillar.src = pillarImage
    this.pillarLayer = new Layer(this.game, pillar, 200, 400, 0, 180, 395)

    const pillar2 = new Image()
    pillar2.src = pillarImage
    this.pillarLayer2 = new Layer(this.game, pillar2, 200, 400, 0, 180, 695)
    
    this.layers = [
      this.skyLayer,
      this.groundLayer,
      this.pillarLayer, 
      this.pillarLayer2       
    
    ]
  }

  update() {
    this.layers.forEach((layer) => layer.update())

  }

  draw(context) {
    this.layers.forEach((layer) => layer.draw(context))
    
  }
}
export default class Resources {

  static load (onLoadComplete) {
    this.onLoadComplete = onLoadComplete

    this.numLoads = 0
    this.filesToLoad = 1

    // sounds.on('load', this.incrementLoader.bind(this))
    // music.on('load', this.incrementLoader.bind(this))

    this.loader = new PIXI.loaders.Loader();
    this.loader.add('spritesheet', "spritesheet.json")
    this.loader.on('complete', this.incrementLoader.bind(this))
    this.loader.load();
  }

  static incrementLoader () {
    this.numLoads++
    if (this.numLoads === this.filesToLoad) {
      document.body.className = "loaded"
      clock.setTimeout(() => {
        document.querySelector('.loading').style.display = 'none'
      }, 500)
      this.onLoadComplete()
    }
  }

}

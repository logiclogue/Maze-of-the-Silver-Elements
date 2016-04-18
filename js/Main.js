import Level from './Level'
import Renderer from './Renderer'
import AnimLoop from './AnimLoop'
import Controls from './Controls'

export default class Main
{
    constructor() {
        this.renderer = new Renderer();
        this.animLoop = new AnimLoop();
        this.controls = new Controls();
        this.level = new Level(this.controls);

        this.animLoop.drawMethod = this.draw.bind(this);
        this.animLoop.updateMethod = this.update.bind(this);

        window.addEventListener('resize', this._onWindowResize.bind(this), false);
    }


    draw() {
        this.renderer.render(this.level.scene, this.level.player);
    }

    update() {
        this.level.update();
    }


    _onWindowResize() {
        this.level.player.resize();
        this.renderer.resize();
    }
}

window.onload = function () {
    let main = new Main();
};

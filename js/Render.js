import * as THREE from 'three'
import Camera from './Camera'
import Box from './Box'
import Renderer from './Renderer'

export default class Render
{
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();

        this.scene.add(new Box());

        window.addEventListener('resize', this._onWindowResize.bind(this), false);

        this.renderer.render(this.scene, this.camera);
    }


    _onWindowResize() {
        this.camera.resize();
        this.renderer.resize();
    }
}

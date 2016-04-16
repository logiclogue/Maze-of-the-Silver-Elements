import * as THREE from 'three'
import Camera from './Camera'
import Box from './Box'
import Renderer from './Renderer'
import AnimLoop from './AnimLoop'

export default class Render
{
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.animLoop = new AnimLoop();

        let texture = new THREE.TextureLoader().load('res/box.gif');
        texture.minFilter = THREE.NearestFilter;
        texture.magFilter = THREE.NearestFilter;

        let box1 = new Box(0, 0, texture);
        let box2 = new Box(2, 0, texture);

        this.scene.add(box1);
        this.scene.add(box2);

        window.addEventListener('resize', this._onWindowResize.bind(this), false);

        this.animLoop.drawMethod = () => {
            this.renderer.render(this.scene, this.camera);
        };
    }


    _onWindowResize() {
        this.camera.resize();
        this.renderer.resize();
    }
}

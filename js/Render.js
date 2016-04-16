import * as THREE from 'three'
import Player from './Player'
import Box from './Box'
import Floor from './Floor'
import Renderer from './Renderer'
import AnimLoop from './AnimLoop'
import Controls from './Controls'

export default class Render extends THREE.Scene
{
    constructor() {
        super();

        this.fog = new THREE.FogExp2(0x000000, 0.0025);

        this.renderer = new Renderer();
        this.animLoop = new AnimLoop();
        this.controls = new Controls();
        this.camera = new Player(this.controls);

        let texture = new THREE.TextureLoader().load('res/box.gif');
        texture.minFilter = THREE.NearestFilter;
        texture.magFilter = THREE.NearestFilter;

        let box1 = new Box(0, 0, texture);
        let box2 = new Box(2, 0, texture);

        this.add(box1);
        this.add(box2);
        this.add(new Box(5, 5, texture));
        this.add(new Floor(4, 4));
        this.add(new Floor(1, 1));

        window.addEventListener('resize', this._onWindowResize.bind(this), false);

        this.animLoop.drawMethod = () => {
            this.renderer.render(this, this.camera);
        };

        this.animLoop.updateMethod = () => {
            this.camera.controller();
        };
    }


    _onWindowResize() {
        this.camera.resize();
        this.renderer.resize();
    }
}

import * as THREE from 'three'
import Camera from './Camera'
import Box from './Box'
import Floor from './Floor'
import Renderer from './Renderer'
import AnimLoop from './AnimLoop'
import Controls from './Controls'

export default class Render
{
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.animLoop = new AnimLoop();
        this.controls = new Controls();

        let texture = new THREE.TextureLoader().load('res/box.gif');
        texture.minFilter = THREE.NearestFilter;
        texture.magFilter = THREE.NearestFilter;

        let box1 = new Box(0, 0, texture);
        let box2 = new Box(2, 0, texture);

        this.scene.add(box1);
        this.scene.add(box2);
        this.scene.add(new Box(5, 5, texture));
        this.scene.add(new Floor(4, 4));
        this.scene.add(new Floor(1, 1));

        window.addEventListener('resize', this._onWindowResize.bind(this), false);

        this.animLoop.drawMethod = () => {
            if (this.controls.keysdown[38]) { // forward
                this.camera.position.x -= 5 * Math.sin(this.camera.rotation.y);
                this.camera.position.z -= 5 * Math.cos(this.camera.rotation.y);
            }
            if (this.controls.keysdown[40]) { // backward
                this.camera.position.x += 5 * Math.sin(this.camera.rotation.y);
                this.camera.position.z += 5 * Math.cos(this.camera.rotation.y);;
            }
            if (this.controls.keysdown[39]) { // right
                this.camera.rotation.y -= 0.05;
            }
            if (this.controls.keysdown[37]) { // left
                this.camera.rotation.y += 0.05;
            }

            this.renderer.render(this.scene, this.camera);
        };
    }


    _onWindowResize() {
        this.camera.resize();
        this.renderer.resize();
    }
}

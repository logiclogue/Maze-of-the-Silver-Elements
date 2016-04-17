import * as THREE from 'three'
import Player from './Player'
import Box from './Box'
import Floor from './Floor'
import Renderer from './Renderer'
import AnimLoop from './AnimLoop'
import Controls from './Controls'
import CollisionWorld from './Collision/CollisionWorld'
import CollisionGroup from './Collision/CollisionGroup'

export default class Render extends THREE.Scene
{
    constructor() {
        super();

        this.fog = new THREE.FogExp2(0x000000, 0.0025);

        this.renderer = new Renderer();
        this.animLoop = new AnimLoop();
        this.controls = new Controls();
        this.player = new Player(this.controls);
        this.collisionWorld = new CollisionWorld();

        let texture = new THREE.TextureLoader().load('res/box.gif');
        texture.minFilter = THREE.NearestFilter;
        texture.magFilter = THREE.NearestFilter;

        let boxGroup = new CollisionGroup();
        this.player.addBoxCollision(boxGroup);
        this.collisionWorld.addGroup(boxGroup);
        this.collisionWorld.addGroup(this.player.collisionGroup);

        let box1 = new Box(0, 0, texture, boxGroup);
        let box2 = new Box(2, 0, texture, boxGroup);

        this.add(box1);
        this.add(box2);
        this.add(new Box(5, 5, texture, boxGroup));
        this.add(new Floor(4, 4));
        this.add(new Floor(1, 1));

        window.addEventListener('resize', this._onWindowResize.bind(this), false);

        this.animLoop.drawMethod = () => {
            this.renderer.render(this, this.player);
        };

        this.animLoop.updateMethod = () => {
            this.player.controller();
            this.collisionWorld.test();
        };
    }


    _onWindowResize() {
        this.player.resize();
        this.renderer.resize();
    }
}

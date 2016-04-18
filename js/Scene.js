import * as THREE from 'three'
import Player from './Player'
import Box from './Box'
import Floor from './Floor'
import Renderer from './Renderer'
import AnimLoop from './AnimLoop'
import Controls from './Controls'
import CollisionWorld from './Collision/CollisionWorld'
import CollisionGroup from './Collision/CollisionGroup'

export default class Scene extends THREE.Scene
{
    constructor() {
        super();

        this.fog = new THREE.FogExp2(0x000000, 0.001);

        window.addEventListener('resize', this._onWindowResize.bind(this), false);
    }


    _onWindowResize() {
        this.player.resize();
        this.renderer.resize();
    }
}

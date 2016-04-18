import * as THREE from 'three'

export default class Scene extends THREE.Scene
{
    constructor() {
        super();

        this.fog = new THREE.FogExp2(0x000000, 0.001);
    }
}

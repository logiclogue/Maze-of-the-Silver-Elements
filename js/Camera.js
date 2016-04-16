import * as THREE from 'three'

export default class Camera extends THREE.PerspectiveCamera
{
    constructor() {
        super(70, window.innerWidth / window.innerHeight, 1, 1000);

        this.position.z = 600;
        this.position.x = 200;
    }


    resize() {
        this.aspect = window.innerWidth / window.innerHeight;
        this.updateProjectionMatrix();
    }
}

import * as THREE from 'three'

export default class Player extends THREE.PerspectiveCamera
{
    constructor(controls) {
        super(70, window.innerWidth / window.innerHeight, 1, 1000);

        this.controls = controls;

        this.position.z = 600;
        this.position.x = 200;
    }


    controller() {
        if (this.controls.keysdown[38]) { // forward
            this.position.x -= 5 * Math.sin(this.rotation.y);
            this.position.z -= 5 * Math.cos(this.rotation.y);
        }
        if (this.controls.keysdown[40]) { // backward
            this.position.x += 5 * Math.sin(this.rotation.y);
            this.position.z += 5 * Math.cos(this.rotation.y);;
        }
        if (this.controls.keysdown[39]) { // right
            this.rotation.y -= 0.05;
        }
        if (this.controls.keysdown[37]) { // left
            this.rotation.y += 0.05;
        }
    }

    resize() {
        this.aspect = window.innerWidth / window.innerHeight;
        this.updateProjectionMatrix();
    }
}

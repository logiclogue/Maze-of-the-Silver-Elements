import * as THREE from 'three'

export default class Floor extends THREE.Mesh
{
    constructor(x, z, texture) {
        let geometry = new THREE.PlaneGeometry(200, 200);
        let material = new THREE.MeshBasicMaterial({
            texture: texture,
            side: THREE.DoubleSide
        });

        super(geometry, material);

        this.posX = x;
        this.posZ = z;
        this.position.y = -100;
        this.rotation.x = Math.PI / 2;
    }


    set posX(x) {
        this.position.x = x * 200 || 0;
    }

    set posZ(z) {
        this.position.z = z * 200 || 0;
    }
}

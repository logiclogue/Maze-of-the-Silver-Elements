import * as THREE from 'three'

export default class Box extends THREE.Mesh
{
    constructor(x, z, texture) {
        let geometry = new THREE.BoxGeometry(200, 200, 200);
        let material = new THREE.MeshBasicMaterial({
            vertexColors: THREE.FaceColors,
            map: texture
        });

        super(geometry, material);

        this.posX = x;
        this.posZ = z;
    }


    set posX(x) {
        this.position.x = x * 200 || 0;
    }

    set posZ(z) {
        this.position.z = z * 200 || 0;
    }
}

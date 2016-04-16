import * as THREE from 'three'

export default class Box extends THREE.Mesh
{
    constructor(x, y) {
        let geometry = new THREE.BoxGeometry(200, 200, 200);
        let material = new THREE.MeshBasicMaterial({
            vertexColors: THREE.FaceColors
        });

        super(geometry, material);

        this.posX = x;
        this.posY = y;
    }


    set posX(x) {
        this.position.x = x * 200 || 0;
    }

    set posY(y) {
        this.position.y = y * 200 || 0;
    }
}

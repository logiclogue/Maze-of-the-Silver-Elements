import * as THREE from 'three'

export default class Box extends THREE.Mesh
{
    static texturePath = 'res/box.gif';
    static texture;


    constructor(x, z, y) {
        let geometry = new THREE.BoxGeometry(200, 200, 200);
        let material = new THREE.MeshBasicMaterial({
            vertexColors: THREE.FaceColors,
            map: Box.texture
        });

        super(geometry, material);

        this.posX = x;
        this.posZ = z;
        this.posY = y;
    }


    set posX(x) {
        this.position.x = x * 200 || 0;
    }

    get posX() {
        return this.position.x;
    }

    set posZ(z) {
        this.position.z = z * 200 || 0;
    }

    get posZ() {
        return this.position.z;
    }

    set posY(y) {
        this.position.y = y * 200 || 0;
    }
}

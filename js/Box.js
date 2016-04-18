import * as THREE from 'three'
import LoadTexture from './LoadTexture'

export default class Box extends THREE.Mesh
{
    static texture = new LoadTexture('res/box.gif').texture;


    constructor(x, z, y) {
        let tint = Math.floor(Math.random() * 100) + 56;
        let colour = (tint << 16) + (tint << 8) + tint;
        let geometry = new THREE.BoxGeometry(200, 200, 200);
        let material = new THREE.MeshBasicMaterial({
            vertexColors: THREE.FaceColors,
            map: Box.texture,
            color: colour
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

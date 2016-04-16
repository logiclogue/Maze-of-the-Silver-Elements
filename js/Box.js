import * as THREE from 'three'
import CollisionBox from './Collision/CollisionBox'

export default class Box extends THREE.Mesh
{
    constructor(x, z, texture, collisionGroup) {
        let geometry = new THREE.BoxGeometry(200, 200, 200);
        let material = new THREE.MeshBasicMaterial({
            vertexColors: THREE.FaceColors,
            map: texture
        });

        super(geometry, material);

        this.collisionBox = new CollisionBox(0, 0, 200, 200);
        collisionGroup.addBox(this.collisionBox);

        this.posX = x;
        this.posZ = z;
    }


    set posX(x) {
        this.position.x = x * 200 || 0;
        this.collisionBox.x = this.position.x;
    }

    get posX() {
        return this.position.x;
    }

    set posZ(z) {
        this.position.z = z * 200 || 0;
        this.collisionBox.y = this.position.z;
    }

    get posZ() {
        return this.position.z;
    }
}

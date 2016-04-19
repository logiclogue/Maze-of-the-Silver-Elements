import * as THREE from 'three'
import LoadTexture from './LoadTexture'
import CollisionGroup from './Collision/CollisionGroup'
import CollisionBox from './Collision/CollisionBox'

export default class SilverElement extends THREE.Mesh
{
    static texture = new LoadTexture('res/silver-element.gif').texture;

    constructor(size, player) {
        let geometry = new THREE.PlaneGeometry(200, 200);
        let material = new THREE.MeshBasicMaterial({
            map: SilverElement.texture,
            transparent: true
        });
        let x = (Math.random() > 0.5 ? 1 : size - 1);
        let z = (Math.random() > 0.5 ? 1 : size - 1);

        super(geometry, material);

        this.player = player;
        this.position.x = x * 200;
        this.position.z = z * 200;
        this.lookAt(player.position);

        this.collisionBox = new CollisionBox(this.position.x, this.position.z, 200, 200);
        this.collisionGroup = new CollisionGroup();
        this.collisionGroup.addBox(this.collisionBox);
    }


    update() {
        this.lookAt(this.player.position);
    }
}

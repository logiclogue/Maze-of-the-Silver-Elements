import * as THREE from 'three'
import LoadTexture from './LoadTexture'

export default class SilverElement extends THREE.Mesh
{
    static texture = new LoadTexture('res/silver-element.gif').texture;

    constructor(x, z, player) {
        let geometry = new THREE.PlaneGeometry(200, 200);
        let material = new THREE.MeshBasicMaterial({
            map: SilverElement.texture,
            transparent: true
        });

        super(geometry, material);

        this.player = player;
        this.position.x = x * 200;
        this.position.z = z * 200;
        this.lookAt(player.position);
    }


    update() {
        this.lookAt(this.player.position);
    }
}

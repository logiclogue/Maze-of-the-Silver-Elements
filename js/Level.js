import Scene from './Scene'
import Player from './Player'
import Box from './Box'
import Floor from './Floor'
import CollisionWorld from './Collision/CollisionWorld'
import CollisionGroup from './Collision/CollisionGroup'

export default class Level
{
    constructor(controls) {
        this.scene = new Scene();
        this.player = new Player(controls);
        this.collisionWorld = new CollisionWorld();

        this.createWorld();
    }


    createWorld() {
        let textureLoader = new THREE.TextureLoader();
        let texture = textureLoader.load('res/box.gif');
        let floorTexture = textureLoader.load('res/floor.gif')
        texture.minFilter = floorTexture.minFilter = THREE.NearestFilter;
        texture.magFilter = floorTexture.magFilter = THREE.NearestFilter;

        let boxGroup = new CollisionGroup();
        this.player.addBoxCollision(boxGroup);
        this.collisionWorld.addGroup(boxGroup);
        this.collisionWorld.addGroup(this.player.collisionGroup);

        let box1 = new Box(0, 0, texture, boxGroup);
        let box2 = new Box(2, 0, texture, boxGroup);

        this.scene.add(box1);
        this.scene.add(box2);
        this.scene.add(new Box(5, 5, texture, boxGroup));

        for (let x = 0; x < 10; x += 1) {
            for (let y = 0; y < 10; y += 1) {
                this.scene.add(new Floor(x, y, floorTexture));
            }
        }
    }

    update() {
        this.player.controller();
        this.collisionWorld.test();
    }
}

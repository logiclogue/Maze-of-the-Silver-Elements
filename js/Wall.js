import Box from './Box'
import CollisionBox from './Collision/CollisionBox'

export default class Wall
{
    constructor(x, z, collisionGroup, texture) {
        this.box = new Box(x, z, 0, texture);
        this.collisionBox = new CollisionBox(0, 0, 200, 200);

        collisionGroup.addBox(this.collisionBox);

        this.posX = x;
        this.posZ = z;
        this.collisionBox.x = this.posX * 200;
        this.collisionBox.y = this.posZ * 200;
    }


    addToScene(scene) {
        scene.add(this.box);
    }
}

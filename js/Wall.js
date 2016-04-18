import Box from './Box'
import CollisionBox from './Collision/CollisionBox'

export default class Wall
{
    constructor(x, z, collisionGroup) {
        this.meshes = [];
        this.collisionBox = new CollisionBox(0, 0, 200, 200);
        this.height = 3;

        collisionGroup.addBox(this.collisionBox);

        this.posX = x;
        this.posZ = z;
        this.collisionBox.x = this.posX * 200;
        this.collisionBox.y = this.posZ * 200;

        this._addBoxes();
    }


    addToScene(scene) {
        this.meshes.forEach((mesh) => {
            scene.add(mesh);
        })
    }


    _addBoxes() {
        for (var i = 0; i < this.height; i += 1) {
            this.meshes.push(new Box(this.posX, this.posZ, i));

            if (Math.random() > 0.5) {
                break;
            }
        }
    }
}

import * as THREE from 'three'
import CollisionGroup from './Collision/CollisionGroup'
import CollisionBox from './Collision/CollisionBox'

export default class Player extends THREE.PerspectiveCamera
{
    constructor(controls) {
        super(70, window.innerWidth / window.innerHeight, 1, 2000);

        this.controls = controls;
        this.collisionGroup = new CollisionGroup();
        this.collisionBox = new CollisionBox(0, 0, 100, 100);
        this.collisionGroup.addBox(this.collisionBox);

        this.pX;
        this.pZ;
        this.posX = 200;
        this.posZ = 200;
    }


    set initX(x) {
        this.pX = this.posX = x * 200;
    }

    set initZ(z) {
         this.pZ = this.posZ = z * 200;
    }

    set posX(x) {
        this.pX = this.position.x;
        this.position.x = x;
        this.collisionBox.posX = x + 50;
    }

    get posX() {
        return this.position.x;
    }

    set posZ(z) {
        this.pZ = this.position.z;
        this.position.z = z;
        this.collisionBox.posY = z + 50;
    }

    get posZ() {
        return this.position.z;
    }


    controller() {
        if (this.controls.keysdown[38] || this.controls.keysdown[87]) { // forward
            this.posX -= 5 * Math.sin(this.rotation.y);
            this.posZ -= 5 * Math.cos(this.rotation.y);
        }
        if (this.controls.keysdown[40] || this.controls.keysdown[83]) { // backward
            this.posX += 5 * Math.sin(this.rotation.y);
            this.posZ += 5 * Math.cos(this.rotation.y);;
        }
        if (this.controls.keysdown[39] || this.controls.keysdown[68]) { // right
            this.rotation.y -= 0.05;
        }
        if (this.controls.keysdown[37] || this.controls.keysdown[65]) { // left
            this.rotation.y += 0.05;
        }
    }

    resize() {
        this.aspect = window.innerWidth / window.innerHeight;
        this.updateProjectionMatrix();
    }

    addBoxCollision(boxGroup) {
        this.collisionGroup.addCollision(boxGroup, {
            left: () => {
                this.posX = this.pX;
            },
            right: () => {
                this.posX = this.pX;
            },
            top: () => {
                this.posZ = this.pZ;
            },
            bottom: () => {
                this.posZ = this.pZ;
            }
        });
    }
}

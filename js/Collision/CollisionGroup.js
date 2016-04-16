export default class CollisionGroup
{
    constructor() {
        this.boxes = [];
        this.groupRefs = [];
        this.collisionFuncs = [];
    }


    addBox(box) {
        this.boxes.push(box);
    }

    addCollision(theCollisionGroup, theFunctions) {
        this.groupRefs.push(theCollisionGroup);
        this.collisionFuncs.push(theFunctions);
    }

    testCollision(theCollisionGroup) {
        let colGroupIndex = this.groupRefs.indexOf(theCollisionGroup);

        // If the collision group isn't in the list the return
        if (colGroupIndex === -1) {
            return;
        }

        this.boxes.forEach((boxA) => {
            theCollisionGroup.boxes.forEach((boxB) => {
                let collisionFuncs = this.collisionFuncs[colGroupIndex];

                // if there is a collision
                if (boxA.x < boxB.x + boxB.w && boxA.x + boxA.w > boxB.x && boxA.y < boxB.y + boxB.h && boxA.y + boxA.h > boxB.y) {
					// left
					if (boxA.pX + boxA.w < boxB.x && boxA.x + boxA.w >= boxB.x && collisionFuncs.left !== undefined) {
						collisionFuncs.left(boxB);
					}

					// right
					if (boxA.pX >= boxB.x + boxB.w && boxA.x < boxB.x + boxB.w && collisionFuncs.right !== undefined) {
						collisionFuncs.right(boxB);
					}

					// top
					if (boxA.pY + boxA.h < boxB.y && boxA.y + boxA.h >= boxB.y && collisionFuncs.top !== undefined) {
						collisionFuncs.top(boxB);
					}

					// bottom
					if (boxA.pY >= boxB.y + boxB.h && boxA.y < boxB.y + boxB.h && collisionFuncs.bottom !== undefined) {
						collisionFuncs.bottom(boxB);
					}

					// all in
					if (boxA.x > boxB.x && boxA.x + boxA.w < boxB.x + boxB.w && boxA.y > boxB.y && boxA.y + boxA.h < boxB.y + boxB.h && collisionFuncs.all !== undefined) {
						collisionFuncs.all(boxB);
					}

					// general
					if (this.collisionFuncs[colGroupIndex].general !== undefined) {
						collisionFuncs.general(boxB);
					}

				}
            });
        });
    }
}

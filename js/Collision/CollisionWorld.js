export default class CollisionWorld
{
    constructor() {
        this.groups = [];
    }


    addGroup(group) {
        this.groups.push(group);
    }

    test() {
        this.groups.forEach((groupA) => {
            this.groups.forEach((groupB) => {
                if (groupA !== groupB) {
                    groupA.testCollision(groupB);
                }
            });
        });
    }
}

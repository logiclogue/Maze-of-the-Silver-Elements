import Floor from './Floor'

export default class Ceiling extends Floor
{
    constructor(x, z) {
        super(x, z);

        this.position.y = 100 + (2 * 200);
        this.rotation.x = -this.rotation.x;
    }
}

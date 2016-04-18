import Floor from './Floor'

export default class Ceiling extends Floor
{
    constructor(x, z, texture) {
        super(x, z, texture);

        this.position.y = 100 + (2 * 200);
        this.rotation.x = -this.rotation.x;
    }
}

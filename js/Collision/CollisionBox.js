export default class CollisionBox
{
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.pX = x;
        this.pY = y;
        this.w = w;
        this.h = h;
    }


    set posX(x) {
        this.pX = this.x;
        this.x = x;
    }

    set posY(y) {
        this.pY = this.y;
        this.y = y;
    }
}

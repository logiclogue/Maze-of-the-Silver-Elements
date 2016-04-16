export default class AnimLoop
{
    constructor() {
        this._loop();
    }


    _loop() {
        requestAnimationFrame(this._loop.bind(this));

        this.drawMethod();
        this.updateMethod();
    }

    drawMethod() {}

    updateMethod() {}
}

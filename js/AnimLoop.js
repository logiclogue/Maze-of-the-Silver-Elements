import * as ScrixelLoop from 'scrixel-gameloop';


console.log(ScrixelLoop);

export default class AnimLoop
{
    constructor() {
        this.loopFunctions = new ScrixelLoop.LoopFunctions();
        this.looper = new ScrixelLoop.Looper(this.loopFunctions);

        this.now;
        this.last;
        this.dt;
        this.step = 1 / 60;

        //this._loop();
        this.looper.start();
    }


    _loop() {
        requestAnimationFrame(this._loop.bind(this));

        this.now = this._timestamp();
        this.dt = Math.min(1, (this.now - this.last) / 1000);

        while (this.dt > this.step) {
            this.dt = this.dt - this.step;

            this.updateMethod();
        }

        this.drawMethod();

        this.last = this.now;
    }

    _timestamp() {
        return Date.now();
    }

    set drawMethod(method) {
        this.loopFunctions.draw = method;
    }

    set updateMethod(method) {
        this.loopFunctions.update = method;
    }
}

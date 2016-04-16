export default class Controls
{
    constructor() {
        this.keysdown = [];

        document.addEventListener('keydown', this._keydown.bind(this));
        document.addEventListener('keyup', this._keyup.bind(this));
    }


    _keydown(e) {
        console.log(e.keyCode);

        this.keysdown[e.keyCode] = true;
    }

    _keyup(e) {
        delete this.keysdown[e.keyCode];
    }
}

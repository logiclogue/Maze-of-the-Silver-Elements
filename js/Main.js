import Render from './Render'

export default class Main
{
    constructor() {
        let render = new Render();
    }
}

window.onload = function () {
    let main = new Main();
};

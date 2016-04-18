import * as THREE from 'three'
import Box from './Box'

export default class TextureLoader extends THREE.TextureLoader
{
    constructor() {
        super();

        this.load(Box.texturePath, [Box.texture]);
    }


    load(path, destination) {
        texture.minFilter = 0;
        texture.magFilter = 0;
        destination[0] = super.load(path);
    }
}

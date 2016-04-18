import * as THREE from 'three'
import Box from './Box'
import Floor from './Floor'

export default class TextureLoader extends THREE.TextureLoader
{
    constructor() {
        super();

        Box.texture = this.load(Box.texturePath);
        Floor.texture = this.load(Floor.texturePath);
    }


    load(path) {
        let texture = super.load(path);

        texture.minFilter = THREE.NearestFilter;
        texture.magFilter = THREE.NearestFilter;

        return texture;
    }
}

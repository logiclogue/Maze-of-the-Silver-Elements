import * as THREE from 'three'

export default class TextureLoader
{
    static loader = new THREE.TextureLoader();

    constructor(path) {
        this.path = path;
        this.texture;

        this.load();
    }


    load() {
        this.texture = this.constructor.loader.load(this.path);

        this.texture.minFilter = THREE.NearestFilter;
        this.texture.magFilter = THREE.NearestFilter;
    }
}

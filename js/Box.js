import * as THREE from 'three'

export default class Box extends THREE.Mesh
{
    constructor() {
        let geometry = new THREE.BoxGeometry(200, 200, 200);
        let material = new THREE.MeshBasicMaterial({
            vertexColors: THREE.FaceColors
        });

        super(geometry, material);
    }
}

import Generator from './Generator'
import Box from '../Box'
import Floor from '../Floor'
import Graph from '../Graph/Graph.js'

export default class Maze extends Generator
{
    constructor(size, scene) {
        super(10);

        this.scene = scene;
        this.graph = new Graph();
    }


    generateGraph() {
        for (let x = 0; x < this.size; x += 1) {
            for (let y = 0; y < this.size; y += 1) {
                let node = this.graph.addNode(x + ',' + y);

                for (let x1 = x - 1; x1 < x + 2; x1 += 1) {
                    for (let y1 = y - 1; y1 < y + 2; y1 += 1) {
                        try {
                            let isNotCentre = x1 !== x || y1 !== y;
                            let isInWorld = x1 >= 0 && y1 >= 0 && x1 < this.size && y1 < this.size;

                            if (isNotCentre && isInWorld) {
                            	//node.(new Edge(x1 + ',' + y1, distance));
                            }
                        }
                        catch (e) {

                        }
                    }
                }
            }
        }
    }

    draw(texture, floorTexture, boxGroup) {
        for (let x = 0; x < this.size; x += 1) {
            for (let y = 0; y < this.size; y += 1) {
                this.scene.add(new Floor(x, y, floorTexture));

                if (Math.random() > 0.8) {
                    this.scene.add(new Box(x, y, texture, boxGroup));
                }
            }
        }
    }
}

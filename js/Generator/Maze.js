import Generator from './Generator'
import Box from '../Box'
import Floor from '../Floor'
import Graph from '../Graph/Graph.js'
import DepthFirstSearch from './DepthFirstSearch'

export default class Maze extends Generator
{
    constructor(size, scene) {
        super(10);

        this.scene = scene;
        this.graph = new Graph();

        this.generateGraph();

        this.search = new DepthFirstSearch(this.graph);
    }


    generateGraph() {
        for (let x = 0; x < this.size; x += 1) {
            for (let y = 0; y < this.size; y += 1) {
                let node = this.graph.addNode(x + ',' + y);

                for (let i = -2; i < 2; i += 1) {
                    let x1 = x + (i % 2);
                    let y1 = y + (i + 1 === 2 ? 0 : i + 1);
                    let isInWorld = x1 >= 0 && y1 >= 0 && x1 < this.size && y1 < this.size;

                    if (isInWorld) {
                        node.addEdge(x + ',' + y, x1 + ',' + y1, 1);
                    }
                }
            }
        }

        this.graph.addStartNode('0,0');
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

import Generator from './Generator'
import Box from '../Box'
import Floor from '../Floor'
import DepthFirstSearch from './DepthFirstSearch'

export default class Maze extends Generator
{
    constructor(size, scene) {
        super(10);

        this.scene = scene;
        this.grid = [];

        this.generateGrid();

        this.search = new DepthFirstSearch(this.grid);
    }


    generateGrid() {
        for (let x = 0, maxX = (this.size * 2) + 1; x < maxX; x += 1) {
            this.grid[x] = [];

            for (let y = 0, maxY = (this.size * 2) + 1; y < maxY; y += 1) {
                this.grid[x][y] = true;
            }
        }
    }

    draw(texture, floorTexture, boxGroup) {
        for (let x = 0, maxX = this.grid.length; x < maxX; x += 1) {
            for (let y = 0, maxY = this.grid[x].length; y < maxY; y += 1) {
                if (this.grid[x][y]) {
                    this.scene.add(new Box(x, y, texture, boxGroup));
                }
                else {
                    this.scene.add(new Floor(x, y, floorTexture));
                }
            }
        }
    }


    _forAllAround(x, y, callback) {
        for (let i = -2; i < 2; i += 1) {
            let x1 = x + (i % 2);
            let y1 = y + (i + 1 === 2 ? 0 : i + 1);

            callback(x1, y1);
        }
    }
}

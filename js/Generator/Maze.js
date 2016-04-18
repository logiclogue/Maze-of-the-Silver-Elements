import Generator from './Generator'
import Wall from '../Wall'
import Floor from '../Floor'
import Ceiling from '../Ceiling'
import DepthFirstSearch from './DepthFirstSearch'

export default class Maze extends Generator
{
    constructor(size, scene) {
        super(size);

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

    draw(boxGroup) {
        for (let x = 0, maxX = this.grid.length; x < maxX; x += 1) {
            for (let y = 0, maxY = this.grid[x].length; y < maxY; y += 1) {
                if (this.grid[x][y]) {
                    let wall = new Wall(x, y, boxGroup);

                    // Full height walls at edges
                    if (this._isAnEdge(x, y)) {
                        wall.isRandomHeight = false;
                    }

                    wall.addToScene(this.scene);
                }
                else {
                    this.scene.add(new Floor(x, y));
                }

                this.scene.add(new Ceiling(x, y));
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

    _isAnEdge(x, y) {
        if (x === 0 || y === 0) {
            return true;
        }
        if (x === this.grid.length - 1 || y === this.grid.length - 1) {
            return true;
        }

        return false;
    }
}

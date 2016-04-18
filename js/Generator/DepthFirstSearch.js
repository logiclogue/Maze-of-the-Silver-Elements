export default class FirstDepthSearch
{
    constructor(grid) {
        this.grid = grid;
        this.stack = [];
        this.nodesVisited = [];

        this.stack.push([this.grid.length - 2, this.grid.length - 2]);
        this.grid[this.grid.length - 2][this.grid.length - 2] = false;

        this._run();
    }


    _run() {
        do {
            if (!this._findNextNode(this.stack[this.stack.length - 1])) {
                this.stack.splice(this.stack.length - 1, 1);
            }
        }
        while (this.stack.length !== 1);
    }

    _findNextNode(coords) {
        let nodeCurrect = this.grid[coords[0]][coords[1]];
        let nodeToVisit;
        let nodeCoordsToVisit;
        let nodesToTest = [];
        let hasVisitedAll = true;

        this._forNodesAround(coords[0], coords[1], (x, y) => {
            if (this._inWorld(x, y)) {
                // Must be indented because it will throw an error if grid square is outside world
                if (this.grid[x][y]) {
                    hasVisitedAll = false;
                    nodesToTest.push([x, y]);
                }
            }
        });

        if (hasVisitedAll) {
            return false;
        }

        do {
            nodeCoordsToVisit = nodesToTest[Math.floor(Math.random() * nodesToTest.length)];
            nodeToVisit = this.grid[nodeCoordsToVisit[0]][nodeCoordsToVisit[1]];
        }
        while (!nodeToVisit);

        this.grid[nodeCoordsToVisit[0]][nodeCoordsToVisit[1]] = false;
        this.grid[(nodeCoordsToVisit[0] + coords[0]) / 2][(nodeCoordsToVisit[1] + coords[1]) / 2] = false;
        this.stack.push(nodeCoordsToVisit);

        return true;
    }

    _inWorld(x, y) {
        let tooLowX = x < 0;
        let tooLowY = y < 0;
        let tooHighX = x > this.grid.length - 1;
        let tooHighY = y > this.grid.length - 1;

        return !tooLowX && !tooLowY && !tooHighX && !tooHighY;
    }

    _forNodesAround(x, y, callback) {
        for (let i = -2; i < 2; i += 1) {
            let x1 = x + ((i % 2) * 2);
            let y1 = y + ((i + 1 === 2 ? 0 : i + 1) * 2);

            callback(x1, y1);
        }
    }

    _forEdgesAround(x, y, callback) {
        for (let i = -2; i < 2; i += 1) {
            let x1 = x + (i % 2);
            let y1 = y + (i + 1 === 2 ? 0 : i + 1);

            callback(x1, y1);
        }
    }
}

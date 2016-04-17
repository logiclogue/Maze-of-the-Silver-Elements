export default class FirstDepthSearch
{
    constructor(grid) {
        this.grid = grid;
        this.stack = [];
        this.nodesVisited = [];

        this.stack.push([1, 1]);
        this.nodesVisited.push([1, 1]);

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
        let nodeCurrect = this.grid[coords[0]][this.grid[coords[1]]];
        let nodeToVisit;
        let edgeToVisit;
        let hasVisitedAll = true;

        this._forEdgesAround(coords[0], coords[1], (x, y) => {
            if (this.nodesVisited.indexOf(coords) === -1) {
                hasVisitedAll = false;
            }
        });

        if (hasVisitedAll) {
            return false;
        }

        /*do {

        }
        while ();*/
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


    /*_run() {
        do {
            if (!this._findNextNode(this.stack[this.stack.length - 1])) {
                this.stack[this.stack.length - 1].edges.forEach((edge, index) => {
                    if (edge.endNode === this.stack[this.stack.length - 2].theName) {
                        this.stack[this.stack.length - 1].edges.splice(index, 1);
                    }
                });

                this.stack.splice(this.stack.length - 1, 1);
            }
        }
        while (this.stack.length !== 1);
    }

    _findNextNode(node) {
        let nodeToTest;
        let edgeToVisit;
        let hasVisitedAll = true;

        node.edges.forEach((edgeTesting) => {
            if (this.nodesVisited.indexOf(this.graph.nodes[edgeTesting.endNode]) === -1) {
                hasVisitedAll = false;
            }
        });

        if (hasVisitedAll) {
            return false;
        }

        do {
            edgeToVisit = node.edges[Math.floor(Math.random() * node.edges.length)];
            nodeToTest = this.graph.nodes[edgeToVisit.endNode];
        }
        while (this.nodesVisited.indexOf(nodeToTest) !== -1);

        node.edges.splice(node.edges.indexOf(edgeToVisit), 1);
        this.stack.push(nodeToTest);
        this.nodesVisited.push(nodeToTest);

        return true;
    }*/
}

export default class FirstDepthSearch
{
    constructor(graph) {
        this.graph = graph;
        this.stack = [];
        this.nodesVisited = [];

        this.stack.push(this.graph.startNodes[0]);
        this.nodesVisited.push(this.graph.startNodes[0]);

        this._run();
    }


    _run() {
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
    }
}

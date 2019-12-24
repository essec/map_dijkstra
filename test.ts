newFunction();

function newFunction() {
    const graph_map = require('./baramee-node.json')
    const data = require('./data.json')
    var result = {}
    // Object.keys(graph_map).map(
    //     elem => {
    //         let a = graph_map[elem]["neighbor"]
    //         result[elem] = a
    //     }
    // )
    Object.keys(data).map(
      elem => {
        let a = data[elem]["id"]
        result[a] = data[elem]["neighbor"]
        // console.log(a)
      }
    )
    console.log(result)
    const Graph = require('node-dijkstra');
    const route = new Graph(result);
    // const route = new Graph();
    // route.addNode('A', { B: 1 });
    // route.addNode('B', { A: 1, C: 2, D: 4 });
    // route.addNode('C', { B: 2, D: 1 });
    // route.addNode('D', { C: 1, B: 4 });
    var a = route.path('a', 'd', { cost: true });
    // console.log('route: ' + a.path);
    console.log('cost: ' + '( ' + a.cost + ' m )');
}

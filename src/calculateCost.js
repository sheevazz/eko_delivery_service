function calculateCost(G,A) {
  path = G.split(',');
  route = A.split('-');
  // console.log(path[0].slice(0,-1));
  var onlyRoute = [];
  var cost = [];

  for(var i in path){
    onlyRoute.push(path[i].slice(0,2));
    cost.push(parseInt(path[i].slice(2)));
  }

  var result = 0;
  var inputPath =[];
  for(var i =0;i<route.length-1;i++){
    inputPath.push(route[i]+route[i+1]);
  }

  for(var i =0;i<inputPath.length;i++){
    for(var j =0;j<onlyRoute.length;j++){
      // console.log(inputPath[i]);
      // console.log(onlyRoute[j]);
      if(inputPath[i]==onlyRoute[j]){
        result += cost[j];
      }
    }
  }
  for(var i =0;i<inputPath.length;i++){
    if(onlyRoute.indexOf(inputPath[i])==-1){
      result = 'No Such Route';
    }
  }
  // console.log(result);
  return result;
}

module.exports = calculateCost;

// var fs = require("fs");
// var graph = fs.readFileSync("./input/graph.txt","utf-8");
// route = process.argv[2];
// route = 'A-B-E'
// route = 'A-D'
// route = 'E-A-C-F'
// route = 'A-D-F'

// calculateCost(graph,route);

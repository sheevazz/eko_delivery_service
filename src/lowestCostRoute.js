function countPossibleroute(G,start,end,stops) {
  const calculateCost = require('../src/calculateCost');
  path = G.split(',');
  var onlyRoute = [];
  var cost = [];
  for(var i in path){
    onlyRoute.push(path[i].slice(0,2));
  }
  var startRoute = [];
  for(var i=0;i<onlyRoute.length;i++){
    if(start==onlyRoute[i][0]){
      startRoute.push(onlyRoute[i]);
    }
  }
  var possibleRoute = generateRoute(startRoute,onlyRoute,stops-1);
  var startToEnd = [];
  for(var i=0;i<possibleRoute.length;i++){
    if(end == possibleRoute[i][possibleRoute[i].length-1]){
      startToEnd.push(possibleRoute[i]);
    }
  }
  var count =0;
  for(var i = 0 ;i<startToEnd.length;i++){
      var result =[];
    for(var j = 0;j<startToEnd[i].length-1;j=j+2){
      result.push(startToEnd[i][j]+startToEnd[i][j+1])
    }
    // console.log(onlyRoute,result);
    if(hasDuplicates(result)==false){
      // count++;
      // console.log(Array.from(new Set(result.join('').split(''))).join('-'));
      // console.log(Array.from(new Set(result.join('').split(''))).join('-'));
      var tmpPath = Array.from(new Set(result.join('').split(''))).join('-');
      if(start == end) {
        tmpPath += '-'+end;
      }
      // console.log(tmpPath);;
      cost.push(calculateCost(G,tmpPath));
    }
    // console.log(result);
  }
  // console.log(cost);
  // console.log(cost);
  // console.log(cost);
  return cost;
}

function generateRoute(start,route,stops){
  var start = start;
  // console.log(typeof(start));
  let result = [];
  // console.log(stops);
  if(stops>0){
    for(var i in start){
      for(var j in route){
        if(start[i][start[i].length-1]==route[j][0]){
          // console.log(start[i],route[j]);
          result.push(start[i]+route[j]);
        }
      }
    }
    return generateRoute(result,route,stops-1);
  }else{
    return start;
  }
  // console.log(typeof(result));
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

function lowestCostRoute(G,start,end,stops){
  result = [];
  if(!stops){
    stops = parseInt(G.split(',').length)
  }else{
    stops = stops;
  }
  for(var i=stops;i>=1;i--){
    // console.log(i);
    result = result.concat(countPossibleroute(G,start,end,i));
    // console.log(countPossibleroute(G,start,end,i));
    // console.log(countPossibleroute(G,start,end,i));
  }
  // console.log(result);
  var costs = result.map(function (x) {
    return parseInt(x, 10);
  });

  var sort = costs.filter(isNumber);
  // console.log(sort);
  // console.log(Math.min(...sort));
  return Math.min(...sort);
}

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

module.exports = lowestCostRoute;

// var fs = require("fs");
// var graph = fs.readFileSync("./input/graph.txt","utf-8");
// start = process.argv[2];
// end = process.argv[3];
// console.log(lowestCostRoute(graph,start,end));
// everyPossibleRoute(graph,start,end,stops);

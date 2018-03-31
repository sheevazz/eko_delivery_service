function countPossibleroute(G,start,end,stops) {
  path = G.split(',');
  var onlyRoute = [];
  var cost = [];
  for(var i in path){
    onlyRoute.push(path[i].slice(0,2));
    cost.push(parseInt(path[i].slice(2)));
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
    if(hasDuplicates(result)==false){
      count++;
      // console.log(result);
    }
    // console.log(result);
  }
  // console.log(count);
  // console.log(result);
  return count;
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

function everyPossibleRoute(G,start,end,stops){
  result = 0;
  if(!stops){
    stops = parseInt(G.split(',').length)
  }else{
    stops = stops;
  }
  for(var i=stops;i>=1;i--){
    // console.log(i);
    result = result + countPossibleroute(G,start,end,i);
    // console.log(countPossibleroute(G,start,end,i));
  }
  // console.log(result);
  return result
}

module.exports = everyPossibleRoute;

// var fs = require("fs");
// var graph = fs.readFileSync("./input/graph.txt","utf-8");
// start = process.argv[2];
// end = process.argv[3];
// stops = process.argv[4];
// everyPossibleRoute(graph,start,end,stops);

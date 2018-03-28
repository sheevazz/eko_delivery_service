function solution(G,A) {
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
  // onlyRoute = new Set(onlyRoute);
  for(var i =0;i<inputPath.length;i++){
    if(onlyRoute.indexOf(inputPath[i])==-1){
      result = 'No Such Route';
    }
  }
  console.log(result);
  return result;
}

graph = 'AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1'
route = 'A-B-E'
// route = 'A-D'
// route = 'E-A-C-F'
// route = 'A-D-F'

solution(graph,route);

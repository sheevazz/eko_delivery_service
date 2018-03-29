function solution(G,start,end,stops) {
  path = G.split(',');
  var onlyRoute = [];
  var cost = [];

  for(var i in path){
    onlyRoute.push(path[i].slice(0,2));
    cost.push(parseInt(path[i].slice(2)));
  }
  onlyRoute = new Set(onlyRoute.join('').split(''))
  var city = Array.from(onlyRoute);
  // console.log(city.join(''));
  var combination = combinations(city.join(''));
  // console.log(combination);
  var possibleRoute = [];
  for(var j in combination){
    if(combination[j].length == 5 && combination[j].indexOf('E')!= -1 && combination[j].indexOf('D')!= -1){
      possibleRoute.push(combination[j]);
    }
  }
  permutation = []
  for(var i in possibleRoute){
    var tmp = permut(possibleRoute[i]);
    permutation=permutation.concat(tmp);
  }

  var startToEnd = [];
  for(var i in permutation){
    var tmpEnd = parseInt(permutation[i].length)-1;
    if(permutation[i][0]=='E'&&permutation[i][tmpEnd]=='D'){
      startToEnd.push(permutation[i]);
    }
  }
  console.log(startToEnd);
}

function combinations(str) {
    var fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}

function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}

graph = 'AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1';
start = 'E';
end = 'D';
stops = 4;
solution(graph,start,end,stops);

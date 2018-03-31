const calculateCost = require('./src/calculateCost');
const everyPossibleRoute = require('./src/everyPossibleRoute');
const lowestCostRoute = require('./src/lowestCostRoute');
const fs = require("fs");
const graph = fs.readFileSync("./src/input/graph.txt","utf-8");

// console.log(process.argv[2]);
switch (parseInt(process.argv[2])) {
    case 1:
        console.log('Case 1');
        var cost = calculateCost(graph,process.argv[3]);
        console.log('The cost of delivery route :'+process.argv[3]+' = '+ cost);
        break;
    case 2:
        console.log('Case 2');
        var start = process.argv[3];
        var end = process.argv[4];
        var stops = process.argv[5];
        var numDeliveryRoute = everyPossibleRoute(graph,start,end,stops);
        console.log('Number of possible delivery route from '+start+' to '+end+'= '+ numDeliveryRoute);
        break;
    case 3:
        console.log('Case 3');
        var start = process.argv[3];
        var end = process.argv[4];
        var cheapestCost = lowestCostRoute(graph,start,end);
        console.log('The cheapest cost from '+start+' to '+end+' : '+ cheapestCost);
        break;
}

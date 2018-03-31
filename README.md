# Eko Delivery Service

## Step 1 : Install Node.js 
https://nodejs.org/en/download/package-manager/


## Step 2 : Create a directed graph text file

where a node represents a town and an edge represents a route
between two towns. The weighting of the edge represent the delivery cost between two
towns. the towns are named using the first letters of the alphabet. a route between two town
A to town B with cost of 1 is represented as AB1

>Example.  
> ```AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1```

then save the directed graph to this path

> */eko_delivery_service/src/input/graph.txt*


## Step 3 : To run program for each cases

### Case 1 : Calculate the delivery cost of the given delivery route. Follow the route as given.
 
- Use this command  <i><b>"node ekoDelivery.js 1 given-route"</b></i>
 
> Example. If you want to calculate the cost of Route A-B-E the command should be like this                            
> ` node ekoDelivery.js 1 A-B-E `

### Case 2 : Calculate the number of possible delivery route that can be construct by the given conditions. 

- Use this command  <i><b>"node ekoDelivery.js 2 start-town end-town stops[optional]"</b></i>

> Example. If you want to calculate the number of possible delivery route from E to D with a maximum of 4 stop the command should be like this                  
> ` node ekoDelivery.js 2 E D 4 `

### Case 3 : Calculate the cheapest delivery route between two town.  

- Use this command  <i><b>"node ekoDelivery.js 3 start-town end-town"</b></i>

> Example. If you want to calculate the cheapest delivery route between E to D the command should be like this         
> ` node ekoDelivery.js 3 E D `

Set.prototype.intersection = function(otherSet)
{
    // creating new set to store intersection
    var intersectionSet = new Set();
 
    // Iterate over the values 
    for(var elem of otherSet)
    {
        // if the other set contains a 
        // similar value as of value[i]
        // then add it to intersectionSet
        if(this.has(elem))
            intersectionSet.add(elem);
    }
 
// return values of intersectionSet
return intersectionSet;                
}
// using intersection function
// Declaring values for set1 and set2
var set1 = new Set([10, 20, 30, 40, 50]);
var set2 = new Set([40, 50, 60, 70, 80]);  
 
// performing union operation
// and storing the resultant set in 
// intersectionset
var intersectionSet = set1.intersection(set2);
 
// prints {40, 50}
console.log(intersectionSet.values());
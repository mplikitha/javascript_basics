Set.prototype.difference = function(otherSet)
{
    // creating new set to store differnce
     var differenceSet = new Set();
 
    // iterate over the values
    for(var elem of this)
    {
        // if the value[i] is not present 
        // in otherSet add to the differenceSet
        if(!otherSet.has(elem))
            differenceSet.add(elem);
    }
 
    // returns values of differenceSet
    return differenceSet;
}
 
// using difference function
// Declaring values for set1 and set2
var set1 = new Set([10, 20, 30, 40, 50]);
var set2 = new Set([40, 50, 60, 70, 80]);  
 
// performing union operation
// and storing the resultant set in 
// intersectionset
var differenceSet = set1.difference(set2);
 
// prints {10, 20, 30}
console.log(differenceSet);
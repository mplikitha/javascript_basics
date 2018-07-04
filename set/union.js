Set.prototype.union = function(otherSet)
{
    // creating new set to store union
    var unionSet = new Set();
 
    // iterate over the values and add 
    // it to unionSet
    for (var elem of this)
    {
        unionSet.add(elem);
    }
 
    // iterate over the values and add it to 
    // the unionSet
    for(var elem of otherSet)
        unionSet.add(elem);
 
    // return the values of unionSet
    return unionSet;
}
 
// using the union function
// Declaring values for set1 and set2
var set1 = new Set([10, 20, 30, 40, 50]);
var set2 = new Set([40, 50, 60, 70, 80]); 
// performing union operation
// and storing the resultant set in 
// unionSet
var unionSet = set1.union(set2);
 
// prints [10, 20, 30, 40, 50, 60, 70, 80]
console.log(unionSet.values());
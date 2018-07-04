Set.prototype.subSet = function(otherSet)
{
    // if size of this set is greater
    // than otherSet then it can'nt be 
    //  a subset
    if(this.size > otherSet.size)
        return false;
    else
    {
        for(var elem of this)
        {
            // if any of the element of 
            // this is not present in the
            // otherset then return false
            if(!otherSet.has(elem))
                return false;
        }
        return true;
    }
}
 
// using the subSet function
 
// Declaring different sets
var setA = new Set([10, 20, 30]);
var setB = new Set([50, 60, 10, 20, 30, 40]);
var setC = new Set([10, 30, 40, 50]);
 
// prints true
console.log(setA.subSet(setB));
 
// prints false
console.log(setA.subSet(setC));
 // prints true
console.log(setC.subSet(setB));
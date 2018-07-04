// Using Set.prototype.values()
// Using Set.prototype.keys()
// creating set 
var set1 = new Set();
 
// adding element to the set
set1.add(50);
set1.add(30);
set1.add(40);
set1.add("Geeks");
set1.add("GFG");
 
// getting all the values
var getValues = set1.values();
 
// prints a SetIterator
// that contains {50, 30, 40, "Geeks", "GFG"}
console.log(getValues);
 
// getting all the values
var getKeys = set1.keys();
 
// prints a SetIterator
// that contains {50, 30, 40, "Geeks", "GFG"}
console.log(getKeys);
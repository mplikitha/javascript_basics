var set1 = new Set();
 
// adding element to the set
set1.add(50);
set1.add(30);
set1.add(40);
set1.add(20);
set1.add(10);
 
// using entries to get iterator
var getEntriesArry = set1.entries();
 
// each iterator is array of [value, value]
// prints [50, 50]
console.log(getEntriesArry.next().value);
 
// prints [30, 30]
console.log(getEntriesArry.next().value);
 
// prints [40, 40]
console.log(getEntriesArry.next().value);
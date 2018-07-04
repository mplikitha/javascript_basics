// using Set.protoype[@@Iterator]()
var set1 = new Set(["sumit","sumit","amit","anish"]);
 
var getit = set1[Symbol.iterator]();
 
// Printing the values in the 
// iterator "getit" 
 
// prints {value: "sumit", done: false}
console.log(getit.next());
 
// prints {value: "amit", done: false}
console.log(getit.next());
 
// prints {value: "anish", done: false}
console.log(getit.next());
 
// prints {value: undefined, done: true}
console.log(getit.next());

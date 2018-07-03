// 1
var fruits=['banana','apple','orange'];
fruits.pop();
console.log(fruits)

//2
var fruits=['banana','orange','apple'];
fruits.push('kiwi')
console.log(fruits)

// 3
var fruits=['banana','orange','apple','kiwi'];
fruits.splice(1,2);
console.log(fruits)

//4
var girls = ["Cecilie", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];
var result= girls.concat(boys);
console.log(result);

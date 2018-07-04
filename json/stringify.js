var obj = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}
console.log(obj)
var s = JSON.stringify(obj)
console.log(s)

var o=JSON.parse(s)
console.log(o)
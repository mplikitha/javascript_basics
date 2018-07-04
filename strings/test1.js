// 1
var num = "15";
console.log(num.replace("5", "2"));
// 2
var myString = 'jQuery FTW!!!';
console.log(myString.charAt(7));
// 3
var message="Sam"
var final=message.concat(" is a"," hopeless.")
console.log(message)
console.log(final)
// 4
var sentence="Hi, my name is Sam!"
if (sentence.indexOf("Sam")!=-1)
console.log("Sam is in there!")
// 5
var myString = 'javascript rox';
console.log(myString.lastIndexOf('r'));
// 6
var intRegex = /[0-9 -()+]+$/;  

var myNumber = '999';
var myInt = myNumber.match(intRegex);
console.log(myInt);
//output: 999

var myString = '999 JS Coders';
var myInt = myString.match(intRegex);
console.log(myInt);
//output: null

var myString = '999 JavaScript Coders';
console.log(myString.replace(new RegExp( "999", "gi" ), "The"));
//output: The JavaScript Coders

var intRegex = /[0-9 -()+]+$/;  

var myNumber = '999';
var isInt = myNumber.search(intRegex);
console.log(isInt);
//output: 0

var myString = '999 JS Coders';
var isInt = myString.search(intRegex);
console.log(isInt);
//output: -1

var msg='welcome to javascript';
var word1=msg.split('l')
console.log(msg)
console.log(word1)

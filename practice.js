var prompt = require('prompt');
prompt.start();
var answer;
while(true){
 answer=prompt("You! What is the value of 2 + 2?", "");

if (answer == "4")
  console.log("You must be a genius or something.");
else if (answer == "3" || answer == "5")
  console.log("Almost!");
else
  console.log("You're an embarrassment.");
}
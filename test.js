console.log("Hello JS");

var person= {
    Name:"xxx",
    section:'a',
    usn:"ec048",
    num:500

};
console.log(person.Name + " belongs to " + person.section);


function chacolate(name)
{
    if(name=== 'DM')
    console.log(name);

    else
    console.log("we dont have, try " + name);
}
chacolate('munch')

// try throw catch 

function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo]) {
      console.log(months[mo]);
    } else {
      throw 'InvalidMonthNo'; 
    }
  }
  
  try { 
    monthName = getMonthName(myMonth); 
  }
  catch (e) {
    monthName = 'unknown';
    
  }
  getMonthName(1);
  // end try catch

 // for-in for-of

 var arr = [3,5,7];
arr.foo = 'hello';

for (var i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (var i of arr) {
   console.log(i); // logs 3, 5, 7
}

var greet = function(person, greeting) {
    var text = greeting + ', ' + person;
    return text;
};

console.log(greet('Likitha','hello'));

var arr = [3, 5, 7];
arr.foo = "hello";

for (var i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (var i of arr) {
   console.log(i); // logs "3", "5", "7"
    //it is does not log "3", "5", "7","hello"
}

function foo(i) {
  if (i < 0)
    return;
  console.log('begin: ' + i);
  foo(i - 1);
  console.log('end: ' + i);
}
foo(3);

var date= new Date(1997, 06, 03);
 month=date.getMonth();
console.log(month);

var date=new Date('june 03 1997');
month=date.getMonth();
console.log(month);
day=date.getDay();
console.log(day);

var s = new String('foo'); // Creates a String object
console.log(s); // Displays: {'0': 'f', '1': 'o', '2': 'o'}
 
var num=0;
function add()
{
  var num=0;
  num+=1;
  return num;
}
add();
add();
add();
console.log(num)


var add = (function () {
  var counter = 0;
  return function () {counter += 1; 
    console.log(counter)}
})();

add();
add();




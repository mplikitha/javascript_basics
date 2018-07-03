var cars=['saam','volvo','B M W'];
console.log(cars)

console.log(cars[1])

cars[0]="opel";
console.log(cars)

console.log(cars.length)

// array accessing
let arr=['apple',{name:'john'},function(){console.log("hello");}];
console.log(arr[0]);
console.log(arr[1].name)
arr[2]();

// push and pop
let fruits=['apple','mango','orange'];
fruits.push('banana');
console.log(fruits)

let fruit=['apple','mango','orange'];
fruit.pop();
console.log(fruit)
// shift removes first element
fruits.shift()
console.log(fruits)
// unshift add element in starting of array, push adds in last index
fruit.unshift('banana')
console.log(fruit)

// for loop
for(let i=0; i<fruits.length; i++)
{
    console.log(fruits[i])
}
// for of
 for(let fruit of fruits)
 {
     console.log(fruit)
 }
 // 2-d array
 let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  // to string
  console.log( matrix[1][1] );
let arr1=[1,2,3];
  console.log(String(arr1)==='1,2,3');

  // splice

  let arr2 = ["I", "study", "JavaScript", "right", "now"];
  arr2.splice(1,1);
  console.log(arr2)
  arr2.splice(0,3,"let's","read")
  console.log(arr2)
  // filter
  let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = users.filter(item => item.id < 3);
  
  console.log(someUsers.length); 

  let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)
console.log(lengths);

let ar=[4,1,8];
ar.sort();// work for single digit
console.log(ar)

// 
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  let arr3 = [ 1, 18, 15 ];
  
  arr3.sort(compareNumeric);
  
  console.log(arr3); 

// tasks 1
let shoppingcard=fruits;

shoppingcard.push('pear');
console.log(fruits)
console.log(fruits.length);
// task 2
let styles=['jaaz', 'blues'];
styles.push('Rock-n-Roll');
console.log(styles)
styles[1]='classics';
console.log(styles);
styles.shift()
console.log(styles);
styles.unshift('rap','raggage')
console.log(styles)

// task 3 calculate sum using function 
/*function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = Process.openValue();
  
    
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  console.log( sumInput() );*/

  






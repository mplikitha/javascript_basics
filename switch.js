var fruittype='apple';
switch (fruittype)
{
    case 'Oranges':
    console.log('Oranges are 50rs.');
    break;

    case 'bananas' :
    console.log('bananas are 20rs');
    break;


    case 'mangoes' :
    console.log('mangoes are 20rs');
    break;

    case 'cherrys' :
    console.log('cherrys are 80rs')

    default:
   console.log('Sorry, we are out of ' + fruittype + '.');
}
console.log("Is there anything else you'd like?");

 // to check continue

 var i = 0;
 var j = 10;
 checkiandj:
   while (i < 4) {
     console.log(i);
     i += 1;
     checkj:
       while (j > 4) {
         console.log(j);
         j -= 1;
         if ((j % 2) == 0) {
           continue checkj;
         }
         console.log(j + ' is odd.');
       }
       console.log('i = ' + i);
       console.log('j = ' + j);
   }
 
 
 
 
 
 

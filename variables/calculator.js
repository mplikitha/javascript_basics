function square(num){
    res=num*num;
    console.log('square of '+num+' is '+res);
}
square(3)

function halfnumber(num) {
    res=num/2;
    console.log('half of '+num+ ' is '+res)
}
halfnumber(6);

function percentage(a,b) {
    res=(a/b)*100;
console.log(a + ' is '+res+' % of '+b);
}

percentage(50,25)
 function areaofcircle(r) {
    const PI=3.14;
     var area;
     area= PI * r*r;
     console.log('area of circle of radius '+r+' is '+area)
 }
 areaofcircle(2);

 /*function areaofsquaredres(num) {
    var half    = halfnumber(num);
    var squared = square(half);
    var area    = areaofcircle(squared);
    var result  = percentage(squared, area);
    console.log(result);
}

areaofsquaredres(3);*/



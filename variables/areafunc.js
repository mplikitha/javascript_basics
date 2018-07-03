const PI=3.14;
function calcCircumference(radius) {
    var circumference= PI * 2*radius;
    console.log('circumference of a circle is '+circumference)
}
function calcArea(radius){
    var area= PI*radius*radius;
    console.log('area of a circle is '+area);
}
calcCircumference(10)
calcArea(10)
var arr=[1,2,3,4];
var arr2=[1,2,[3,4]];
function clone(array){
var arr2=array.slice(1);
console.log(arr2);
}
clone(arr);
clone(arr2)
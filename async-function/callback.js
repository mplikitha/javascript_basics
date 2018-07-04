/*dothis(andthenthis)
function andthenthis(){
    console.log('and then this');
}
function dothis(callback){
    console.log('this first');
    callback()
}*/
// 
andthenthis(dothis)
function dothis(){
    console.log('this first');
    
}

function andthenthis(callback){
    console.log('and then this');
    callback()
}

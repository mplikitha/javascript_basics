function add() {
    var cnt=0;
    cnt+=1;
    console.log(cnt)
}
add();
add();

// closure
var add= (function(){
    var cnt=0;
    return function(){
        cnt+=1;
        console.log(cnt)
    }
}
)()
add()
add()
add()


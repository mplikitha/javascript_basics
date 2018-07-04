async function f(){
var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
    //console.log('time delay')
  });

  
  console.log(promise1);
}
f()

  //

  async function f() {
    console.log(Promise.resolve(1));
  }
  
  f().then(console.log()); // 1

  //
  async function f1() {
    return 1;
  }
  
  f1().then(console.log()); // 1

  //
  

  
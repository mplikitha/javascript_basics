function welcome() {
    console.log("Hello world");
}
welcome()

function myfunction(x,y) {
    console.log(x*x);
}
myfunction(5,5);

function myfunction(name) {
    console.log('Hello ' + name);
}
myfunction('john')


var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName()); 

// clouser

function Counter() {
    
    var counter = 0;

    setTimeout( function () {
        var innerCounter = 0;
        counter += 1;
        console.log("counter = " + counter);

        setTimeout( function () {
            counter += 1;
            innerCounter += 1;
            console.log("counter = " + counter + ", innerCounter = " + innerCounter)
        }, 500);

    }, 1000);
};

Counter();

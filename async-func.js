console.log("pm");
setTimeout(function()
{
    console.log("wp")},3000);
    console.log("ap");

    // promise

    function yourRide() {
        return Promise.resolve('2017 Dodge Charger');
      }
      
      console.log(yourRide())

      // async func
      async function myRide() {
        return '2017 Dodge Charger';
      }
      console.log(myRide());
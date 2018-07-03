// 1
for(let i=1; i<10; i++)
{
    if(i===5)
    break;
    console.log(i);
}
// 2
for(let i=1; i<10; i++){
    if(i===5)
    continue;
    console.log(i)
}
// 3
for(let i=1; i<10; i++) {
    if(i===5 | i===7)
    continue;
    console.log(i)
}
// 4

favCar="BMW";
switch(favCar) {
    case "BMW":
      console.log( "German car");
      break;
    case "Ford":
      console.log("American car");
      break;
    case "Peugeot":
      console.log("French car");
      break;
    default:
      console.log("Unknown car name");
      break;
  }

  // 5
  var cars = ["BMW", "Volvo", "Saab", "Ford"];
  for(let i=0; i<cars.length; i++) {
      if(i==2)
      continue;
      console.log(cars[i])
  }
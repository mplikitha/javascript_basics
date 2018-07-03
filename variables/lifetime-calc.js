var age=21;
var maxage=60;
var numperday=3;
var totalNeeded = (numperday * 365) * (maxage - age);
var message = 'You will need ' + totalNeeded + ' chacolates to last you until the ripe old age of ' + maxage;
console.log(message);
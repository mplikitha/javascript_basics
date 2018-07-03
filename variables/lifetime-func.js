function lifetimesupply(age, numperday){
    var maxage=60;
    var totalNeeded = (numperday * 365) * (maxage - age);
    var message = 'You will need ' + totalNeeded + ' chacolates to last you until the ripe old age of ' + maxage;
    console.log(message);
}
lifetimesupply(21,3)
var year=[1995,2018,1600,2000,4];
for(let i=0; i<year.length; i++){
if ((year[i] % 4 === 0 && year[i] % 100 !== 0) || (year[i] % 100 === 0 && year[i] % 400 === 0))
console.log(year[i]+' is leap year')
else
console.log(year[i]+' is not a leap year ');
}
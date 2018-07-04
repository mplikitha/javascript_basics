// 1
for(let i=0; i<=20; i++){
    if(i%2==0)
    console.log(i+ ' is even ');
    else
    console.log(i+' is odd')
}

// 2
for(let i=0; i<=10; i++){
    console.log(i+'* 9='+i*9)
}

// 3
function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >=60) {
        return 'D';
    } else {
        return 'F';
    }
}

for (var i = 80; i <= 100; i++) {
  console.log('For ' + i + ', you got a ' + assignGrade(i));
}
// 1
function greatnum(a,b){
    if(a>b)
    console.log('greater num of' +a +' and '+b+ ' is ' +a)
    else
    console.log('greater num of' +a +' and '+b+ ' is ' +b)
}
greatnum(5,7)

// 2
function helloWorld(lang) {
    if (lang == 'fr') {
        console.log('Bonjour tout le monde');
    } else if (lang == 'es') {
        console.log('Hola, Mundo');
    } else {
        console.log('Hello, World');
    }
}

(helloWorld('en'));
(helloWorld('fr'));
(helloWorld('es'));

// 3
function assigngrade(score) {
    if(score>=90)
    console.log('grade is A')
    else if(score>=80)
    console.log('grade is B')
    else if(score>=60)
    console.log('grade is C')
    else if(score>40)
    console.log('grade is D')
    else
    console.log('grade is F')
}
assigngrade(90)
assigngrade(30)
assigngrade(60)

// 4
function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 2));

var word=['f','o','x'];
var guessword=['_','_','_'];

function guessletter(letter){
    var goodguess=false;
    var moretoguess=false;
    for(let i=0; i<word.length; i++){
    if(word[i]==letter){
        guessword[i]=letter;
        goodguess=true; 
    }
    if(guessword[i]=='_')
    moretoguess=true;
}

    if(goodguess)
    console.log('yes, You found a letter');
    console.log(guessword.join(''));
    if(!moretoguess)
    console.log('you won!')
    
    else
    console.log('no, thats not right');

}
guessletter('f')
guessletter('i')
guessletter('o')
guessletter('x')
guessletter('m') 

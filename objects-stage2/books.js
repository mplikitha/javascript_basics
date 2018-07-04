var books=[
    {
        title:'mahabaratha',
        author:'vyasa',
alreadyRead:'true',
    },
    {
        title:'ramayana',
        author:'valmiki',
        alreadyread:'false',
    }
];
for(let i=0; i<books.length; i++){
    var book = books[i];
  var bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}

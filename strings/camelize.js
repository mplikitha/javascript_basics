function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }

console.log(camelize("JavaScript Exercises"));
console.log(camelize("javaScript exercises"));
console.log(camelize("JavaScriptExercises"));
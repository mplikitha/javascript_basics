var objectKey = { foo: 'bar' };

var fromArray = new Map([[0, 'array0'], [objectKey, 'array1']]);

console.log(fromArray.get(0));
console.log(fromArray.get(objectKey));
console.log();

var generator = function*() {
  yield [0, 'generator0'];
  yield [objectKey, 'generator1'];
};

var fromGenerator = new Map(generator());
console.log(fromGenerator.get(0));
console.log(fromGenerator.get(objectKey));

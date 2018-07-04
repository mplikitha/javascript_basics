var objectKey = { foo: 'bar' };

var x = new Map();
x.set(1, 'keys are not converted to strings');
x.set('1', 'this is stored separately than the previous value');
x.set(objectKey, ['you use arbitrary objects as keys and values']);

console.log(x.get(1));
console.log(x.get('1'));
console.log(x.get(objectKey));

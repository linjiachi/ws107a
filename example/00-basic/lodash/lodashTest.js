var _ = require('lodash');

var c1 = _chunk(['a','b','c','d'], 2);

console.log('c1=', c1)
var c2 = _chunk(['a','b','c','d'], 3);
// => [['a','b'],['c','d']]
console.log('c2=', c2)

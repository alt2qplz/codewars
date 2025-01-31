
// Что будет выведено в консоль

var whatIsTruthy = [1, 'dfd', "0", {}, '', function() {}, NaN, true, false, 0, [], Infinity, null, undefined, -1];

console.log(whatIsTruthy.filter(item => item).length);

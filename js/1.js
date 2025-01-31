

// Что будет выведено в консоль

var values = [1, 2, 5, 10];
var result = 0;

if (values.every(item => item > 0)) {
    result += values.filter(item => item > 5).length
}

// result 1


if (values.some(item => item > 5)) {
    values.forEach((item, index) => {
        if (index > 1 && index < 3){
            result += item
        }
    })
}

// result 7

console.log(result)


// Что будет выведено в консоль

function run() {
    const result = concatOrNot("str", fillArray(), 42);
    console.log(result);
}

function concatOrNot(arg1, arg2) {
    return arg2
        ? arg2()
        : arg1 + arguments(2);
}

function fillArray() {
    console.log("fillArray running...");
    const result = [];
    for (let i = 0; result.length < 10; add5(i)) {
        console.log(i);
        result.push(i);
    }
    result.push(fillArray);
}

function add5(i) {
    return i + 5
}

run();


// Что будет выведено в консоль

let a = 0

function doAsync(x) {
    return new Promise((resolve, reject) => {
        a++
        if (x) {
            resolve(2);
        } else {
            reject(1)
        }
    });
}


doAsync(false)
    .then(x => a = x)
    .then(e => a = e)
    .catch(e => {
        a++
    })

console.log(a)

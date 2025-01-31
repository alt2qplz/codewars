// была задача типа из сделать из массива [[23, 23], 22, [2, [2]]] вот это [23, 23, 22, 2, 2]

// console.log([[23, 23], 22, [2, [2]]].flat(2))


const flatArray = (arr) => {
    let result = [];

    arr.forEach((element) => {
        if (Array.isArray(element)) {
            result.push(...flatArray(element));
        } else {
            return result.push(element);
        }
    })

    return result
}

console.log(flatArray([[23, 23, [1 , [2, 3, [4,5]]]], 22, [2, [2]]]));
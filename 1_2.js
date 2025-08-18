function flattening(array) {
    result = []
    array.forEach(element => {
        while (typeof array[element] === Array) {
            array[element].forEach(element => {
                result.push(element)
            });
        };
        if (typeof array[element] !== Array) {
            array.forEach(element => {
                result.push(element)
            });
        }
    });
    return result
}

console.log(flattening([1, [2, [3, [4]], 5]]))
function flattening(array) {
    result = []
    array.forEach(element => {
        if (Array.isArray(array[element])) {
            while (typeof array[element] === Array) {
                array[element].forEach(element => {
                    result.push(element)
                });
            };
        }
        else {
            result.push(element)
        };
    });
    return result
}

console.log(flattening([1, [2, [3, [4]], 5]]))
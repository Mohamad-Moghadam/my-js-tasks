function sortArray(array) {
    array.sort((a, b) => a - b);
    return array
}

let array = [10 , 20 , 1 , 5 , 8 , 4 , 19 , 3]
console.log(sortArray(array))
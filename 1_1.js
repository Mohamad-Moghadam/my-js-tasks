function filtering(array) {
    result = []
    array.forEach(element => {
        if (element % 2 == 0){
            result.push(element)
        }
    });
    return result

}

console.log(filtering([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
function transList(array) {
    let obj = {}

    array.forEach(element => {
        let elementLen = element.length
        obj[elementLen] = element
    });

    return obj
}

let array = ["hi", "I've been", "waiting", "for", "you", "to skeem", "my code"]
console.log(transList(array))
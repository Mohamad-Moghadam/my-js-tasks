function transList(array) {
    let obj = {}
    let final = []

    array.forEach(element => {
        let elementLen = element.length
        final.push(obj[elementLen] = element)
    });

    return obj
}

let array = ["hi", "I've been", "waiting", "for", "you", "to skeem", "my code"]

console.log(transList(array))
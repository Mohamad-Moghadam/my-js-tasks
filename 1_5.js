function transList(array) {
    let obj = {}
    let final = []

    array.forEach(element => {
        let elementLen = element.length
        obj[elementLen] = element
        final.push({[elementLen]: element})
    });

    return final
}

let array = ["hi", "I've been", "waiting", "for", "you", "to skeem", "my code"]

console.log(transList(array))
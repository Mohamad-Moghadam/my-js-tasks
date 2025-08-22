function seenItem(array) {
    let seen = {}
    array.forEach(element => {
        seen[element] = (seen[element] || 0) + 1;
    });

    return seen
}

console.log(seenItem(['a', 'b', 'a', 'c', 'b', 'a']))
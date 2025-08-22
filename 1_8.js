function inRange(start, end, the_num) {
    if (the_num >= start && the_num <= end) {
        return true
    }
    else {
        return false
    }
}

console.log(inRange(-20, 80, -10))
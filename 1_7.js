function convertTime(hour, minute) {
    new_hour = hour%12
    return `${new_hour}:${minute}`
}

console.log(convertTime(23,15))
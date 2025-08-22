function withoutVowels(str) {
    str.split("")
    for (letter of str){
        if ("aeiou".includes(letter.toLowerCase())) {
            return true;}
        }
    return false
}

console.log(withoutVowels("hello world!"))
function propCounter(obj) {
    var counter = 0
    for (let _ in obj) {
        counter += 1
    };
    return counter
};

let instance = {
    username : "Holy crap, he's back",
    company : "Do I even have a company?",
    bank_balance : -1000,
    additionalInfo : {jsExperience : undefined}
}
console.log(propCounter(instance))
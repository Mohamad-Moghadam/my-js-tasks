function BMI(weight, height) {
    unique_bmi = weight / height ** 2
    if (unique_bmi < 18.5) {
        return "underweight"
    }
    else if (unique_bmi < 24.9) {
        return "normal"
    }
    else if (unique_bmi < 29.9) {
        return "overweight"
    }
    else{
        return "obesity"
    }
}

console.log(BMI(94, 1.78))
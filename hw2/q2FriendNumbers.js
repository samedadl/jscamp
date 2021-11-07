// Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

function properDivisorsSum(number) {
    let total = 0
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            total += i
        }
    }
    return total
}

function friendNumbers(number1, number2) {
    let total1 = properDivisorsSum(number1)
    let total2 = properDivisorsSum(number2)

    if (total1 == number2 && total2 == number1) {
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır.")
    } else {
        console.log(number1 + " ve " + number2 + " arkadaş sayı değillerdir.")
    }
}

friendNumbers(220, 284)
friendNumbers(10,24)
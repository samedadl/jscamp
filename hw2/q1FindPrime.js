// JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

function findPrime(...numbers) {
    let prime= true
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i]; j++) {   
            if (j !=1 && j!=numbers[i] && numbers[i] % j == 0 || numbers[i]==1) {
                console.log(numbers[i]+ " asal sayı değildir.")
                prime=false
                break
            }
            else {
                prime = true
            }
        } 
        if (prime || numbers[i]==2) {
            console.log(numbers[i]+" asal sayıdır.")
        }  
    }
}

findPrime(3,18,13,25,6,7,8,9,2)

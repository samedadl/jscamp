// 1000'e kadarki tüm asal sayıları listeleyen programı yazınız

let numbers=[]
for (let i = 1; i < 1000; i++) {
    numbers[i] = i;
    
}
function listPrime(...numbers) {
    let prime= true
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i]; j++) {   
            if (j !=1 && j!=numbers[i] && numbers[i] % j == 0 || numbers[i]==1) {
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

listPrime(...numbers)
// 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

for (let i = 1; i < 1000; i++) {
    let toplam=0
    for (let j = 0; j < i; j++) {
        if (i % j == 0) {
            toplam += j
        } 
    }
    if (toplam == i) {
        console.log(i)
    }
}
 
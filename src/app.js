console.log("Merhaba Kodlama.io")

//var dolarDun = 9.20
//dolarDun = "Ankara"
//var dolarBugun = 9.30

//console.log(dolarDun) // ankara değeri yazdırır 
//son değer neyse o yazılır

// kod yukardan aşağıya çalışır 
//değişken sonra tanımlanırsa undefined der
//console.log(dolarDun)
//var dolarDun = 9.20

//var yerine let kullan


let dolarBugun = 9.30
let dolarDun = 9.20 
{
    let dolarDun = 9.10
}
console.log(dolarDun)

//var ile tanımlasaydık sonuç 9.10 olacaktı
//js type safe değildir

const euroDun=11.2
// const sabit veri için kullanılır
//euroDun=11
console.log(euroDun)//hata alırız
// const a atanan bir veri için başka veri atanamaz


//array 
let konutKredileri = ["Özel Konut Kredisi", "Konut Kredisi","Emlak Konut Kredisi", "Kamu Konut Kredisi"]
//camelCasing küçük başlayıp büyük devam etmek
//PascalCasing baş harfleri büyük
//let konutKredileri = [12,"Emlak Konut Kredisi", ["K","a","m","u"]]
console.log(konutKredileri)
// ctrl k +ctrl c toplu yorum satırı yapar
console.log("<ul>")
for (let i = 0; i<konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>" )
}
console.log("</ul>")
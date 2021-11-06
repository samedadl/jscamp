// console.log("Sepete eklendi!")

// console.log("Sepete eklendi!")

// console.log("Sepete eklendi")

// function addToCart(productName = "Elma", quantity) {
//     console.log("Sepete eklendi :  ürün :" + productName + " adet : " + quantity) 
// }

// addToCart("Elma")
// addToCart("Yumurta")
// addToCart("Karpuz")
// addToCart()
// addToCart(15)
// addToCart("Limon")
// addToCart(10)

function addToCart(quantity, productName = "Elma") {
    console.log("Sepete eklendi :  ürün : " + productName + " adet : " + quantity) 
}

addToCart(10)

// arrow function
let sayHello = () => {
    console.log("Hello World!")   
}
sayHello()

//normal function
let sayHello2 = function () {
    console.log("Hello World 2")    
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2=product3
product2.productName= "karpuz"
console.log(product3.productName)// dönen sonuç karpuz

let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)// dönen sonuç 20
// değer tip >>> sayılar
// referans tip >>> objeler arrayler
//stack & heap
// değer tiplerde sayı atanır ve işi biter 
//referans tiplerde veri atanmaz veri referans numarası atanır yani aynı refereansı ifade ederler
// biri değince diğeri de değişir

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(number1, number2) {
    console.log(number1 + number2)
}
add(20,30)

function add2(number1, number2, number3, number4) {
    console.log(number1 + number2 + number3 + number4)
}

function add(...numbers) { //rest
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total =total+ numbers[i]        
    }
    console.log(total)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

//rest i her zaman fonksiyonun sonuna koy

console.log(Math.max(30,10,500,600,120))
let numbers = [30,10,500,600,120,999]
console.log(...numbers) //spread
console.log(Math.max(...numbers))


let regions = ["İç Anadolu", "Marmara", "Karadeniz"]
console.log(regions[1])

// let [icAnadolu,marmara] = ["İç Anadolu", "Marmara", "Karadeniz"]
// console.log(icAnadolu)
// console.log(marmara)

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name: "İç Anadolu",population:"20M"},
    {name: "Marmara",population:"30M"},
    {name: "Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
console.log(icAnadolu.name)
console.log(marmara.population)
console.log(icAnadoluSehirleri)


let newProductName,newUnitPrice,newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
    = {productName:"Elma", unitPrice:10, quantity:5})


console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)




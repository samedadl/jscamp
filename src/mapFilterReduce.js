let cart=[
    {id:1, productName:"telefon", quantity:3, unitPrice:4000},
    {id:1, productName:"bardak", quantity:2, unitPrice:30},
    {id:1, productName:"kalem", quantity:1, unitPrice:20},
    {id:1, productName:"şarj cihazı", quantity:2, unitPrice:100},
    {id:1, productName:"kitap", quantity:3, unitPrice:30},
    {id:1, productName:"pot", quantity:3, unitPrice:150}
]

// spa single patch apllication react vue angular -- tek sayfadan oluşan uygulamalar

//cart.push({id:7, productName:"ruhsat", quantity:1, unitPrice:20})

function addToCart(sepet) {
    sepet.push({id:7, productName:"ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)

console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
}

sayiTopla(sayi)
console.log(sayi)

cart.map(product=>console.log(product.productName))

console.log("<ul>")
cart.map(product=>{
    console.log("<li>" + product.productName+ " : " 
    + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)

let total = cart.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(total)

let total2 = cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)
console.log(total2)

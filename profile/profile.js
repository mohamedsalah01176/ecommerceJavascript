let localEmail=localStorage.getItem("email")
let localUserName=localStorage.getItem("useName")
let localPassword=localStorage.getItem("password")
let localImage=localStorage.getItem("image")

let products=JSON.parse(localStorage.getItem( "productStatic" ))  ;
let myProducts=products.filter(i=>i.isMe == "y")
console.log(myProducts)

let name =document.querySelector("#name")
let email =document.querySelector("#email")
let numberProduct =document.querySelector("#numberProduct")
let image =document.querySelector(".image")

name.innerHTML=localUserName
email.innerHTML=localEmail
numberProduct.innerHTML=myProducts.length
image.innerHTML =`<img class="w-100 h-100  rounded-circle"   src="${localImage}" alt="image">`


function edit(){
    window.location="../editProfile/editProfile.html"
}

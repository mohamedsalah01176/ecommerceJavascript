let title =document.querySelector('#title')
let discraption =document.querySelector('#discraption')
let price =document.querySelector('#price')
let upload =document.querySelector('#upload')
let foundUser =document.querySelector('#foundUser')
let unFoundUser =document.querySelector('#unFoundUser')
let user =document.querySelector('#user')
let logout =document.querySelector('.logout')
let image =document.querySelector('#image')
let urlImage;


const products=[
    {id:1,
        title:"Lenovo",
        price:100,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg",
        quintity:0,
        isMe:"n"
        
    },
    {id:2,
        title:"Dell",
        price:150,
        discraption:"this is the best laptop",
        image:"/images/download.jpg",
        quintity:0
    },
    {id:3,
        title:"HP",
        price:90,
        discraption:"this is the best laptop",
        image:"/images/lenovo_59418226_y50_i7_4700hq_8gb_1tb_windows8_1pro_15_6_1073172.jpg",
        quintity:0,
        isMe:"n"
    },
    {id:4,
        title:"Lenovo",
        price:100,
        discraption:"this is the best laptop",
        image:"/images/812NShN3MpL._SL1500_.jpg",
        quintity:0,
        isMe:"n"
    },
    {id:5,
        title:"Dell",
        price:150,
        discraption:"this is the best laptop",
        image:"/images/IMG_3458-e1583333763395-2048x1365.webp",
        quintity:0,
        isMe:"n"
    },
    {id:6,
        title:"HP",
        price:90,
        discraption:"this is the best laptop",
        image:"/images/R.jpg",
        quintity:0,
        isMe:"n"
    },
    {id:7,
        title:"Lenovo",
        price:100,
        discraption:"this is the best laptop",
        image:"/images/71HRMr3uAwL._SL1500_.jpg",
        quintity:0,
        isMe:"n"
    },
    
    
]




let userName=localStorage.getItem('useName')
let password=localStorage.getItem('password')
let email=localStorage.getItem('email')


if(email && password){
    foundUser.style.display='flex'
    unFoundUser.style.display='none'
    user.innerHTML=userName
    logout.addEventListener('click',()=>{
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.reload();  
    })

}else{
    foundUser.style.display='none'
    unFoundUser.style.display='flex'
}



let idProduct=JSON.parse(localStorage.getItem( 'idEdite' ))  ;
let prductsStatic=JSON.parse(localStorage.getItem( 'productStatic' )) || products ;

let getProductId=prductsStatic.filter(item=>item.id === idProduct)
console.log(getProductId)
title.value=getProductId[0].title
discraption.value=getProductId[0].discraption
price.value=getProductId[0].price
image.urlImage=getProductId[0].image
upload.addEventListener('click',function(e){
    console.log(title.value)
    e.preventDefault()
    getProductId[0].title=title.value
    getProductId[0].discraption=discraption.value
    getProductId[0].price=price.value
    getProductId[0].image=urlImage
    localStorage.setItem("productStatic",JSON.stringify(prductsStatic))

    setTimeout(()=>{
        window.location='../home/home.html'
    },1000)
})

image.addEventListener('change',function(){
    let file=this.files[0]

    if(file.type !== "image/jpeg" && file.type !== "image/png" ){
        alert( "Please select a valid image format (JPEG or PNG)" )
        return;
    } 
    if(file.size > 2*1024*1024){
       alert("File too big, please select an image with less than 2MB")
       return;  
    }
    image64(file)
})

function image64(file){
    let reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onload=function(){
        urlImage=reader.result
    }
    console.log(urlImage)
}

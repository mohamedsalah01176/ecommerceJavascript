let title =document.querySelector('#title')
let discraption =document.querySelector('#discraption')
let price =document.querySelector('#price')
let submit =document.querySelector('#submit')
let foundUser =document.querySelector('#foundUser')
let unFoundUser =document.querySelector('#unFoundUser')
let user =document.querySelector('#user')
let logout =document.querySelector('.logout')

let urlImage;


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

const products=[
    {id:1,
        title:"Lenovo",
        price:100,
        discraption:"this is the best laptop",
        image:"../images/OIP.jpg",
        quintity:0,
        isMe:"n"
        
    },
    {id:2,
        title:"Dell",
        price:150,
        discraption:"this is the best laptop",
        image:"../images/download.jpg",
        quintity:0
    },
    {id:3,
        title:"HP",
        price:90,
        discraption:"this is the best laptop",
        image:"../images/lenovo_59418226_y50_i7_4700hq_8gb_1tb_windows8_1pro_15_6_1073172.jpg",
        quintity:0,
        isMe:"n"
    },
    {id:4,
        title:"Lenovo",
        price:100,
        discraption:"this is the best laptop",
        image:"../images/812NShN3MpL._SL1500_.jpg",
        quintity:0,
        isMe:"n"
    },
    {id:5,
        title:"Dell",
        price:150,
        discraption:"this is the best laptop",
        image:"../images/IMG_3458-e1583333763395-2048x1365.webp",
        quintity:0,
        isMe:"n"
    },
    {id:6,
        title:"HP",
        price:90,
        discraption:"this is the best laptop",
        image:"../images/R.jpg",
        quintity:0,
        isMe:"n"
    },
    {id:7,
        title:"Lenovo",
        price:100,
        discraption:"this is the best laptop",
        image:"../images/71HRMr3uAwL._SL1500_.jpg",
        quintity:0,
        isMe:"n"
    },
    
    
]



submit.addEventListener("click", function(e){
    e.preventDefault()
    let allProducts=localStorage.getItem('productStatic')?JSON.parse(localStorage.getItem('productStatic')) :products
    let titleVaule=title.value
    let desVaule=discraption.value
    let priceVaule=price.value

console.log("klkkkk")
    if(titleVaule && desVaule){
        let obj={id:allProducts?allProducts.length+1 : 1,
            title:titleVaule,
            price:priceVaule,
            discraption:desVaule,
            image:urlImage,
            quintity:0,
            isMe:"y"
        }

        let newProduct=[...allProducts,obj]
        localStorage.setItem("productStatic",JSON.stringify(newProduct))
    }
    else{
        alert("fill the fields please ")
    }
    titleVaule.innerHTML=" "
    desVaule.innerHTML=""
    priceVaule.innerHTML=""

})



let cradcon=document.querySelector("#cradcon")
let numcard=document.querySelector("#numcard")
let textCard=document.querySelector(".textCard") 
let iconCart=document.querySelector(".iconCart") 



let arraypro=localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):[]


if(arraypro){
    numcard.innerHTML=arraypro.length
}

iconCart.addEventListener('click', function(){
    
    textCard.innerHTML =arraypro.map((item,index)=>{
            return(
                `
                
                <div class="cards gap-0 my-3">
                <div onclick='goPageDetails(${item.id})' class="image ">
                    <img class="w-100" src=${item.image} alt="kk">
                </div>
                    <div class="text">
                        <h3>${item.title}</h3>
                        <div class="d-flex justify-content-between align-items-center">
                            <h5>${item.price}$</h5>
                            <i class="fa-regular fa-heart fs-4 "></i>
                        </div>
                        <p>${item.discraption}</p>
                        <h5>Quintity:${item.quintity}</h5>
                        
                    </div>
                </div>
                `
    
            )
    }).join("")


    if(textCard.style.display=="block"){
        textCard.style.display="none"
    }else{
        textCard.style.display="block"
    }
})





let image =document.querySelector('#image')
image.addEventListener('change',function(){
    let file=this.files[0]
    if(file.type !== "image/jpeg" && file.type !== "image/png" ){
        alert( 'Please select a valid image file');
    }
    if(file.size >2*1024*1024){
        alert( 'Image size is too large, please select an image with less than 2MB');
    }
    // urlImage=URL.createObjectURL(file)
    image64(file)
    console.log(urlImage)
})


function image64(file){
    let reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onload=function(){
        urlImage=reader.result
    }
    console.log(urlImage)
}

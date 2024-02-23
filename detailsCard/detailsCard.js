let localEmail =localStorage.getItem('email')
let localUserName =localStorage.getItem('useName')
let foundUser=document.querySelector('#foundUser')
let unFoundUser=document.querySelector('#unFoundUser')
let cradcon=document.querySelector('#cradcon')
let user =document.querySelector('#user')
let logout =document.querySelector('.logout')
let numcard =document.querySelector('#numcard')
let iconCart =document.querySelector('.iconCart')
let textCard =document.querySelector('.textCard')
let cartProducts=JSON.parse(localStorage.getItem('products'))


const localitem=JSON.parse(localStorage.getItem("itemProduct"))


const products=[
    {id:1,
        title:"Lenovo",
        price:100,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:2,
        title:"Dell",
        price:150,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:3,
        title:"HP",
        price:90,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:4,
        title:"Lenovo",
        price:100,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:5,
        title:"Dell",
        price:150,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:6,
        title:"HP",
        price:90,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:4,
        title:"Lenovo",
        price:100,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:5,
        title:"Dell",
        price:150,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:6,
        title:"HP",
        price:90,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:4,
        title:"Lenovo",
        price:100,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:5,
        title:"Dell",
        price:150,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:6,
        title:"HP",
        price:90,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:4,
        title:"Lenovo",
        price:100,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:5,
        title:"Dell",
        price:150,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    {id:6,
        title:"HP",
        price:90,
        discraption:"this is the best laptop",
        image:"/images/OIP.jpg"
    },
    
]



if(localEmail){
    foundUser.style.display='flex'
    user.innerHTML=localUserName
    logout.addEventListener('click',function(){
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        localStorage.removeItem("useName")
        window.location.reload()
    })
}else{
    unFoundUser.style.display='flex'
}
(function(){
    cradcon.innerHTML=`
            <div  class=" cards">
                <div class="image ">
                    <img class="w-100" src=${localitem.image} alt="kk">
                </div>
                <div class="text">
                    <h3>${localitem.title}</h3>
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>${localitem.price}$</h5>
                        <i class="fa-regular fa-heart fs-4 "></i>
                    </div>
                    <p>${localitem.discraption}</p>
                    <div class="text-center">
                        <button class="btn btn-success " onclick='addToCart(${localitem.id})'>Add To Cart</button>
                    </div>
                </div>
            </div>
    
    `
    
}())


let arraypro=JSON.parse(localStorage.getItem('products'))
if(arraypro){
    numcard.innerHTML=arraypro.length
}
function addToCart(id){
    if(localEmail ){
        let choosenpro=products.find(item=>item.id == id)
        arraypro.push(choosenpro)
        localStorage.setItem('products',JSON.stringify(arraypro))
        
        numcard.innerHTML=arraypro.length
    }
    else{
        window.location="/regiter/register.html"
    }
}



iconCart.addEventListener('click', function(){
    
    textCard.innerHTML +=arraypro.map((item,index)=>{
        return(
            `
            
            <div class="cards gap-0 m-0">
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
                    
                </div>
            </div>
            `

        )
    })
    if(textCard.style.display=="block"){
        textCard.style.display="none"
    }else{
        textCard.style.display="block"
    }
})
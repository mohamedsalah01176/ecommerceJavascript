let foundUser =document.querySelector('#foundUser')
let user =document.querySelector('#user')
let logout =document.querySelector('.logout')
let localEmail=localStorage.getItem("email")
let localPassword=localStorage.getItem("password")
let localUserName=localStorage.getItem("useName")   
   


if(localEmail){
    foundUser.style.display="flex"
    user.innerHTML=localUserName
    logout.addEventListener('click',()=>{
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.reload();  
    })
}else{
    unFoundUser.style.display="flex"

}


let cradcon=document.querySelector("#cradcon")
let numcard=document.querySelector("#numcard")
let textCard=document.querySelector(".textCard") 
let iconCart=document.querySelector(".iconCart") 

let localPro=localStorage.getItem('products')

if(localPro){
    let arraypro=JSON.parse(localPro)
    getProducts(arraypro)
    numcard.innerHTML=arraypro.length
}

function getProducts(products){
    cradcon.innerHTML=products.map((item,index)=>{
        return(
            `
            <div class="col-8 col-md-3 cards">
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
            <div class="text-center">
            <h5>Quintity:${item.quintity}</h5>
            <button class="btn btn-success " onclick='removeFromCart(${item.id})'>Remove</button>
            </div>
            </div>
            </div>
            `
            
            )
        }).join("")
    }
    
    
    function removeFromCart(id){
        if(localPro){
            
            let products =JSON.parse(localPro)
            let choosenpro=products.filter((item)=>item.id !== id)
            
            localStorage.setItem('products',JSON.stringify(choosenpro))
            // console.log(arraypro)
            
            numcard.innerHTML=choosenpro.length
            
            window.location.reload()
        }
        
        
    }
    

function goPageDetails(id){
    if(localEmail && localPassword){
        let products=JSON.parse(localPro)
        let item=products.find(item=>item.id===id)

        localStorage.setItem('itemProduct',JSON.stringify(item))
        window.location=`/detailsCard/detailsCard.html`
    }
    else{
        window.location='/login/login.html'
    }
}


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
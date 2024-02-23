let unFoundUser =document.querySelector('#unFoundUser')
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
// localStorage.setItem('productStatic',JSON.stringify(products))
let staticProducts=localStorage.getItem('productStatic')?JSON.parse(localStorage.getItem('productStatic')) : products
getProducts(staticProducts)


function getProducts(productsmap){
    cradcon.innerHTML =productsmap.map((item,index)=>{
        return(
            `
            <div  class="col-8 col-md-3 cards" style="border:${item.isMe == "y"?"2px solid green":""}">
            <div onclick='goPageDetails(${item.id})' class="image w-100  " style="height:150px">
            <img class="w-100 h-100" src=${item.image} alt="kk">
            </div>
            <div class="text">
            <h3>${item.title}</h3>
            <div class="d-flex justify-content-between align-items-center">
            <h5>${item.price}$</h5>
            <i style='color:${item.liked === true?'red':"green"}' class="fa-solid fa-heart fs-4 "  onclick='addFavioret(${item.id})'></i>
            </div>
            <p>${item.discraption}</p>
            <div class="text-center">
            <button class="btn btn-success " onclick='addToCart(${item.id})'>Add To Cart</button>
            ${item.isMe == "y"?'<div class="mt-2 d-flex  justify-content-around align-items-center"><button class="btn btn-primary " onclick="editeProduct('+ item.id +')">edite</button> <button class="btn btn-danger " onclick="removeItem('+ item.id +')">remove</button></div>'
            :""}
            </div>
            </div>
            </div>
            `
            
            )
        }).join("")
    }


let arraypro=localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):[]
if(arraypro){
    numcard.innerHTML=arraypro.length
}
function addToCart(id){
    if(localEmail && localPassword){
        let productss=localStorage.getItem("productStatic")?JSON.parse(localStorage.getItem("productStatic")): products 
        let choosenpro=productss.find((item)=>item.id === id)
        let existItem=arraypro.find((item) => item.id === id)
        // console.log(existItem)
        if(existItem){
            choosenpro.quintity +=1
            console.log("quintitu")
        }
        else{
            arraypro.push(choosenpro)
            console.log("push")
        }
        let uipe=getSameItem(arraypro,"id")

        localStorage.setItem('products',JSON.stringify(uipe))

        // console.log(existItem)
        // console.log(arraypro)
        
        numcard.innerHTML=arraypro.length
        
    }
    else{
        window.location="/regiter/register.html"
    }
    // window.location.reload()
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

function goPageDetails(id){
    if(localEmail && localPassword){
        window.location=`/detailsCard/detailsCard.html`
        let item=products.find(item=>item.id===id)
        localStorage.setItem('itemProduct',JSON.stringify(item))
    }
    else{
        window.location='/login/login.html'
    }
}


let inputSearch=document.querySelector('#input')
let btnsubmit=document.querySelector('.submit')


inputSearch.addEventListener('keyup',function(e){
    let title =e.target.value;
        if(title){
            let searchPro=products.filter((item)=> item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1 )
            console.log(searchPro)
            getProducts(searchPro)
        }

        if(title === ""){
            getProducts(products)
        }
    
        
})




function getSameItem(array,id){
    let uniqe=array.map(i=>i[id])
    .map((item,i,final)=>final.indexOf(item)=== i && i)
    .filter((i)=>array[i])
    .map((item)=>array[item])
    
    return uniqe;

}



let favorateArray=localStorage.getItem('favoreteitem')?JSON.parse(localStorage.getItem('favoreteitem')):[]
function addFavioret(id){
    if(localEmail && localPassword){
        let productss=localStorage.getItem('productStatic')?JSON.parse(localStorage.getItem('productStatic')): products
        let choosenpro=productss.find((item)=>item.id === id)
        favorateArray.push(choosenpro)
        // choosenpro.liked=true
        
        console.log("kkkkkkk")
        // item.liked=true
        
        numcard.innerHTML=arraypro.length
        
        let uneqe=getSameItem(favorateArray,"id")
        localStorage.setItem('favoreteitem',JSON.stringify(uneqe))
        staticProducts.map((item)=>{
            if(item.id === choosenpro.id){
                item.liked=true
                
            }
        })
        localStorage.setItem('productStatic', JSON.stringify(staticProducts));
        getProducts(staticProducts)    
        
    }
    else{
        window.location="/regiter/register.html"
    }
    // window.location.reload()
}


//Filtert



let titleFliter =document.querySelector('#titleFliter')

titleFliter.addEventListener('change',function(e){
    let value=e.target.value
    console.log(value)

    if(value === 'all')
    getProducts(staticProducts)
    else{
        let filterPro=staticProducts.filter(item => item.title === value)
        getProducts(filterPro)
    }
})


function editeProduct(id){
    localStorage.setItem("idEdite",id)
    setTimeout(()=>{
        window.location='/editeProduct/editeProduct.html'
    })
}

function removeItem(id){
    let removeItem=staticProducts.find(i=>i.id === id)
    staticProducts=staticProducts.filter(item=>item !== removeItem)
    localStorage.setItem("productStatic",JSON.stringify(staticProducts))
    getProducts(staticProducts)
}
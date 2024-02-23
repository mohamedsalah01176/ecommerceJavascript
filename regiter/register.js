let userName=document.querySelector('#userName')
let email=document.querySelector('#email')
let password=document.querySelector('#password') 
let image=document.querySelector('#image') 
let submit=document.querySelector('#submit')

let imageUrl;

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(userName.value === "" || email.value ==="" || password.value ==="" ){
        alert( "Please fill out all fields")
    }
    else{
        localStorage.setItem("useName",userName.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        localStorage.setItem("image",imageUrl)
        setTimeout(()=>{
            window.location="../login/login.html"
        },1500)

    }
})

image.addEventListener('change',function(){
    let file=this.files[0]
    console.log(file)
    if(file.type !== "image/png" && file.type!=='image/jpeg'){
        alert ("please select a valid image");  
    }
    if(file.size > 2*1024*1024){
        alert ("please select a valid image");  
    }
    getImageUrl(file)
})

function getImageUrl(file){
    let reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onload=function(){
        imageUrl =reader.result
    }
    console.log(imageUrl)
}

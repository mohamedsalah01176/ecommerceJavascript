let localEmail=localStorage.getItem("email")
let localUserName=localStorage.getItem("useName")
let localPassword=localStorage.getItem("password")


let userName =document.querySelector("#userName")
let email =document.querySelector("#email")
let password =document.querySelector("#password")
let image =document.querySelector("#image")
let btnEdite =document.querySelector("#edite")

let imageUrl;


btnEdite.addEventListener('click',function(){

    if(userName.value===''||email.value===""||password.value==""){
        alert("fill your infprmation");
    }else{
        localStorage.setItem("useName",userName.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        localStorage.setItem("image",imageUrl)
        setTimeout(()=>{
            window.location="/profile/profile.html"
        })
    }


}
)

image.addEventListener("change",function(){
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
        imageUrl=reader.result
    }
}
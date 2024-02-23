
let email=document.querySelector('#email')
let password=document.querySelector('#password')
let submit=document.querySelector('#submit')

let localEmail=localStorage.getItem("email")
let localPassword=localStorage.getItem("password")
submit.addEventListener('click',function(e){
    e.preventDefault()
    if( email.value === "" || password.value === ""){
        alert( "Please fill out all fields" );
    }
    else{
        if(email.value === localEmail && password.value === localPassword){
            setTimeout(()=>{
                window.location="/home/home.html"
            },1500)
        }
    }
})
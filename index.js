document.addEventListener('DOMContentLoaded', (event) => {

var email_value=document.getElementById("email_");

document.querySelector("form").addEventListener('submit',function(e){
    e.preventDefault();
 
    if(!validateEmail(email_value.value)){
        email_value.classList.add("border_error");
        document.querySelector(".error").style.display="block";
    }else{
        email_value.classList.remove("border_error");
        document.querySelector(".error").style.display="none";

        document.querySelector(".main").style.display="none";
        document.querySelector(".thanks").style.display="block";
        
        setTimeout(function(){
            document.querySelector(".thanks").style.display="none";
        },5000);
        
        setTimeout(function(){
            document.querySelector(".main").style.display="block";
        },5000);
    }
    
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
});
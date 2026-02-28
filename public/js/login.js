const API = window.location.origin;

async function loginUser(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

const response=await fetch(

API + "/api/auth/login",

{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

email:email,
password:password

})

});

const data=await response.json();

if(data.token){

localStorage.setItem("token",data.token);

window.location="dashboard.html";

}else{

alert(data.message);

}

}

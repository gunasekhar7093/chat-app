const API = window.location.origin;

const token = localStorage.getItem("adminToken");

if(!token){
window.location="admin.html";
}



// Load Users
async function loadUsers(){

const response = await fetch(

API + "/api/admin/users",

{
headers:{
Authorization:"Bearer "+token
}
});

const users = await response.json();

if(!Array.isArray(users)){

alert("Admin login expired");

localStorage.removeItem("adminToken");

window.location="admin.html";

return;

}


let html="";

users.forEach(user=>{

const date=new Date(user.createdAt)
.toLocaleDateString();

html+=`

<tr>

<td>${user.name}</td>

<td>${user.email}</td>

<td>${date}</td>

<td>

<button onclick="deleteUser('${user._id}')">

Delete

</button>

</td>

</tr>

`;

});

document.getElementById("usersTable").innerHTML=html;

}

loadUsers();



// Delete User
async function deleteUser(id){

if(!confirm("Delete user?")) return;

await fetch(

API + "/api/admin/users/"+id,

{
method:"DELETE",

headers:{
Authorization:"Bearer "+token
}
});

loadUsers();

}



// Logout
function logout(){

localStorage.removeItem("adminToken");

window.location="admin.html";

}

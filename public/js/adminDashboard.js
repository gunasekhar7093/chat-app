const API = window.location.origin;

async function loadUsers(){

const response = await fetch(

API + "/api/admin/users"

);

const users = await response.json();

let html="";

users.forEach(user=>{

html+=`

<tr>

<td>${user.name}</td>

<td>${user.email}</td>

<td>${new Date(user.createdAt)
.toLocaleDateString()}</td>

<td>

<button onclick="deleteUser('${user._id}')">

Delete

</button>

</td>

</tr>

`;

});

document.getElementById("usersTable")
.innerHTML=html;

}

loadUsers();



async function deleteUser(id){

await fetch(

API + "/api/admin/users/"+id,

{
method:"DELETE"
}

);

loadUsers();

}

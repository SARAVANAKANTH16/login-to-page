let users=[]
let userContainer = document.getElementById('users')
function addUser(){
    let name=document.getElementById('name');
    let email=document.getElementById('email');

    let tempUser = {
        name: name.value,
        email: email.value,
    }

    let userCount = checkIfUserExist(email.value);
    if(userCount.length==0){
        users.push(tempUser);
    }
    else{
        alert('user already exist');
    }
    renderUsers();


}

function checkIfUserExist(email){
    let userCount=users.filter((user)=>{
        return user.email==email;
    })
    return userCount;
}

function renderUsers(){
    userContainer.innerHTML=''
    users.map((user)=>{
        let card=document.createElement('div');
        let name=document.createElement('p');
        let email=document.createElement('p');
        card.classList.add('card');
        name.innerText = user.name;
        email.innerText = user.email;
        userContainer.appendChild(card);
        card.appendChild(name);
        card.appendChild(email);
    })
}


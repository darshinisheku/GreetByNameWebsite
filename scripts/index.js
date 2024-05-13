"use strict";

//window.onload=init();
console.log("hello world");

//function init(){
    let submitbtn = document.getElementById("greetUserBtn");
    submitbtn.onclick = onGreetUserBtnClicked;
//}

function onGreetUserBtnClicked()
{
    let messageDiv = document.getElementById("messageDiv");
    let nameField = document.getElementById("nameField");
    let name = nameField.value;

    let message = `Hi ${name}! I hear you are !!`;
    messageDiv.innerHTML=message;

    
}


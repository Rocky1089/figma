let form = document.getElementById('form')
let player = document.getElementById('player')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmpass = document.getElementById('confirmpass')
let checkbox1 =document.getElementById('chechkbox1')
let checkbox2 =document.getElementById('chechkbox2')


let playerErr = document.getElementById('playerErr')
let emailErr = document.getElementById('emailErr')
let passwordErr = document.getElementById('passwordErr')
let confirmPassErr = document.getElementById('confirmPassErr')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    
    if(player.value ==""){
    playerErr.innerHTML = "Input your player ID"
    }

    if(email.value =="") {
        emailErr.innerHTML = "Email Require"
        }

    else if(!(email.value.endsWith("@gmail.com") || email.value.endsWith("@email.com") || email.value.endsWith("@yahoo.com") || email.value.endsWith("@hotmail.com"))){
        emailErr.innerHTML = "Invalid Mail"
        }

    if(password.value == ""){
        passwordErr.innerHTML = "Password Required"
    }
    if(confirmpass.value == ""){
        confirmPassErr.innerHTML = "Confirm Your Password"
    }
    else if(confirmpass.value !== password.value){
        confirmPassErr.innerHTML = "Password Not Match"
    }
    else{
        window.location.href = "form.html"
    }
})
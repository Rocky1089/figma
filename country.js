let city = document.getElementById('city')
let code = document.getElementById('code')
let myform = document.getElementById('form')

// let playerDisplay = document.getElementById('playerDisplay')
// let firstNameDisplay = document.getElementById('firstNameDisplay')
// let lastNameDisplay = document.getElementById('lastNameDisplay')
// let emailDisplay = document.getElementById('emailDisplay')
// let dateOfBirth = document.getElementById('dateOfBirth')
// let countryDisplay = document.getElementById('countryDisplay')
// let cityDisplay = document.getElementById('cityDisplay')
// let languageDisplay = document.getElementById('languageDisplay')

// let form = document.getElementById('form')
// let player = document.getElementById('player')
// let email = document.getElementById('email')
// let password = document.getElementById('password')
// let confirmpass = document.getElementById('confirmpass')
// let checkbox1 =document.getElementById('chechkbox1')
// let checkbox2 =document.getElementById('chechkbox2')

// let mform = document.getElementById('form')
// let firstName = document.getElementById('firstName')
// let lastName = document.getElementById('lastName')
// let dob = document.getElementById('dob')
// let phoneNo = document.getElementById('phoneNo')
// let submit = document.getElementById('next')

// let firstNameErr = document.getElementById('firstNameErr')
// let lastNameErr = document.getElementById('lastNameErr')
// let phoneNoErr = document.getElementById('phoneNoErr')

// let playerErr = document.getElementById('playerErr')
// let emailErr = document.getElementById('emailErr')
// let passwordErr = document.getElementById('passwordErr')
// let confirmPassErr = document.getElementById('confirmPassErr')

let cityErr = document.getElementById('cityErr')
let codeErr = document.getElementById('codeErr')

myform.addEventListener("submit", (e)=> {
    e.preventDefault()

    if(city.value == ""){
    cityErr.innerHTML = "Enter Your City"
    }
    if(code.value == ""){
    codeErr.innerHTML = "Enter Your Poster Code"
    }
    // else{
    //     window.location.href = "info.html"
    //     playerDisplay = player.value
    //     firstNameDisplay = firstName.value
    //     lastNameDisplay = lastName.value
    //     emailDisplay = email.value
    //     phoneDisplay = phoneNo.value
    // }
})
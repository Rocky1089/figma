let form = document.getElementById('form')
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let dob = document.getElementById('dob')
let phoneNo = document.getElementById('phoneNo')
let submit = document.getElementById('next')

let firstNameErr = document.getElementById('firstNameErr')
let lastNameErr = document.getElementById('lastNameErr')
let phoneNoErr = document.getElementById('phoneNoErr')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    
    if(firstName.value ==""){
    firstNameErr.innerHTML = "Enter your first name"
    }
    if(lastName.value ==""){
    lastNameErr.innerHTML = "Enter your Last name"
    }
    if(phoneNo.value ==""){
    phoneNoErr.innerHTML = "Enter Your Phone Num"
    }
    else{
        window.location.href = "country.html"
        
    }
})
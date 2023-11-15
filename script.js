const myform = document.getElementById("form")
const player = document.getElementById('player')
const emailInput = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm')

      const playerError = document.getElementById('playerError')
      const emailError = document.getElementById('emailError')
      const passwordError = document.getElementById('passwordError')
      const confirmPasswordError = document.getElementById('confirmError')


      formCont2.addEventListener('submit', function (e) {
        e.preventDefault();

    if(player.value()===  ''){
        playerError.innerHTML = 'Name is required'
        // playerError.style.display = 'block'
    }

  if (emailInput === '') {
      emailError.innerHTML = 'Email Address is required.';
      // emailError.style.display = 'block'
  }

  else if (!emailInput.endsWith('@gmail.com')) {
      emailError.innerHTML = 'Please enter a valid email address.';
    
  }

  if (password === '') {
    passwordError.innerHTML = 'Password is required'
    // passwordError.style.display = 'block'
  }

  else if (password  <  8) {
  passwordError.innerHTML = 'Password must be at least 8 characters long.';
  // passwordError.style.display = 'block'
  }

  else{
    passwordError.innerHTML = 'password cant be emput'
  }

  if (password !== confirmPassword) {
    confirmPasswordError.innerHTML = 'Passwords does not match.';
    // confirmPasswordError.style.display = 'block'
   }

   else {
    confirmPasswordError.innerHTML = 'Confirm password cant be emput'
    }
}
)
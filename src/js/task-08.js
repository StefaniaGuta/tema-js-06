const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log(e);

    const inputs = document.querySelector(".login-form").elements;
    const emailInput = inputs[0];
    const passwordInput = inputs[1];
  
    
   if(emailInput.value === '' || passwordInput.value === ''){
    alert(`All fields must be filled in!`)
} else {
    const dataForm = {
        email: emailInput.value,
        password: passwordInput.value
    }
    console.log('User data:', dataForm);
    alert("The form has been submitted successfully!");
    loginForm.reset();
   }
});

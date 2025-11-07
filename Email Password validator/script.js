let form = document.querySelector("form")
let email = document.querySelector("#email");
let password = document.querySelector("#password")

form.addEventListener("submit" , function(evt){
    evt.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);
    let isValid = true;
    
    if(!emailans){
        document.querySelector("#emailError").textContent = "type a valid email";
        isValid = false;

    }
    if(!passwordans){
        document.querySelector("#passwordError").textContent = "type a valid password";
        isValid = false;
    }
    if(isValid){
        document.querySelector("#correct").textContent = "Form submitted";
        
    }


})
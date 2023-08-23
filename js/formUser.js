// form js
const userIcon = document.querySelector("#userIcon"),
    formSection = document.querySelector(".form_section"),
    formContact = document.querySelector(".form-contact"),
    formClose = document.querySelector(".form-close"),
    loginForm = document.querySelector(".login_form"),
    forgetPass = document.querySelector(".forgetPass"),
    signUpLogin = document.querySelector(".signUpLogin"),
    singUpForm = document.querySelector(".singUp_form"),
    forgetForm = document.querySelector(".forget_form"),
    pwHide = document.querySelectorAll(".pw-hide"),
    back = document.querySelector(".back"),
    loginNav = document.querySelector("#loginNav");

    // console.log(userIcon,formSection,formContact,formClose,forgetPass,signUpLogin,singUpForm,forgetForm,pwHide,back);

userIcon.addEventListener("click" , _=> {formSection.classList.toggle("show")})
loginNav.addEventListener("click" , _=> {formSection.classList.toggle("show")})
formClose.addEventListener("click" , _=> {formSection.classList.remove("show")})

signUpLogin.addEventListener("click" , (e)=> {
    e.preventDefault();
    formContact.classList.add("activeForm");
    loginForm.classList.add("d-none")
})

pwHide.forEach(icon => {
    icon.addEventListener('click', ()=>{
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("fa-eye-slash" , "fa-eye")
        }else {
            getPwInput.type = "password";
            icon.classList.replace("fa-eye","fa-eye-slash")
        }
    })
})

back.addEventListener("click" , (e)=> {
    e.preventDefault();
    formContact.classList.remove("activeForm");
    loginForm.classList.remove("d-none")
})

forgetPass.addEventListener("click" , (e)=> {
    e.preventDefault();
    formContact.classList.add("activeForget");
    loginForm.classList.add("d-none")
})

// input search and icon search
const iconSearch = document.querySelector("#iconSearch"),
    inputSearch = document.querySelector(".inputSearch");

iconSearch.addEventListener("click" , _=> {
    inputSearch.classList.toggle("d-none")
})

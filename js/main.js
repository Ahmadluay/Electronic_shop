let logoImg = document.querySelector(".header-logo img");
addEventListener("scroll", (_) => {
  if (scrollY > 100) {
    logoImg.setAttribute("src", "img/footer/noun_cloth_2129414.svg");
  } else {
    logoImg.setAttribute("src", "img/BackImg/whiteLogo.svg");
  }
});

//! -----------------------
const menu = document.querySelector(".bar"),
  nav = document.querySelector("header .container nav");

menu.addEventListener("click", (_) => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("activeNav");
});

addEventListener("click", (event) => {
  if (!event.target.classList.contains("bar")) {
    menu.classList.remove("fa-times");
    nav.classList.remove("activeNav");
  }
});

const men = document.querySelector(".men"),
  linksPages = document.querySelector("#linksPages");

men.addEventListener("click", (_) => {
  linksPages.classList.toggle("activeMen");
});

addEventListener("click", (event) => {
  // event checked linkPages men
  if (!event.target.classList.contains("men")) {
    linksPages.classList.remove("activeMen");
  }
});

//! Call the cardGrow div when the image is pressed and enlarged
const cardGrow = document.querySelectorAll(".cardGrow");
for (const item of cardGrow) {
  item.addEventListener("click", (_) => {
    clearClass(cardGrow, "flex-grow-1");
    item.classList.add("flex-grow-1");
  });
}

//! function remove the class name
function clearClass(arr, className) {
  for (const item of arr) {
    item.classList.remove(className);
  }
}

//! swiper
var swiper = new Swiper(".home-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//! header scroll
const header = document.querySelector("#header");
goUp = document.querySelector("#goUp");

onscroll = (_) => {
  if (scrollY > 100) {
    header.classList.add("backHeader");
    goUp.classList.remove("d-none");
  } else {
    header.classList.remove("backHeader");
    goUp.classList.add("d-none");
  }
};

goUp.addEventListener("click", (_) => {
  scrollTo({ top: 0 });
});

//! tel countries
const input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: (callback) => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => callback(data.country_code))
      .catch(() => callback("us"));
  },
  utilsScript: "/intl-tel-input/js/utils.js?1690975972744", // just for formatting/placeholders etc
});

//! ScrollReveal
const sr = ScrollReveal({
  distance: "30px",
  duration: 2600,
  reset: true,
});

sr.reveal(".growCards ,.cards-swiper,.chooseUs,.submitEmail,footer", {
  delay: 280,
  origin: "bottom",
});







// //! ----------------------- main Swiper cards --------------------
// const carousel = document.querySelector(".carousel"),
//     firstCard = carousel.querySelectorAll(".swiper-slide-card")[0],
//     arrowIcon = document.querySelectorAll(".cards-swiper i");

// let isDragStart = false , prevPageX , prevScrollLeft;

// const showHideIcon = ()=> {
//     // showing and hiding prev/next icon according to carousel scroll left value
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth;// getting max scrollable width
//     arrowIcon[0].style.color = carousel.scrollLeft == 0 ? "gray" : "black";
//     arrowIcon[0].style.cursor = carousel.scrollLeft == 0 ? "not-allowed" : "pointer";
//     arrowIcon[1].style.color = carousel.scrollLeft == scrollWidth ? "gray" : "black";
//     arrowIcon[1].style.cursor = carousel.scrollLeft == scrollWidth ? "not-allowed" : "pointer";
// }

// arrowIcon.forEach(icon =>{
//     icon.addEventListener("click" ,_=> {
//         let firstCardWidth = firstCard.clientWidth + 12 // getting first card width $ adding 12 padding value
//         // if clicked icon is left , reduce width value from the carousel scroll left else add to it
//         carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth;
//         setTimeout(() => showHideIcon() , 60); // calling showHideIcon after 60ms
//     });
// });

// const dragStart = (e) => {
//     // updating global variables value on mouse down event
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     // scrolling image/carousel to left according to mouse pointer
//     if(!isDragStart) return;
//     e.preventDefault();
//     carousel.classList.add("dragging");
//     let positionDiff = e.pageX - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcon();
// }

// const dragStop = ()=> {
//     isDragStart = false;
//     carousel.classList.remove("dragging");
// }

// carousel.addEventListener("mousedown" ,dragStart )
// carousel.addEventListener("mousemove" , dragging)
// carousel.addEventListener("mouseup" , dragStop)
// carousel.addEventListener("mouseleave" , dragStop)

// //! form js
// const userIcon = document.querySelector("#userIcon"),
//     formSection = document.querySelector(".form_section"),
//     formContact = document.querySelector(".form-contact"),
//     formClose = document.querySelector(".form-close"),
//     loginForm = document.querySelector(".login_form"),
//     forgetPass = document.querySelector(".forgetPass"),
//     signUpLogin = document.querySelector(".signUpLogin"),
//     singUpForm = document.querySelector(".singUp_form"),
//     forgetForm = document.querySelector(".forget_form"),
//     pwHide = document.querySelectorAll(".pw-hide"),
//     back = document.querySelector(".back"),
//     loginNav = document.querySelector("#loginNav");

//     // console.log(userIcon,formSection,formContact,formClose,forgetPass,signUpLogin,singUpForm,forgetForm,pwHide,back);

// userIcon.addEventListener("click" , _=> {formSection.classList.toggle("show")})
// loginNav.addEventListener("click" , _=> {formSection.classList.toggle("show")})
// formClose.addEventListener("click" , _=> {formSection.classList.remove("show")})

// signUpLogin.addEventListener("click" , (e)=> {
//     e.preventDefault();
//     formContact.classList.add("activeForm");
//     loginForm.classList.add("d-none")
// })

// pwHide.forEach(icon => {
//     icon.addEventListener('click', ()=>{
//         let getPwInput = icon.parentElement.querySelector("input");
//         if(getPwInput.type === "password"){
//             getPwInput.type = "text";
//             icon.classList.replace("fa-eye-slash" , "fa-eye")
//         }else {
//             getPwInput.type = "password";
//             icon.classList.replace("fa-eye","fa-eye-slash")
//         }
//     })
// })

// back.addEventListener("click" , (e)=> {
//     e.preventDefault();
//     formContact.classList.remove("activeForm");
//     loginForm.classList.remove("d-none")
// })

// forgetPass.addEventListener("click" , (e)=> {
//     e.preventDefault();
//     formContact.classList.add("activeForget");
//     loginForm.classList.add("d-none")
// })

// // input search and icon search
// const iconSearch = document.querySelector("#iconSearch"),
//     inputSearch = document.querySelector(".inputSearch");

// iconSearch.addEventListener("click" , _=> {
//     inputSearch.classList.toggle("d-none")
// })

// addEventListener("click" , event=> {
//     if(event.target.classList.contains("form_section")) {
//         formSection.classList.add("d-none")
//     }

// })

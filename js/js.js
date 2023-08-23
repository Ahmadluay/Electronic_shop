let menu = document.querySelector(".bar"),
    nav = document.querySelector("header .container nav");

menu.addEventListener("click" , _=>{
    menu.classList.toggle("fa-times")
    nav.classList.toggle("activeNav")
})

addEventListener("click" , event=>{
    if(!event.target.classList.contains("bar")) {
        menu.classList.remove("fa-times")
        nav.classList.remove("activeNav")
    }
})

const men = document.querySelector(".men"),
    linksPages = document.querySelector("#linksPages");

men.addEventListener("click" , _=> {
    linksPages.classList.toggle("activeMen")
})

addEventListener("click" , event=>{
    // event checked linkPages men
    if(!event.target.classList.contains("men")) {
        linksPages.classList.remove("activeMen")
    }
})


// // form js
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




// const goUp = document.querySelector("#goUp");
// onscroll =_=> {
//     if(scrollY > 100) {
//         goUp.classList.remove("d-none")
//     }else {
//         goUp.classList.add("d-none")
//     }
// }

// goUp.addEventListener("click" , _=> {
//     scrollTo({top:0});
// })

// // tel countries
// // const input = document.querySelector("#phone");
// // window.intlTelInput(input, {
// //     initialCountry: "auto",
// //     geoIpLookup: callback => {
// //     fetch("https://ipapi.co/json")
// //         .then(res => res.json())
// //         .then(data => callback(data.country_code))
// //         .catch(() => callback("us"));
// //     },
// //   utilsScript: "/intl-tel-input/js/utils.js?1690975972744" // just for formatting/placeholders etc
// // });


// //! cart Shopping 
// const 
//     addCart = document.querySelector("#addCart"),
//     imgClothesBeg = document.querySelector(".BegImage img.begImg"),
//     nameClothes = document.querySelector("#nameClothes"),
//     priceClothes = document.querySelector("[data-price='price']"),
//     sizeClothes = document.querySelector("#sizeClothes"),
//     numCart = document.querySelector(".numCart"),
//     totalPrice = document.querySelector("#offcanvasTop #totalPrice"),
//     offcanvas = document.querySelector("#offcanvasTop tbody"),
//     numShopping = document.querySelector("#numShopping");

// let arrClothes =JSON.parse(localStorage.getItem("data clothes")) || []
    

// // on click add card arrClothes
// addCart.addEventListener("click" , _=>{
//     // Call Function Collect clothes data and storage in local storage
//     collectData();
    
// });
    
// // Function Collect clothes data in storage in arrClothes then in local storage
// function collectData() {
//     // Collect data for the choses clothes
//     let imgSrc = imgClothesBeg.src,
//         name = nameClothes.innerText,
//         price = priceClothes.innerText,
//         size = sizeClothes.innerText,
//         count = numCart.innerText;

//     let positionClothes = arrClothes.findIndex(item =>{
//         return item.name === name &&
//                 item.size === size &&
//                 item.img === imgSrc
//     })

//     if(positionClothes >= 0) {
//         let UpdateCount = +arrClothes[positionClothes].count
    
//         UpdateCount += +count;
//         arrClothes[positionClothes].count = UpdateCount
//         storeEnd(arrClothes)

//     }else {
//         // Storage the choses clothes in clothes object
//         let clothesOb = {} 
//         clothesOb.img = imgSrc
//         clothesOb.name = name
//         clothesOb.price = price
//         clothesOb.size = size
//         clothesOb.count = count
//         clothesOb.color = 
        
//         // Storage choses clothes object in arrClothes array 
//         arrClothes.push(clothesOb)
    
//         storeEnd(arrClothes)
//     }
// }

// // Function show all clothes store in local storage in list clothes 
// function showClothes () {
//     let totalSum = 0;
//     offcanvas.innerHTML = "" 
//     arrClothes.forEach((clothes , ind) => {
//         let totalOneProduct = clothes.price * clothes.count;
//         let clothesView = ` <tr class="">
//                         <td class="d-flex align-items-center gap-1 gap-md-5">
//                             <div class="imgTD">
//                                 <img src="${clothes.img}" alt="...">
//                             </div>
//                             <div class="paraCart">
//                                 <p>${clothes.name}</p>
//                                 <p>#261311</p>
//                             </div>
//                         </td>
//                         <td class="">White</td>
//                         <td class="">${clothes.size}</td>
//                         <td class="">
//                             <div class="counter">
//                                 <span class="decre" id="decre">-</span>
//                                 <span class="numClo" id="numClo">${clothes.count}</span>
//                                 <span class="incre" id="incre">+</span>
//                             </div>
//                         </td>
//                         <td class="">$${(totalOneProduct).toFixed(2)}</td>
//                         <td class=""><i class="fa-solid fa-trash" data-id="${ind}" id="delete" style="color: red;cursor: pointer;"></i></td>
//                     </tr>
//                 `
//         offcanvas.innerHTML += clothesView;
//         totalSum += totalOneProduct;
//     });  
//     totalPrice.innerText = totalSum.toFixed(2);
//     numShopping.innerText = arrClothes.length;
// }

// // Call Function show update arrClothes
// showClothes()

// // delete on clothes
// addEventListener("click" , event=>{
//     if (event.target.id == "delete") {
//         let idd = event.target.getAttribute("data-id");
//         arrClothes.splice(idd,1)
//         storeEnd(arrClothes)
//     }
// })

// function storeEnd(arr) {
//     localStorage.setItem("data clothes" ,JSON.stringify(arr))
//     showClothes()
// }

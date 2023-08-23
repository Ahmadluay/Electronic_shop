// header
const headTop = document.querySelector("#headTop"),
    header = document.querySelector("[data-head='header']");

    addEventListener("scroll" , _=>{
        if(scrollY > 200) {
            headTop.style.display="none";
            header.style.margin="0";
            header.style.boxShadow=" 0 0 5px var(--bk-color)";
        }else {
            headTop.style.display="block";
            header.style.marginTop="1.9rem"
            header.style.boxShadow=" 0 0 0px var(--bk-color)";
        }
    })

// pagination in image
var swiper = new Swiper(".mySwiperSld", {
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

//! This is code images 
    // small image
const imagesClothes = document.querySelectorAll(".imagesClothes img"),
      // beg image
      BegImage = document.querySelector(".BegImage .begImg"),
      // swiper images
      swiperImg = document.querySelectorAll(".swiper-wrapper .swiper-slide img"),
      // boxColors
      boxColors = document.querySelectorAll('.boxColors .boxColor');

//* When you click on the small picture, it is displayed in the big picture
for (const item of imagesClothes) {
  item.addEventListener("click" , _=> {
    // cleanBorder()
    let smImg = item.getAttribute("src")
    BegImage.setAttribute("src" , smImg)
    // item.style.border = "2px solid #FBB03B"
  })
}
// function cleanBorder() {
//   for (const item of imagesClothes) {
//     item.style = ""
//   }
// }

//* When you click on the color box, the color of the clothes is displayed the same as the color of the box in the big picture
let sty = ""
for (const box of boxColors) {
  box.addEventListener("click" , _=> {
    sty = getComputedStyle(box).getPropertyValue("background-color"); 
    // console.log(sty);
    if(sty==="rgb(0, 0, 0)" ) {
      BegImage.setAttribute("src" , "img/clothes/smallimg/blackClothes.svg")
    }else if (sty==="rgb(255, 227, 183)") {
      BegImage.setAttribute("src" , "img/clothes/smallimg/whiteBrawndClothes.svg")
    }else if (sty==="rgb(0, 0, 255)") {
      BegImage.setAttribute("src" , "img/clothes/smallimg/blueClothes.svg")
    }else if (sty==="rgb(255, 255, 255)") {
      BegImage.setAttribute("src" , "img/clothes/smallimg/whiteClothes.svg")
    }
  })
}

//! Select When you click on "Choose Size" it displays the sizes of the clothes
const chooseSize = document.querySelector(".chooseSize"),
      sizing = document.querySelector(".sizing");
      sizingPara = document.querySelectorAll(".sizing p"),
      showSize = document.querySelector(".showSize");

chooseSize.addEventListener("click" , _=>{
  sizing.classList.toggle("d-none")
})

sizingPara.forEach(ele => {
  ele.onclick = _=>{
    const size = ele.innerHTML;
    showSize.innerText = size;
    sizing.classList.toggle("d-none")
  }
});

//! increment and decrement number
const decre = document.querySelector(".decre"),
      numClo = document.querySelector(".numClo"),
      incre = document.querySelector(".incre");

let num = 1
decre.style.color="#707070"
decre.addEventListener("click" , _=>{
  if(num > 1){
    numClo.innerText = --num
  }
  else if (num == 1){
    decre.style.color="#707070"
    decre.style.setProperty("cursor","not-allowed")
  }
    
})

incre.addEventListener("click" , _=> {
  numClo.innerText = ++num
  decre.style.color="#000"
  decre.style.setProperty("cursor","pointer")
})


//! When clicking on the common element, it gives it borders and removes borders from the others
const imgWhite = document.querySelectorAll(".imgWhite"),
      imgBlack = document.querySelectorAll(".imgBlack"),
      imgBrowneWhite = document.querySelectorAll(".imgBrowneWhite"),
      imgBlue = document.querySelectorAll(".imgBlue");

function applyBorder(elements) {
    elements.forEach(item => {
        item.addEventListener("click", function() {
            const dataImgValue = this.getAttribute("data-img");
            
            clearBorderImg()
            
            // البحث عن جميع العناصر التي لها نفس قيمة الـ "data-img" وتعيين لها الحدود
            elements.forEach(otherItem => {
                if (otherItem.getAttribute("data-img") === dataImgValue) {
                    otherItem.style.border = "2px solid #FBB03B"; // تعيين الحدود للعنصر
                }
            });
            
        });
    });
}

function clearBorderImg () {
  imgWhite.forEach(otherItem => {
      otherItem.style.border = ""; // تعيين الحدود للعنصر
  });
  imgBlack.forEach(otherItem => {
      otherItem.style.border = ""; // تعيين الحدود للعنصر
  });
  imgBrowneWhite.forEach(otherItem => {
      otherItem.style.border = ""; // تعيين الحدود للعنصر
  });
  imgBlue.forEach(otherItem => {
      otherItem.style.border = ""; // تعيين الحدود للعنصر
  });

}

applyBorder(imgWhite);
applyBorder(imgBlack);
applyBorder(imgBrowneWhite);
applyBorder(imgBlue);


// Description 

const descriptionPara = document.querySelectorAll(".descriptionPara"),
    contactDescriptionPara = document.querySelectorAll(".contactDescriptionPara");
// console.log(contactDescriptionPara);

for (const item of descriptionPara) {
    item.addEventListener("click" , _=> {
        clearClass(descriptionPara ,"descriptionParaActive" )
        item.classList.add("descriptionParaActive")
    })
}

for (let i = 0; i < descriptionPara.length; i++) {
    descriptionPara[i].addEventListener("click" , _=> {
        addClass()
        contactDescriptionPara[i].classList.remove('opacity-0' , 'visually-hidden');
    })
}

function addClass() {
    for (let i = 0; i < descriptionPara.length; i++) {
        contactDescriptionPara[i].classList.add('opacity-0' , 'visually-hidden')
    }}

function clearClass(arr , className) {
    for (const item of arr) {
        item.classList.remove(className)
    }
}



//! ScrollReveal
const sr = ScrollReveal({
  distance: "30px",
  duration: 2600,
  reset: true,
});

sr.reveal(
  ".breadCrampLinksAll ,.clothes-price ,.description ,.cards-swiper ,.submitEmail ,footer",
  {
    delay: 280,
    origin: "bottom",
  }
);




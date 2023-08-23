//! ----------------------- main Swiper cards --------------------
const carousel = document.querySelector(".carousel"),
    firstCard = carousel.querySelectorAll(".swiper-slide-card")[0],
    arrowIcon = document.querySelectorAll(".cards-swiper i");

let isDragStart = false , prevPageX , prevScrollLeft;

const showHideIcon = ()=> {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;// getting max scrollable width
    arrowIcon[0].style.color = carousel.scrollLeft == 0 ? "gray" : "black";
    arrowIcon[0].style.cursor = carousel.scrollLeft == 0 ? "not-allowed" : "pointer";
    arrowIcon[1].style.color = carousel.scrollLeft == scrollWidth ? "gray" : "black";
    arrowIcon[1].style.cursor = carousel.scrollLeft == scrollWidth ? "not-allowed" : "pointer";
}

arrowIcon.forEach(icon =>{
    icon.addEventListener("click" ,_=> {
        let firstCardWidth = firstCard.clientWidth + 12 // getting first card width $ adding 12 padding value
        // if clicked icon is left , reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth;
        setTimeout(() => showHideIcon() , 60); // calling showHideIcon after 60ms
    });
});

const dragStart = (e) => {
    // updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling image/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcon();
}

const dragStop = ()=> {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown" ,dragStart )
carousel.addEventListener("mousemove" , dragging)
carousel.addEventListener("mouseup" , dragStop)
carousel.addEventListener("mouseleave" , dragStop)

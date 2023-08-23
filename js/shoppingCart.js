//  cart Shopping
const addCart = document.querySelector("#addCart"),
  imgClothesBeg = document.querySelector(".BegImage img.begImg"),
  nameClothes = document.querySelector("#nameClothes"),
  priceClothes = document.querySelector("[data-price='price']"),
  sizeClothes = document.querySelector("#sizeClothes"),
  numCart = document.querySelector(".numCart"),
  totalPrice = document.querySelector("#offcanvasTop #totalPrice"),
  offcanvas = document.querySelector("#offcanvasTop tbody"),
  numShopping = document.querySelector("#numShopping");

let arrClothes = JSON.parse(localStorage.getItem("data clothes")) || [];

// function added() {
  //     addCart.addEventListener("click" , _=>{
    //     // Call Function Collect clothes data and storage in local storage
//     collectData();

// });
// }

// on click add card arrClothes
addEventListener("click", (event) => {
  // Call Function Collect clothes data and storage in local storage
  if (event.target.id === "addCart") {
    collectData();
  }
});

// Function Collect clothes data in storage in arrClothes then in local storage
function collectData() {
  // Collect data for the choses clothes
  let imgSrc = imgClothesBeg.src,
    name = nameClothes.innerText,
    price = priceClothes.innerText,
    size = sizeClothes.innerText,
    count = numCart.innerText;

  let positionClothes = arrClothes.findIndex((item) => {
    return item.img === imgSrc;
    // return item.name === name && item.size === size && item.img === imgSrc;
  });

  if (positionClothes >= 0) {
    let UpdateCount = +arrClothes[positionClothes].count;

    UpdateCount += +count;
    arrClothes[positionClothes].count = UpdateCount;
    storeEnd(arrClothes);
  } else {
    // Storage the choses clothes in clothes object
    let clothesOb = {};
    clothesOb.img = imgSrc;
    clothesOb.name = name;
    clothesOb.price = price;
    clothesOb.size = size;
    clothesOb.count = count;
    // clothesOb.color =

    // Storage choses clothes object in arrClothes array
    arrClothes.push(clothesOb);

    storeEnd(arrClothes);
  }
}

// Function show all clothes store in local storage in list clothes
function showClothes() {
  let totalSum = 0;
  offcanvas.innerHTML = "";
  arrClothes.forEach((clothes, ind) => {
    let totalOneProduct = clothes.price * clothes.count;
    let clothesView = ` <tr class="">
                        <td class="d-flex align-items-center gap-1 gap-md-5">
                            <div class="imgTD">
                                <img src="${clothes.img}" alt="...">
                            </div>
                            <div class="paraCart">
                                <p>${clothes.name}</p>
                                <p>#261311</p>
                            </div>
                        </td>
                        <td class="">White</td>
                        <td class="">${clothes.size}</td>
                        <td class="">
                            <div class="counter">
                                <span class="decre" id="decreCart" onclick='changeCount(this,-1,${ind})'>-</span>
                                <span class="numClo" id="countCart">${
                                  clothes.count
                                }</span>
                                <span class="incre" id="increCart" onclick='changeCount(this,+1,${ind})'>+</span>
                            </div>
                        </td>
                        <td class="">$${totalOneProduct.toFixed(2)}</td>
                        <td class=""><i class="fa-solid fa-trash" data-id="${ind}" id="delete" style="color: red;cursor: pointer;"></i></td>
                    </tr>
                `;
    offcanvas.innerHTML += clothesView;
    totalSum += totalOneProduct;
  });
  totalPrice.innerText = totalSum.toFixed(2);
  numShopping.innerText = arrClothes.length;
}

// Call Function show update arrClothes
showClothes();

// delete on clothes
addEventListener("click", (event) => {
  if (event.target.id == "delete") {
    let idd = event.target.getAttribute("data-id");
    arrClothes.splice(idd, 1);
    storeEnd(arrClothes);
  }
});

function storeEnd(arr) {
  localStorage.setItem("data clothes", JSON.stringify(arr));
  showClothes();
}

function changeCount(el, n, ind) {
  console.log(el, n);
  let co = el.parentElement.querySelector("#countCart");
  co.innerText = +co.innerText + n;
  console.log(ind);
  arrClothes[ind].count = co.innerText;
  storeEnd(arrClothes);
}







// let decreCart = document.querySelectorAll("#decreCart"),
//   countCart = document.querySelectorAll("#countCart"),
//   increCart = document.querySelectorAll("#increCart");

// for (const i in increCart) {
//   increCart[i].onclick = (_) => {
//     let productPrice = parseFloat(arrClothes[i].price);

//     arrClothes[i].count++; // زيادة العدد بواحد
//     let numberCart = arrClothes[i].count;

//     let totalOneProduct = productPrice * numberCart;
//     arrClothes[i].total = totalOneProduct;

//     updateTotalPrice();
//     storeEnd(arrClothes);
//   };
// }

// for (const i in decreCart) {
//   decreCart[i].onclick = (_) => {
//     let productPrice = parseFloat(arrClothes[i].price);

//     if (arrClothes[i].count > 1) {
//       arrClothes[i].count--; // نقص العدد بواحد
//       let numberCart = arrClothes[i].count;

//       let totalOneProduct = productPrice * numberCart;
//       arrClothes[i].total = totalOneProduct;

//       updateTotalPrice();
//       storeEnd(arrClothes);
//     }
//   };
// }

// function updateTotalPrice() {
//   let totalSum = arrClothes.reduce(
//     (sum, clothes) => sum + parseFloat(clothes.total),
//     0
//   );
//   totalPrice.innerText = totalSum.toFixed(2);
//   numShopping.innerText = arrClothes.length;
// }



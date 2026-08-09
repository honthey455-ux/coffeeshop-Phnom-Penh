// =======================
// Loader
// =======================

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){
        loader.style.display="none";
    }

});



// =======================
// Mobile Menu
// =======================

const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navMenu");


if(menuBtn){

menuBtn.onclick=()=>{

    navMenu.classList.toggle("active");

};

}



// =======================
// Dark Mode
// =======================

const darkBtn=document.getElementById("darkBtn");


darkBtn.onclick=()=>{

document.body.classList.toggle("dark");


};




// =======================
// Search Menu
// =======================

const searchInput=document.getElementById("searchInput");


if(searchInput){

searchInput.addEventListener("keyup",()=>{


let value=searchInput.value.toLowerCase();


let cards=document.querySelectorAll(".card");


cards.forEach(card=>{


let name=card.querySelector("h3").innerText.toLowerCase();


if(name.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}


});


});


}


// =======================
// Filter Menu
// =======================

function filterMenu(category) {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if (category === "all") {

            card.style.display = "block";

        } else if (card.dataset.category === category) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}








// =======================
// Shopping Cart
// =======================


let cart=[];


function addCart(name,price){


cart.push({

name:name,
price:price

});


updateCart();


}




function updateCart(){


const cartItems=document.getElementById("cartItems");

const cartCount=document.getElementById("cartCount");

const total=document.getElementById("total");



cartItems.innerHTML="";


let sum=0;



cart.forEach((item,index)=>{


sum+=item.price;


cartItems.innerHTML+=`

<p>

${item.name} 
$${item.price}

</p>

`;


});



if(cart.length===0){

cartItems.innerHTML="Your cart is empty";

}


cartCount.innerText=cart.length;


total.innerText=sum.toFixed(2);


}




// =======================
// Cart Open / Close
// =======================


const cartBtn=document.getElementById("cartBtn");

const cartBox=document.getElementById("cartBox");



if(cartBtn){


cartBtn.onclick=()=>{


cartBox.classList.toggle("show");


};


}




// =======================
// Checkout
// =======================


function checkout(){


if(cart.length===0){

alert("Your cart is empty!");

return;

}


alert("Order Successful! Thank you ❤️");


cart=[];


updateCart();


document.getElementById("popup").style.display="none";


}



// =======================
// Order Popup
// =======================


const popup=document.getElementById("popup");


document.querySelectorAll(".card button").forEach(btn=>{


btn.addEventListener("click",()=>{


popup.style.display="flex";


});


});



// =======================
// Back To Top
// =======================


const topBtn=document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}


});



topBtn.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};
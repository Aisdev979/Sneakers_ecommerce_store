const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
const coverImage = document.querySelector('#cover');
const prevImage = document.querySelector('#prev-image');
const nextImage = document.querySelector('#next-image');
const quantityIncrement = document.querySelector('#add');
const quantityDecrement = document.querySelector('#minus');
let productQuantity = document.querySelector('#product-quantity');
const cart = document.querySelector('#cart');
const cartCard = document.querySelector('.cart--card');
let amount = 0;

menu.addEventListener("click", () => {
    nav.style.left = "0em";
});

nav.addEventListener("click", () => {
    nav.style.left = "-16em";
});

const images = [
    "image-product-1",
    "image-product-2",
    "image-product-3",
    "image-product-4"
];

let imageIndex = images.length - 1;

function loadImages(image) {
    console.log(image)
    coverImage.src = `./images/${image}.jpg`;
}

prevImage.addEventListener('click', () => {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = images.length - 1;
    }
    loadImages(images[imageIndex]);

});

nextImage.addEventListener('click', () => {
    imageIndex++;
    if (imageIndex > images.length - 1) {
        imageIndex = 0;
    }
    loadImages(images[imageIndex]);

});

quantityIncrement.addEventListener('click', () => {
    amount += 1
    console.log(productQuantity)
    productQuantity.innerHTML = amount;
    console.log(productQuantity)
});

quantityDecrement.addEventListener('click', () => {
    amount -= 1
    console.log(productQuantity)
    if (amount <= -1) {
        amount = 0;
    } else {
        productQuantity.innerHTML = amount;
    }
    console.log(productQuantity)
});

cart.addEventListener("click", () => {
    cartCard.style.opacity = "1"
})
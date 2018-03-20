'use strict';
//array to hold products
Product.allProducts = [];


//product constructor
function Product (filepath, name) {
  this.filepath = filepath;
  this.name = name;
  Product.allProducts.push(this);
}


//new instances of products
new Product('img/assets/bag.jpg','r2d2-suitcase');
new Product('img/assets/banana.jpg', 'bananaCutter');
new Product('img/assets/bathroom.jpg', 'tPiPad');
new Product('img/assets/boots.jpg', 'noRainBoots');
new Product('img/assets/breakfast.jpg', 'breakfastMaker');
new Product('img/assets/bubblegum.jpg', 'meatGum');
new Product('img/assets/chair.jpg', 'chair');
new Product('img/assets/cthulhu.jpg', 'cthulhu');
new Product('img/assets/dog-duck.jpg', 'dogBeak');
new Product('img/assets/dragon.jpg', 'dragonMeat');
new Product('img/assets/pen.jpg', 'uPencils');
new Product('img/assets/pet-sweep.jpg', 'dogMop');
new Product('img/assets/scissors.jpg', 'pizzaScissors');
new Product('img/assets/shark.jpg','sharkAttack');
new Product('img/assets/sweep.png', 'babyMop');
new Product('img/assets/tauntaun.jpg', 'hothSleepingBag');
new Product('img/assets/unicorn.jpg', 'unicornMeat');
new Product('img/assets/usb.gif', 'tenticleUsb');
new Product('img/assets/water-can.jpg', 'noWaterCan');
new Product('img/assets/wine-glass.jpg', 'wineGlass');

var figureImage1 = document.getElementById('product1');
var figureImage2 = document.getElementById('product2');
var figureImage3 = document.getElementById('product3');

figureImage1.addEventListener('click',randomProduct1);
figureImage2.addEventListener('click',randomProduct2);
figureImage3.addEventListener('click',randomProduct3);

function randomProduct1(){
  var randomIndex = Math.floor(Math.random()* Product.allProducts.length);
  figureImage1.src = Product.allProducts[randomIndex].filepath;
  figureImage1.alt = Product.allProducts[randomIndex].name;
}
function randomProduct2(){
  var randomIndex = Math.floor(Math.random()* Product.allProducts.length);
  figureImage2.src = Product.allProducts[randomIndex].filepath;
  figureImage2.alt = Product.allProducts[randomIndex].name;
}
function randomProduct3(){
  var randomIndex = Math.floor(Math.random()* Product.allProducts.length);
  figureImage3.src = Product.allProducts[randomIndex].filepath;
  figureImage3.alt = Product.allProducts[randomIndex].name;
}
randomProduct1();
randomProduct2();
randomProduct3();
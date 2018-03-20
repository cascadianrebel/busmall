'use strict';
//array to hold products

Product.allProducts = [];

//array to prevent previously displayed products
Product.lastShown = [];

//access the images from the DOM
var product1 = document.getElementById('product1');
var product2 = document.getElementById('product2');
var product3 = document.getElementById('product3');

//product constructor
function Product (filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.shown = 0;
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


// Product.container = document.getElementById('imageContainer');
// Product.pictures = [document.getElementById('product1'), document.getElementById('product2'), document.getElementById('product3')];

function randomProduct() {
  //create 3 random indices
  var randomProduct1= Math.floor(Math.random()* Product.allProducts.length);
  var randomProduct2= Math.floor(Math.random()* Product.allProducts.length);
  var randomProduct3= Math.floor(Math.random()* Product.allProducts.length);


  while( randomProduct1 === randomProduct2
    || randomProduct2 === randomProduct3
    || randomProduct1 === randomProduct3
    || Product.lastShown.includes(randomProduct1)
    || Product.lastShown.includes(randomProduct2)
    || Product.lastShown.includes(randomProduct3)){
    randomProduct1= Math.floor(Math.random()* Product.allProducts.length);
    randomProduct2= Math.floor(Math.random()* Product.allProducts.length);
    randomProduct3= Math.floor(Math.random()* Product.allProducts.length);
    console.log('duplicate was caught');
  }

  // //ensure numbers will be different for each
  // console.log(randomProduct1);
  // console.log(randomProduct2);
  // console.log(randomProduct3);

  //push images to DOM
  product1.src = Product.allProducts[randomProduct1].filepath;
  product1.alt = Product.allProducts[randomProduct1].filepath;
  product2.src = Product.allProducts[randomProduct2].filepath;
  product2.alt = Product.allProducts[randomProduct2].filepath;
  product3.src = Product.allProducts[randomProduct3].filepath;
  product3.alt = Product.allProducts[randomProduct3].filepath;

  // //increment views
  // Product.allProducts[randomProduct1].shown++;
  // Product.allProducts[randomProduct2].shown++;
  // Product.allProducts[randomProduct3].shown++;

  Product.lastShown = [];
  Product.lastShown.push(randomProduct1);
  Product.lastShown.push(randomProduct2);
  Product.lastShown.push(randomProduct3);


}
// function shownProducts() {
//   var randomProduct = randomIndex();
//   while (Product.viewed.includes(randomProduct))
//     Product.shown.push(randomProduct);
// }

// Product.pictures.addEventListener('click',randomProduct());

// figureImage1.addEventListener('click',randomProduct1);
// figureImage2.addEventListener('click',randomProduct2);
// figureImage3.addEventListener('click',randomProduct3);


// function randomProduct2(){
//   var randomIndex = Math.floor(Math.random()* Product.allProducts.length);
//   figureImage2.src = Product.allProducts[randomIndex].filepath;
//   figureImage2.alt = Product.allProducts[randomIndex].name;
// }
// function randomProduct3(){
//   var randomIndex = Math.floor(Math.random()* Product.allProducts.length);
//   figureImage3.src = Product.allProducts[randomIndex].filepath;
//   figureImage3.alt = Product.allProducts[randomIndex].name;
// }
randomProduct();

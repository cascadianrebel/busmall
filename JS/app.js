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
new Product('img/assets/pet-sweet.jpg', 'dogMop');
new Product('img/assets/scissors.jpg', 'pizzaScissors');
new Product('img/assets/shark.jpg','sharkAttack');
new Product('img/assets/sweep.png', 'babyMop');
new Product('img/assets/tauntaun.jpg', 'hothSleepingBag');
new Product('img/assets/unicorn.jpg', 'unicornMeat');
new Product('img/assets/usb.gif', 'tenticleUsb');
new Product('img/assets/water-can.jpg', 'noWaterCan');
new Product('img/assets/wine-glass', 'wineGlass');

console.log(Product.allProducts);

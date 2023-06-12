
const milk = 15.678;
const meat = 123.965;
const eggs = 90.2345;

console.log ('milk:', milk);
console.log ('meat:', meat);
console.log ('eggs:', eggs);

console.log ('max price:', Math.max(milk, meat, eggs));
console.log ('min price:', Math.min(milk, meat, eggs));

let costOfGoods = (milk + meat + eggs);
console.log ('cost of goods:', costOfGoods)

let opportunityCostOfGoods = (Math.trunc(milk) + Math.trunc(meat) + Math.trunc(eggs));
console.log ('opportunity cost of goods:', opportunityCostOfGoods);

let roundPrice = Math.round (costOfGoods / 100) * 100;
console.log ('round price:', roundPrice);

let floorPrice = Math.floor (costOfGoods);
console.log ('floor cost:', floorPrice);

let bool = floorPrice % 2 == 0;
console.log ('boolean:', bool);

let remainder = 500 - costOfGoods;
console.log ('remainder:', remainder);


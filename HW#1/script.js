
const milk = 15.678;
const meat = 123.965;
const eggs = 90.2345;

console.log ('milk:', milk);
console.log ('meat:', meat);
console.log ('eggs:', eggs);

let max = Math.max(milk, meat, eggs);
console.log ('max price:', max);

let min = Math.min(milk, meat, eggs);
console.log ('min price:', min);

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

let averagePrice = costOfGoods / 3;
let roundedAmount = Math.round (averagePrice * 100) / 100;
console.log ('rounded amount:', roundedAmount);

//More difficult

let discount = (Math.random ()*10) + 5;
console.log ('discount:', discount)

let goodsWithDiscount = Math.round ((costOfGoods - discount) * 100) / 100;
console.log ('goods with discount:', goodsWithDiscount);

let netProfit = ((costOfGoods / 2) - discount).toFixed(2);
console.log ('net profit:', netProfit);

//Advanced

let allValues = `
max price: ${max}
min price: ${min}
cost of goods: ${costOfGoods}
opportunity cost of goods: ${opportunityCostOfGoods}
round price: ${roundPrice}
floor cost: ${floorPrice}
boolean: ${bool}
remainder: ${remainder}
rounded amount: ${roundedAmount}
discount: ${discount}
goods with discount: ${goodsWithDiscount}
net profit: ${netProfit}
`;
console.log (allValues);
const numbers=[2,4,6,8,10];
const double=num=>num*2;
const makeDouble=numbers.map(double);
const makeDouble1=numbers.map(num=>num*2);
console.log(makeDouble);
console.log(makeDouble1);

const serialNumber=[1,2,3,4,5,6,7,8,9,10].map(x=>x*17);
console.log(serialNumber);
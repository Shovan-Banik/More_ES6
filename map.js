// map moloto loop ar moto kaj kore...sudhu matro array te aita avialable ....array ar sob gula opadan niye kaj kore...abong retun kore finally
const numbers=[2,4,6,8,10];
const double=num=>num*2;
const makeDouble=numbers.map(double);
const makeDouble1=numbers.map(num=>num*2);
// console.log(makeDouble);
// console.log(makeDouble1);

const serialNumber=[1,2,3,4,5,6,7,8,9,10].map(x=>x*17);
// console.log(serialNumber);

const name=['abul','haji','masud','shahin','gias','hosen','josna','maoi','mohammod','fajlo'];
const firstLeter=name.map(n=>n[0]);
const nameLength=name.map(n=>n.length);
console.log(firstLeter);
console.log(nameLength);

const khala=[
    {name: 'shokhiton',ranna: 'valo',length: '1 year'},
    {name: 'kolson',ranna: 'motamoti',length: '3 year'},
    {name: 'mota',ranna: 'valo',length: '4 month'},
    {name: 'borishailla',ranna: 'baje',length: '3 month'},
]
const khalaName=khala.map(x=>x.name);
console.log(khalaName);
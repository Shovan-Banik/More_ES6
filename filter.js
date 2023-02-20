// filter holo condition check kore jgula pabe oigula k dibe sudhu orthat condition true hole sobgula k dibe
const num=[4,32,335,235,5364,36,8,45,433,777,888,8];
const large=num.filter(n=>n>100);
const tiny=num.filter(n=>n<100);
const even=num.filter(n=>n%2===0);
// console.log(large);
// console.log(tiny);
// console.log(even);
const khala=[
    {name: 'shokhiton',ranna: 'valo',length: '1 year',age:43},
    {name: 'kolson',ranna: 'motamoti',length: '3 year',age:37},
    {name: 'mota',ranna: 'valo',length: '4 month',age:52},
    {name: 'borishailla',ranna: 'baje',length: '3 month',age:34},
]
const boyos=khala.filter(n=>n.age>50);
console.log(boyos)
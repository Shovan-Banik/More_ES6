// find holo condition check kore condition true hole susdhu prothom value ta k dibe...onk gula true holeo just prothom ta k dibe
const num=[4,32,335,235,5364,36,8,45,433,777,888,8];
const even=num.find(n=>n%2===0);/* sudhu matro first value jeita condition fulfill kore oita dey */
const evenAll=num.filter(n=>n%2===0);/* condition full kore amn sob gula k dey */
console.log(even);
console.log(evenAll);

const khala=[
    {name: 'shokhiton',ranna: 'valo',length: '1 year',age:43},
    {name: 'kolson',ranna: 'motamoti',length: '3 year',age:37},
    {name: 'mota',ranna: 'valo',length: '4 month',age:52},
    {name: 'borishailla',ranna: 'baje',length: '3 month',age:34},
]
const up35=khala.find(n=>n.age>35);
console.log(up35);
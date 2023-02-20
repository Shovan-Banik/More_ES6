const num=[1,2,3,4,5];
const sum=num.reduce((previous,current)=>previous+current,0);
// console.log(sum)
const sum1=num.reduce((previous,current)=>{
    console.log(previous,current);
    return previous+current;
},0);
console.log(sum1);
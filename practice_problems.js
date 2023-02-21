// problem:1
// const numbers=[1,3,5,7,9];
// const even=numbers.map(n=>n+1);
// console.log(even);

// problem:3
// const numbers=[33,50,79,78,90,101,30];
// const divided=numbers.filter(n=>n%10===0);
// console.log(divided);


// problem-4
// const numbers=[33,50,79,78,90,101,30];
// const divided=numbers.find(n=>n%10===0);
// console.log(divided);


// problem:5
// const numbers=[1,9,17,22];
// const sum=numbers.reduce((previous,current)=>previous+current,0);
// console.log(sum);



// problem:6
// const numbers=[1,9,17,22];
// sum=0;
// for(let i=0;i<numbers.length;i++){
//     const value=numbers[i];
//     sum=sum+value;
// }
// console.log(sum);


// problem:7
// const people=[
//     {name: 'mina', age: 20},
//     {name: 'rina', age: 15},
//     {name: 'tina', age: 22}
// ];
// const totalAge=people.reduce((previous,current) => previous +Number.parseInt( current.age) , 0 );
// console.log(totalAge);



// problem:8
// let data={
//     location: [
//         {
//             latitude: '34.5 , 37.8',
//             longitude: '98.77 , 58.7',
//             city: 'hyderabad',
//             country: 'India'
//         }
//     ]
// };
// console.log(data.location[0].city);



// problem:9
const user={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  };
  console.log(user.email);
  console.log(user.address);
  console.log(user.address.city);
  console.log(user.address.geo.lat);
  console.log(user.company.name);


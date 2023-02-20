const identity=['shovan',{district: 'tangail', village: 'balla'},'student'];
// console.log(identity[1].village);
const person={
    name: 'hassokor',
    person: {
        color: 'black',
        height: 5.5,
        weight: 70,
        address:{
            district: 'b.baria',
            village: 'amtoli',
            thana: [10,20,'bijoynogor']
        },
        food: 'kodbell'
    }  
}
const personThana=person.person.addres?.thana[2];/* ? mark deya k bole optional chaining.....orthat ? ager object ta k na paile tmi bondo hye jao */
console.log(personThana);
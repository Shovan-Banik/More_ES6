const student={
    name: 'kdu azad',
    age: '21',
    nationality: 'bangladeshi',
    charecter:{
        look: 'lucca',
        vab: 'hojor',
    }
}
const nation=student.nationality;
// console.log(nation)
const desh=student['nationality'];
console.log(desh);
const studentVab=student['charecter']['vab'];
console.log(studentVab);
const kaj='look';
const studentKaj=student.charecter[kaj];
console.log(studentKaj);
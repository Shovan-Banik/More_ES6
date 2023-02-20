// syntactic sugar (class k bola hoy)

class Student{
    name;
    roll;
    class='seven';
    dress='White shirt and blue pant';
    location;
    constructor(name,roll,location){
        this.name=name;
        this.roll=roll;
        this.location=location;
    }
    startReadFrom(time){ /* aigula k bole method */
        console.log(`start read from ${time}`);
    }
    takeLunchAt(event){ /* aigula k bole method */
        console.log(`Take your lunch at ${event}`);
    }
}
const payel=new Student('payel',10,'balla');
console.log(payel);
payel.startReadFrom('7.00 a.m');
payel.takeLunchAt('paser barire');
const gonesh=new Student('petok gonesh',156,'balla');
console.log(gonesh);
class Student{
    name;
    roll;
    cls;
    constructor(name,roll,cls){
        this.name=name;
        this.roll=roll;
        this.cls=cls;
    }
    startReadFrom(time){ /* aigula k bole method */
        console.log(`start read from ${time}`);
    }
}
class KakatoVai extends Student{
    dress='White shirt and black pant';
    location;
    constructor(name,roll,cls,location){
       super(name,roll,cls);
        this.location=location;
    }
    takeTiffinAt(time){ /* aigula k bole method */
    console.log(`Take your tiffin at ${time}`);
}
    takeLunchAt(event){ /* aigula k bole method */
        console.log(`Take your lunch at ${event}`);
    }
}
class MamatoVai extends Student{
    location;
    constructor(name,roll,cls,location){
       super(name,roll,cls);
        this.location=location;
    }
    takeLunchAt(event){ /* aigula k bole method */
        console.log(`Take your lunch at ${event}`);
    }
}
class MaisatoVai extends Student{
    dress='sky shirt and black pant';
    location;
    constructor(name,roll,cls,location){
        super(name,roll,cls);
        this.location=location;
    }
    takeTiffinAt(time){ /* aigula k bole method */
        console.log(`Take your lunch at ${time}`);
    }
}
const dorjoy=new KakatoVai('Durjoy Banik',57,'Inter 1st year','balla');
console.log(dorjoy);
dorjoy.startReadFrom('7 pm');
dorjoy.takeLunchAt('nijer bari');
dorjoy.takeTiffinAt('Saradin');
const sohon=new MamatoVai('Shohon Banik',7,'SSC final year','pakutia');
console.log(sohon);
sohon.startReadFrom('8 pm');
sohon.takeLunchAt('Bazare');
const dhrubo=new MaisatoVai('Dhrubo Banik',3,"nine",'simolia');
console.log(dhrubo);
dhrubo.startReadFrom('8 pm');
dhrubo.takeTiffinAt('5 pm');

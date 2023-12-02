class marksheet{
    constructor(math, guj, hindi, ss, sci,name){
        this.math = math;
        this.guj = guj;
        this.hindi = hindi;
        this.ss = ss;
        this.sci = sci;
        this.name = name;

        let sum = this.guj + this.hindi + this.math + this.sci + this.ss ;
        console.log('Name = ',this.name);
        console.log('Total Marks = ',sum);
        console.log('PR = ',sum/5,' %');
        console.log('');
    }
    
}

class stuDet{
    constructor(){
    }
}
class std10 extends marksheet{

}

let s1 = new std10(62,63,62,54,45,'Aman');
let s2 = new std10(62,63,42,44,48,'Suresh');
let s3 = new std10(92,93,42,44,48,'Ashok');
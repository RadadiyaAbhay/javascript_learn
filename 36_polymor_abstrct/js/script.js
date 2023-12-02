class car{
    constructor(type, average){
        this.type = type;
        this.average = average;
    }

}

class honda extends car{
    getDetails(){ // Polymorphism
        let engNumber = 32289; //Abstraction
        console.log(`Type = ${this.type}  ,Average = ${this.average}  ,Eng. Number = ${engNumber}`);

        let thankYou = () =>{ // Abstraction
            console.log('Thank You For Use Abstraction');
        }
        thankYou();
    }
}

class tata extends car{
    getDetails(){ // Polymorphism
        let engNumber = 56789; // Abstraction
        console.log(`Type = ${this.type}  ,Average = ${this.average}  ,Eng. Number = ${engNumber}`);
    }
}

let nexon = new tata('EV', 10);
nexon.getDetails();
let city = new honda('cng', 30);
city.getDetails();

 
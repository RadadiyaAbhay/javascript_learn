class car{
    
    constructor(name,num,model){
        this.name = name;
        this.num = num;
        this.model = model;
    }

}

let c1 = new car('Honda','9999','City');
let c2 = new car('Tata','8888','safari');
let c3= new car('BMW','3458','Z100');
console.log(c1);
console.log(c2);
console.log(c3);

var err =new Error('Error');
console.log(err);
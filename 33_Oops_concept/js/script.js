class form{ // className

    constructor(){
        console.log('Welcome Our Class');
    }
    details = (n,e,a) =>{ // Method

        var stuDetails = { //object 
            name : n,
            email : e,
            age : a,
        }
        return stuDetails;
    }

}


    var m1 = new form; // object class form
    var m2 = new form;
    var m3 = new form;
    
    console.log(m1.details('Abhay' , 'a@gmail.com' , 18));

    console.log(m2.details('Vaibhav' , 'v@gmail.com' , 20));
    console.log(m3.details('Vinay' , 'vi@gmail.com' , 19));


    var date = new Date;
    console.log(date);

    console.log(Math.ceil(40.2));
    
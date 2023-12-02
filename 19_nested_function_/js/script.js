// Nested Function


function sumA(){
    console.log("I'm Fun SumA");
}
function sumB(){
    console.log("I'm Fun SumB");

    function sumC(){ // This Function Declare In parent Function  
        console.log("I'm Fun SumC")
    }
    sumA(); // This Function Call in parent Function
    sumC();
}

sumB();


// sumC();  This Function Not call Becuse this function invoke in parent Function



//Closure Concept

function sumD(){
    console.log("I'm Fun SumD");

    function sumE(){ // This Function Declare In parent Function  
        console.log("I'm Fun SumE")
    }

    return sumE;
}

var k =sumD();
console.log(k);

k();



// IIFE = Immediately Invoked Function Expression
// Anonymous Function


(function (){
    console.log("Anonymous Function");
} ())
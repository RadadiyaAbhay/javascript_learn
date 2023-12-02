//concat

var arr1 = [1,2,3,4,5,6];
var arr2 = ['a' ,'b','c' ,'d'];

var a =arr1.concat(arr2);
console.log(a); // 1,2,3,4,5,6,7,8,9,0


// copyWithin

console.log(arr1.copyWithin(1,2, 4)); // 1,3,4,4,5,6

// entries

var c =arr2.entries();

for(i=0;i<arr2.length ; i++){
    console.log(c.next().value); // (0 ,'a')
}


//every
var arr4 = [1,2,3,4,5,6];

var c =arr4.every((k)=>{
   if( k < 100){

       return k;
   }
        
    
})

console.log(c);  // true

//fill


console.log(arr4.fill(0 ,1,4)); //[1, 0, 0, 0, 5, 6]
console.log(arr4.fill(0 ,1)); //[1, 0, 0, 0, 0, 0]
console.log(arr4.fill(0 )); //[0, 0, 0, 0, 0, 0]


//Filter

var arr5 = ['apple','mi','realme','redmi'];


var words = 'realme';
var res = arr5.filter((word) =>{
    if(word == words){
        return word;
    }
})

console.log(res); // realme


//find

var found = arr4.find((k) =>{
    if(k <3){
        return k;
    }
})

console.log(found); // realme
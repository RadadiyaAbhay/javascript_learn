var a = new Array('Apple' , 'Redmi' , 'Realme' , 'Oneplus');
var e = new Array(32,543,123,623,76,2376,632,2365,326,326);
var m = new Array('Apple' , 'Redmi' , 'mi' , 'Oneplus');
var p =[12,13,[23,[23,546]]];

console.log("A array = "+a);
console.log("E array = "+e);
console.log("M array = "+m);
console.log("P array = "+p);


//1.values

var b = a.values();

for(var value of b){
    console.log("values = "+value);
}

//2.Length

console.log("Length = "+a.length);

//3.Reverse

var c = a.reverse();

console.log("reverse = "+c);

//4.sort

var d = e.sort();

console.log("sort = "+d);

//5. at

console.log("at = "+a.at(2));


//6.fill

a.fill('Motorola',1,2);
console.log("Fill = "+a);


//7.from
var fa ={0: 'apple',  1: 'banana' , 2: 'cherry' ,length :3}
var f =Array.from(fa);
console.log("From = "+f);

//8.join

var g = a.join(' :: ');
console.log("join = "+g);

//9.toString

var h = a.toString();
console.log("tostring = "+h);

//10. pop 

var i = a.pop();
// pop  method in array in last element remove return
console.log("pop = "+i);
console.log("new array = "+a);

//11. foreach

a.forEach((j) => {

    console.log("for each = "+j); 
});

//12. shift

var k = a.shift();
// shift  method in array in first element remove return
console.log("shift = "+k);
console.log("new array = "+a);

//13.copyWithin

var l = e.copyWithin(2,4,5);
console.log("copyWithin = "+l);

//14.push

a.push('Apple','Techno','Vivo');
console.log("Push = "+a);

//15.unShift

a.unshift('Apple','Techno','Vivo');
console.log("Unshift = "+a);

//16.Concat

var o =a.concat(e);
console.log("Concat = "+o);

//17.splice

m.splice(1,2,'MI')
console.log("Splice = "+m);

//18.flat

var q =p.flat();
console.log("Flat = "+q);

//19.Indexof

console.log("Indexof = "+m.indexOf('MI'));

//20.lastIndexof

console.log("lastIndexof = "+m.lastIndexOf('Apple'));

//21.Of

var r = Array.of(1,2,3,'Four',true);
console.log("of = ", r);

//22.Every

var s=e.every((t) =>{
    return t<10000;
})

console.log("every = ", s);

//23.FlatMap

var u=e.flatMap((t) =>{
    return t%2;
})

console.log("FlatMap = ", u);

//24.slice

var v=a.slice(2,4)

console.log("Slice = ", v);

//25.findindexof

var x=e.findIndex((num)=>{
    return num>300;
})

console.log("findindex = ", x);

//26.find

var x=e.find((num)=>{
    return num>300;
})

console.log("find = ", x);

//27.includes

var y=a.includes('l')

console.log("includes = ", y);

//28.Entries

var y=a.entries();

console.log("entries = ", y.next().value);
console.log("entries = ", y.next().value);

//29.reduce

var numbers= [10,20,30,40];

var sum =numbers.reduce((ab ,ac)=>{
    return ab+ac;
})

console.log("Reduce = "+sum);

//30.reduceRight

var numbers= [10,20,30,40];

var sum1 =numbers.reduceRight((ab ,ac)=>{
    return ab+ac;
})

console.log("reduceRight = "+sum1);

//31. IsArray

console.log("isArray = "+Array.isArray(a));
console.log("isArray = "+Array.isArray(sum));

//32. Filter

var ad =a.filter((ae)=>{
    return 5<ae.length
})
console.log("filter = "+ad);

//33. Map

var af =e.map((ag)=>{
    return ag*ag;
})
console.log("Map = "+af);

//34.keys

var ai ={a: 1 , b: 2 ,c: 3};
var ah =Object.keys(ai);
console.log("keys = "+ah);

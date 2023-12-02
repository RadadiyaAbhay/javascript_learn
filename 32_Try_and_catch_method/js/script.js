
setTimeout(timeFun = () =>{
    console.log('Error');
},1000);

var sum = () =>{
    var a = document.getElementById('fnum').value;
    var b = document.getElementById('snum').value;
   
    var out = a+b;

    document.getElementById('out').innerHTML = out;
}



var sub = () =>{
    var a = document.getElementById('fnum').value;
    var b = document.getElementById('snum').value;
   
    var out = a-b;

    document.getElementById('out').innerHTML = out;
}



var mul = () =>{
    var a = document.getElementById('fnum').value;
    var b = document.getElementById('snum').value;
   
    var out = a*b;

    document.getElementById('out').innerHTML = out;
}



var div = () =>{
    var a1 = document.getElementById('fnum').value;
    var b = document.getElementById('snum').value;
    var out = '';
    try{
        out = a/b;
        document.getElementById('out').innerHTML = out;
    }
    catch(err){
        document.getElementById('out').innerHTML = `Error ${err}`;
    }

}



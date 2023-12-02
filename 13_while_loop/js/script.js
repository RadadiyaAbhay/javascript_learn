var a = 0;

var t = '';

while(a <= 30){

    // t += "<p>A = " +a+ "</P>";
    t += `<p>A = ${a} </p>`;
    
    console.log(a);

    document.write("A = " +a);
    a++;
}

document.getElementById('sho').innerHTML = t;
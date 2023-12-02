function mul(){
    var a =document.getElementById('n1').value;
    var b =document.getElementById('n2').value;

    var c= a*b;

    document.getElementById('out').innerHTML= `Multiply = ${c}`;
}
function div(){
    var a =document.getElementById('n1').value;
    var b =document.getElementById('n2').value;

    var c= a/b;

    document.getElementById('out').innerHTML= `Divide = ${c}`;
}
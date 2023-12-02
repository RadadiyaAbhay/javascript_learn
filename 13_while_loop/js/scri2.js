function i1(){

    var i = 1;
    var k =' ';
    while(i<=10){
        k += `<p>${i}</p>`
        i++;
    }
    document.getElementById('i1').innerHTML = k ;
}
function i2(){

    var i = 10;
    var k =' ';
    while(i>=1){
        k += `<p>${i}</p>`
        i--;
    }
    document.getElementById('i2').innerHTML = k ;
}
function i3(){

    
    var a = 1;
    var i =parseInt(document.getElementById('i33').value);
    var k =' ';
    while(a<=i){
        k += `<p>${a}</p>`
        a++;
    }
    document.getElementById('i3').innerHTML = k ;
}
function i4(){

    
    var a = 1;
    var i =parseInt(document.getElementById('i44').value);
    var k =' ';
    while(i>=a){
        k += `<p>${i}</p>`
        i--;
    }
    document.getElementById('i4').innerHTML = k ;
}

function i5(){

    
    var a = 1;
    var i =parseInt(document.getElementById('i55').value);
    var k =' ';
    
    while(a<=i){
        if(a%2 == 0){
            k += `<p>${a}</p>`;
        }else{

        };
        a++;
    }
    document.getElementById('i5').innerHTML = k ;
}

function i6(){

    
    var a = 1;
    var i =parseInt(document.getElementById('i66').value);
    var k =' ';
    
    while(i>=a){
        if(i%2 == 1){
            k += `<p>${i}</p>`;
        }else{

        };
        i--;
    }
    document.getElementById('i6').innerHTML = k ;
}

function i7(){

    

    var i =parseInt(document.getElementById('i77').value);

    
    if(i>=2000 && i<=3000){
        if(i%4 == 0){
            document.getElementById('i7').innerHTML = "This is Leap Year";
        }else{
        document.getElementById('i7').innerHTML = "This is Not Leap Year";
        };
    }else{
        document.getElementById('i7').innerHTML = "Plz Enter Vaild Year";
    };
}


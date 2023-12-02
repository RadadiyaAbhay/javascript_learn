function ok(){
    var sum = 0;
    var i;
    
    var userv = parseInt(document.getElementById('in').value);
    for(i=0 ; i<=userv ; i++){
        sum += i;
    
        document.getElementById('ro').innerHTML = sum;
    
    }

}

function ok1(){
    
    var k1 ='';
    var userv1 = parseInt(document.getElementById('in1').value);
    for(i=1 ; i<=10 ; i++){
        // console.log(userv1+ "*"+ i +"="+ userv1 * i);

        k1 += `<P>${userv1} * ${i} = ${userv1 * i }<p>`;
    
    }
    document.getElementById('ro1').innerHTML = k1;
}

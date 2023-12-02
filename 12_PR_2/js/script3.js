function iti(){
    var pa = parseInt(document.getElementById('pai').value);
    document.getElementById('pao').innerHTML = pa;
    document.getElementById('pao2').innerHTML = pa;

    var year = parseInt(document.getElementById('yi').value);
    document.getElementById('yo').innerHTML = year;

    var rate;

z
    if(year >3 && year <=12){
        if(year <=5){
            rate = 3;
        }else if(year <=8){
            rate = 5;
        }else{
            rate = 12;
        }
    }else{
        rate = 15;
    }

    var inte;

    inte = (pa*year*rate)/100;
    document.getElementById('inte').innerHTML= inte ;

    var final;

    final =pa + inte;
    document.getElementById('final').innerHTML= final ;
    document.getElementById('rate').innerHTML= rate ;


    


}

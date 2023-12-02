function iti(){
    var pa = parseInt(document.getElementById('pai').value);
    document.getElementById('pao').innerHTML = pa;
    document.getElementById('pao2').innerHTML = pa;

    var year = parseInt(document.getElementById('yi').value);
    document.getElementById('yo').innerHTML = year;

    var rate = parseInt(document.getElementById('ri').value);
    document.getElementById('rate').innerHTML= rate ;
    
    var hShow =  `
    <div class="row">
                <div id="calculation">
                    <div class="col-12 border d-flex cb">
                        <div class="col-1 p-1 fw-bold text-center">Month</div>
                        <div class="col-2 p-1 fw-bold text-center">Opening Balance</div>
                        <div class="col-2 p-1 fw-bold text-center">EMI</div>
                        <div class="col-2 p-1 fw-bold text-center">Interest paid monthly</div>
                        <div class="col-2 p-1 fw-bold text-center">Principal paid monthly</div>
                        <div class="col-3 p-1 fw-bold text-center">Closing Balance</div>
                    </div>
                    <div class="col-12   d-flex">
                        <div class="col-1 p-1 fw-bold text-center" id="month"></div>
                        <div class="col-2 p-1 fw-normal text-center" id="ope"> </div>
                        <div class="col-2 p-1 fw-normal text-center" id="emi"> </div>
                        <div class="col-2 p-1 fw-normal text-center" id="int"></div>
                        <div class="col-2 p-1 fw-normal text-center" id="ppm"> </div>
                        <div class="col-3 p-1 fw-normal text-center" id="clo"> </div>
                    </div>
                </div>
            </div>
    `;

    document.getElementById('show').innerHTML = hShow;




    var inte;
    var intef = 0;

    inte = (pa*(rate/12)*1)/100;
    

    var final;

   

    var i=1;
    var pri =pa ;
    var t = ' ';
    var a =' ';
    var b =' ';
    var d =' ';
    var e =' ';
    var f =' ';
    var ra = ((rate/12)/100);
    // var emi = pa*ra*((1+ra)*year)/((1+ra)*(year-1));
    // var emi = pa * ra * (1 + ra)^240 / ((1 +ra)^240 - 1);
    var emi = pa * ra * (Math.pow(1 + ra, year) / (Math.pow(1 + ra, year) - 1));
    document.getElementById('emi1').innerHTML =emi.toFixed(2);

    for(i=1 ; i<=(year) ;i++){
        inte = (pri*(rate/12)*1)/100;

        // console.log(intef);
        // console.log(inte);
        intef += inte;
        var pay = emi - inte ;
        
        e +=`<p>${pri.toFixed(2)}</p>`;
        pri = pri - pay ;
        
        f +=`<p>${pri.toFixed(2)}</p>`;
        d +=`<p>${pay.toFixed(2)}</p>`;
        b +=`<p>${emi.toFixed(2)}</p>`;
        a +=`<p>${inte.toFixed(2)}</p>`;
        t +=`<p>${i}</p>`;
        // console.log(inte); 
        // console.log(pri); 
    }
    document.getElementById('clo').innerHTML = f ;
    document.getElementById('ope').innerHTML = e ;
    document.getElementById('ppm').innerHTML = d ;
    document.getElementById('month').innerHTML = t ;
    document.getElementById('int').innerHTML = a ;
    document.getElementById('emi').innerHTML = b ;
    document.getElementById('inte').innerHTML= intef.toFixed(2) ;
    final =pa + intef;
    document.getElementById('final').innerHTML= final.toFixed(2) ;



}




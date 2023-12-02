var kk = `
<div class="border p-5 " style="height: 640px; width: 700px;box-shadow: 1px 2px 10px #000000; margin-top: 200px ;">
    <div class="col-12 border">
        <div class="col-12 border bg-danger">
            <h4 class="mb-0 px-2 py-3 fw-bolder">DGVCL</h4>
        </div>
        <div class="col-12 border">
            <h5 class="mb-0 p-2 fw-bold">Name :<span class="fw-normal fs-6"> K. K. Sorthiya</span></h5>
        </div>
        <div class="col-12 border">
            <h5 class="mb-0 p-2 fw-bold">Consumer No. : <span class="fw-normal fs-6" id="cons"></span></h5>
        </div>
        <div class="col-12 border">
            <h5 class="mb-0 p-2 fw-bold">Mobile No. : <span class="fw-normal fs-6" id="mobs"> </span></h5>
        </div>
        <div class="col-12 border">
            <h5 class="mb-0 p-2 fw-bold">Email : <span class="fw-normal fs-6" id="mail"> </span></h5>
        </div>
        <div class="col-12 border">
            <h5 class="mb-0 p-2  fw-bold">Add :<span class="fw-normal fs-6"> 23 , Madhav Villa , Mota Varachha , Surat.</span></h5>
        </div>
        <div class="col-12 border">
            <h5 class="mb-0 p-2  fw-bold">Biling Month :<span class="fw-normal fs-6">  Feb , 2023</span></h5>
        </div>
        <div class="col-12 border">
            <h5 class="mb-0 p-2  fw-bold">Bill Payment Last Date :<span class="fw-normal fs-6"> 11<sup>th</sup> March ,2023</span></h5>
        </div>
        <div class="col-12 border p-3">
        </div>
        <div class="col-12 border">
            <h6 class="mb-0 p-2  fw-bold">Unit : <span class="fw-normal fs-6" id="unitoo"> </span></h6>
        </div>
        <div class="col-12 border">
            <h6 class="mb-0 p-2  fw-bold">Unit Charge : <span class="fw-normal fs-6" id="uniti"> </span></h6>
        </div>
        <div class="col-12 border">
            <h6 class="mb-0 p-2  fw-bold">Surcharge : <span class="fw-normal fs-6" id="cha"> </span></h6>
        </div>
        <div class="col-12 border">
            <h6 class="mb-0 p-2  fw-bold">Final Amount : <span class="fw-normal fs-6" id="fine"> </span></h6>
        </div>
    </div>     
</div>
`;


var cons2;
var mobs2;
function first(){
    var cons = document.getElementById('consumer').value;
    cons2 = cons;
    var mobs = document.getElementById('mob').value;
    mobs2 = mobs;
    document.getElementById('show').innerHTML= `
    <div class="border p-5" style="height: 300px; width: 400px;box-shadow: 1px 2px 10px #000000;">
        <h5 class="fw-bold text-primary-emphasis my-0 ">Name</h5>
        <p class="fw-normal d-block fs-6 w-100 py-1 mb-0 fw-bold">K. K. Sorthiya</p>
        <h5 class="pt-3 fw-bold text-primary-emphasis my-0 " >Mobile No.</h5>
        <p class="fw-normal d-block fs-6 w-100 py-1  fw-bold">23 , Madhav Villa , Mota Varachha , Surat.</p>
        <input type="button" class="d-block px-3 py-2 text-success border fw-bolder rounded-2" style="margin:0 auto; box-shadow: 1px 1px 5px #000000;"  value="Next" onclick="return sec()" />
    </div>
    `;

}

function sec(){
    document.getElementById('show').innerHTML= `
    <div class="border p-5" style="height: 300px; width: 400px;box-shadow: 1px 2px 10px #000000;">
        <h5 class="fw-bold text-primary-emphasis">Email</h5>
        <input type="email" id="maili" class="fw-normal d-block w-100 py-1" placeholder="Enter Your Mail Id"/>
        <h5 class="pt-3 fw-bold text-primary-emphasis" >Unit</h5>
        <input type="number" id="unito" class="fw-normal d-block w-100 py-1 mb-4" placeholder="Enter Your Unit"/> 
        <input type="button" class="d-block px-3 py-2 text-success border fw-bolder rounded-2" style="margin:0 auto; box-shadow: 1px 1px 5px #000000;"  value="Confirm" onclick="return unit()" />
    </div>
    `;
    

}

function unit(){

    var unit = document.getElementById('unito').value;
    var mail = document.getElementById('maili').value;

    var calc;
    var sum;
    var charge;
    var fin ;
    
    if(unit>=0 && unit<=50){
    
        sum = unit;
        calc = (sum*1);
        charge= '-';
        fin= calc;

        
    }else if(unit<=150){
    
        sum = (unit - 50);
        calc = ((sum*2)+50);
        charge= '-';
        fin = calc;
    
    }else if(unit<=250){
    
        sum = (unit - 150);
        calc = ((sum*3)+250);
        charge =(calc*(20/100));
        fin= (calc+charge);
        
        
    }else{
    
        sum = (unit - 250);
        calc = ((sum*4)+550);
        charge =(calc*(20/100));
        fin= (calc+charge);
        
    }
    document.getElementById('show').innerHTML= `
    ${kk}
    `;
    console.log("Charge", typeof charge);
    document.getElementById('unitoo').innerHTML = unit;
    document.getElementById('uniti').innerHTML = calc;
    document.getElementById('cha').innerHTML = (typeof charge == "number") ? charge.toFixed(2) : "-";
    document.getElementById('fine').innerHTML = fin;
    document.getElementById('mail').innerHTML = mail;
    document.getElementById('cons').innerHTML = cons2;
    document.getElementById('mobs').innerHTML = mobs2;

    
    }
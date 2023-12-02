var per;
function mark(){
    var math = parseInt(document.getElementById("mathi").value);
    var hindi = parseInt(document.getElementById("hindii").value);
    var english = parseInt(document.getElementById("englishi").value);
    var science = parseInt(document.getElementById("sciencei").value);
    var socialScience = parseInt(document.getElementById("ssi").value);
    var gujarati = parseInt(document.getElementById("guji").value);
if (gujarati >= 0 && gujarati <= 100 &&
    socialScience >= 0 && socialScience <= 100 &&
    science >= 0 && science <= 100 &&
    english >= 0 && english <= 100 &&
    hindi >= 0 && hindi <= 100 &&
    math >= 0 && math <= 100) {
    document.getElementById("okj").innerHTML = "";
        var show= `
        
        <div class="border mb-5">
            <div class="col-12 d-flex bg-danger">
                
                <div class="col-12 border d-flex py-1 d-flex justify-content-center"><b class="fs-4 ">Red & White Institutes</b> </div>
                
            </div>
            <div class="col-12 d-flex">
                <div class="col-12 border d-flex py-1"><b>Name :</b><p class="mb-0 ps-1"> Allu Arjun</p> </div>
                
                
            </div>
            <div class="col-12 d-flex">
                <div class="col-6 border d-flex py-1"><b>GRID :</b><p class="mb-0 ps-1"> 3217</p> </div>
                
                <div class="col-6 border d-flex py-1"><b>School Index :</b><p class="mb-0 ps-1"> 68.3543</p> </div>
                
            </div>
            
            <div class="col-12 d-flex">
                
                <div class="col-6 border d-flex py-1"><b>Std :</b><p class="mb-0 ps-1"> 10<sup>th</sup></p> </div>
                <div class="col-6 border d-flex py-1"><b>Roll No. :</b><p class="mb-0 ps-1"> 89</p> </div>
                
            </div>
            <div class="col-12 d-flex">
                
                <div class="col-12 border d-flex py-3 d-flex justify-content-center"> </div>
                
            </div>
            <div class="col-12 d-flex " style="background-color: rgba(220,53,69, 0.3);">
                
                <div class="col-6 border d-flex py-1 fs-6"><b>Subject Name</b> </div>
                <div class="col-3 border d-flex py-1 fs-6"><b>Total Mark</b> </div>
                <div class="col-3 border d-flex py-1 fs-6"><b>Obtained Mark</b> </div>
                
            </div>
            <div class="col-12 d-flex"> 
                <div class="col-6 border d-flex py-1 fw-medium"><p class="mb-0">Math</p> </div>
                <div class="col-3 border d-flex py-1 fw-medium"><p class="mb-0">100</p> </div>
                <div class="col-3 border d-flex py-1 fw-medium"><p class="mb-0" id="matho"></p> </div>
            </div>
            <div class="col-12 d-flex"> 
                <div class="col-6 border d-flex py-1 fw-medium"><p class="mb-0">Hindi</p> </div>
                <div class="col-3 border d-flex py-1 fw-medium"><p class="mb-0">100</p> </div>
                <div class="col-3 border d-flex py-1 fw-medium"><p class="mb-0" id="hindio"></p> </div>
            </div>
            <div class="col-12 d-flex"> 
                <div class="col-6 border d-flex py-1 fw-medium"><p class="mb-0">English</p> </div>
                <div class="col-3 border d-flex py-1 fw-medium"><p class="mb-0">100</p> </div>
                <div class="col-3 border d-flex py-1 fw-medium"><p class="mb-0" id="englisho"></p> </div>
            </div>
            <div class="col-12 d-flex"> 
                <div class="col-6 border d-flex py-1 fw-medium"><p class="mb-0">Science</p> </div>
                <div class="col-3 border d-flex py-1 fw-medium"><p class="mb-0">100</p> </div>
                <div class="col-3 border d-flex py-1 fw-medium"><p class="mb-0" id="scienceo"></p> </div>
            </div>
            <div class="col-12 d-flex"> 
                <div class="col-6 border d-flex py-1 fw-medium"><p class="mb-0">Social Science</p> </div>
                <div class="col-3 border d-flex py-1 fw-medium"><p class="mb-0">100</p> </div>
                <div class="col-3 border d-flex py-1 fw-medium"><p class="mb-0" id="sso"></p> </div>
            </div>
            <div class="col-12 d-flex"> 
                <div class="col-6 border d-flex py-1 fw-medium"><p class="mb-0">Gujarati</p> </div>
                <div class="col-3 border d-flex py-1 fw-medium"><p class="mb-0">100</p> </div>
                <div class="col-3 border d-flex py-1 fw-medium"><p class="mb-0" id="gujo"></p> </div>
            </div>
            <div class="col-12 d-flex " style="background-color: rgba(220,53,69, 0.1);"> 
                <div class="col-6 border d-flex py-1 fw-bold"><p class="mb-0">Total</p> </div>
                <div class="col-3 border d-flex py-1 fw-bold"><p class="mb-0">600</p> </div>
                <div class="col-3 border d-flex py-1 fw-bold"><p class="mb-0" id="totalo"></p> </div>
            </div>
            <div class="col-12 d-flex">
                
                <div class="col-12 border d-flex py-3 d-flex justify-content-center"> </div>
                
            </div>
            <div class="col-12 d-flex" style="background-color: rgba(220,53,69, 0.1);">
                
                <div class="col-12 border d-flex py-1"> <b>Total Marks / Obtained Marks :</b><p class="mb-0 ps-1"> 600 / <span id="totaloo"></span></div>
                
            </div>
            <div class="col-12 d-flex" style="background-color: rgba(220,53,69, 0.1);">
                
                <div class="col-12 border d-flex py-1"> <b>Percentage :</b><p class="mb-0 ps-1 pe-1" id="pro"> </p>%</div>
                
            </div>
            <div class="col-12 d-flex" style="background-color: rgba(220,53,69, 0.1);">
                
                <div class="col-12 border d-flex py-1"> <b>Grade :</b><p class="mb-0 ps-1 pe-1" id="gro"> </p></div>
                
            </div>
            <div class="col-12 d-flex" style="background-color: rgba(220,53,69, 0.1);">
                
                <div class="col-12 border d-flex py-1"> <b>Result :</b><p class="mb-0 ps-1 pe-1" id="pof"> </p></div>
                
            </div>
        </div>`;
    



    var total = math + hindi + english + science + socialScience + gujarati;
    var pr = total /6;
    var bus = `<input type="button" value="Apply For Admission" class=" d-block  btn rounded-5 btn-danger py-2 px-3" onclick="return add()"/>`
    per = pr;
    document.getElementById("data").innerHTML = show;
    document.getElementById("matho").innerHTML= math;
    document.getElementById("hindio").innerHTML= hindi;
    document.getElementById("englisho").innerHTML= english;
    document.getElementById("scienceo").innerHTML= science;
    document.getElementById("sso").innerHTML= socialScience;
    document.getElementById("gujo").innerHTML= gujarati;
    document.getElementById("totalo").innerHTML= total;
    document.getElementById("totaloo").innerHTML= total;
    document.getElementById("pro").innerHTML= pr.toFixed(2);
    document.getElementById("bu").innerHTML = bus;

    


    if(pr >= 34.00){
        document.getElementById("pof").innerHTML= "Pass";
        if(pr >= 90.00){
            document.getElementById("gro").innerHTML= "A1";
        }else{
            if(pr >= 80.00 && pr < 90.00){
                document.getElementById("gro").innerHTML= "A2";
            }else{
                if(pr >= 70.00 && pr < 80.00){
                    document.getElementById("gro").innerHTML= "B1";
                }else{
                    if(pr >= 60.00 && pr < 70.00){
                        document.getElementById("gro").innerHTML= "B2";
                    }else{
                        if(pr >= 50.00 && pr < 60){
                            document.getElementById("gro").innerHTML= "C1";
                        }else{
                            if(pr >= 40.00 && pr < 50.00){
                                document.getElementById("gro").innerHTML= "C2";
                            }else{
                                if(pr >= 34.00 && pr < 40.00){
                                    document.getElementById("gro").innerHTML= "D";
                                }
                            }
                            
                        }
                    }
                }
            } 
        }
    }else{
        document.getElementById("gro").innerHTML= " --- ";
        document.getElementById("pof").innerHTML= "Fail";
    }
} else {
    document.getElementById("okj").innerHTML = "Please enter valid marks";
    document.getElementById("data").innerHTML = "";

}   


}



function add(){
    
    
    document.getElementById('data').innerHTML = " ";
    document.getElementById('hua').innerHTML = ` 
    <div class="col-12 text-start pt-3 pb-3 ps-5">
            <h3 class="text-center fw-bolder">
                Admission Process
            </h3>
            <p id="egio" class="pt-3 fw-bolder fs-5"></p>
            <p id="sgio" class=" fw-semibold fs-6"></p>
            <div  id="hi">
                <p class="pb-1 mb-0 fs-5 fw-bolder pt-3 pb-1">Enter Your Filed :</p>
                
                <select name="filed" id="swi" onchange="return swit()" class="px-4 py-2 fw-bolder fs-6">
                    <option value="-1">Select your Filed</option>
                    <option value="BCA">BCA</option>
                    <option value="B.COM">B.COM</option>
                    <option value="BBA">BBA</option>
                </select>
                <p id="kgio" class=" fw-semibold fs-6"></p>
            </div>
        </div>`;

    var egi = per;
    document.getElementById('egio').innerHTML = egi;

    if(75<per){
        document.getElementById('egio').innerHTML = "* You Are Eligible to Admission Goverment and Self-Finance College...";
    }else if(50<per){
        document.getElementById('egio').innerHTML = "* You Are Eligible to Admission Half-Goverment and Self-Finance College...";
    }else if(34<=per){
        document.getElementById('egio').innerHTML = "* You Are Eligible to Admission Self-Finance College...";
    }else{
        document.getElementById('egio').innerHTML = "* You Are Not Eligible For Admission..";
    }

    if(90<per){
        document.getElementById('sgio').innerHTML = "* You Are Eligible For NSP and MYSY and CBSE Scholarship ";
    }else if(80<per){
        document.getElementById('sgio').innerHTML = "* You Are Eligible For NSP and MYSY Scholarship ";
    }else if(70<per){
        document.getElementById('sgio').innerHTML = "* You Are Eligible For NSP Scholarship ";
    }else if(34<=per){
        document.getElementById('sgio').innerHTML = "* You Are Not Eligible For Any Scholarship ";
    }else{
        var hi = document.getElementById('hi');
        hi.style.display ='none';
        document.getElementById('sgio').innerHTML = " ";

    }

   
}

function swit(){
    var fill = document.getElementById('swi').value;

    if(100>=per && 34<=per){
        
        switch(fill.toUpperCase()){
            case 'BCA':
                document.getElementById('kgio').innerHTML = `
                <ul class="pt-2">
                    <li>
                        DSA
                    </li>
                    <li>
                        C Language
                    </li>
                    <li>
                        Data Structure
                    </li>
                    <li>
                        Mathematics
                    </li>
                </ul>`;
                break;
            
            case 'B.COM':
                document.getElementById('kgio').innerHTML = `
                <ul class="pt-2">
                    <li>
                        Banking
                    </li>
                    <li>
                        English
                    </li>
                    <li>
                        Business Administration
                    </li>
                    <li>
                        Accounting
                    </li>
                </ul>`;
                break;
            
                case 'BBA':
                    document.getElementById('kgio').innerHTML = `
                    <ul class="pt-2">
                        <li>
                            Management
                        </li>
                        <li>
                            Finance
                        </li>
                        <li>
                            Business Administration
                        </li>
                        <li>
                            Accounting
                        </li>
                    </ul>`;
                    break;

            default:
                document.getElementById('kgio').innerHTML = "Plz Enter Valid Filed";
                break;
        }
    }else{
        document.getElementById('kgio').innerHTML = " ";
    }
    
}


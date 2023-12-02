 function mark(){
            var show= `
                
                <div class="border ">
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
                        
                        <div class="col-12 border d-flex py-1"> <b>Grade :</b><p class="mb-0 ps-1" id="gro"></div>
                        
                    </div>
                </div>`;
            var math = parseInt(document.getElementById("mathi").value);
            var hindi = parseInt(document.getElementById("hindii").value);
            var english = parseInt(document.getElementById("englishi").value);
            var science = parseInt(document.getElementById("sciencei").value);
            var socialScience = parseInt(document.getElementById("ssi").value);
            var gujarati = parseInt(document.getElementById("guji").value);

            var total = math + hindi + english + science + socialScience + gujarati;
            var pr = total /6;
            document.getElementById("data").innerHTML = show;
            document.getElementById("matho").innerHTML= math;
            document.getElementById("hindio").innerHTML= hindi;
            document.getElementById("englisho").innerHTML= english;
            document.getElementById("scienceo").innerHTML= science;
            document.getElementById("sso").innerHTML= socialScience;
            document.getElementById("gujo").innerHTML= gujarati;
            document.getElementById("totalo").innerHTML= total;
            document.getElementById("totaloo").innerHTML= total;
            document.getElementById("pro").innerHTML= pr;

            if(pr > 100){
                document.getElementById("gro").innerHTML= "Plz Enter Valid Number";
            }else if(pr >90){
                document.getElementById("gro").innerHTML= "A1";
            }else if(pr >80){
                document.getElementById("gro").innerHTML= "A2";
            }else if(pr >70){
                document.getElementById("gro").innerHTML= "B1";
            }else if(pr >60){
                document.getElementById("gro").innerHTML= "B";
            }else if(pr >50){
                document.getElementById("gro").innerHTML= "C1";
            }else if(pr >40){
                document.getElementById("gro").innerHTML= "C";
            }else if(pr >34){
                document.getElementById("gro").innerHTML= "D";
            }else if(pr >=0){
                document.getElementById("gro").innerHTML= "Fail";
            }
        }

function maxi(){
    var a = parseInt(document.getElementById("pi1").value);
    var b = parseInt(document.getElementById("pi2").value);
    var c = parseInt(document.getElementById("pi3").value);
    var d = parseInt(document.getElementById("pi4").value);
    var e = parseInt(document.getElementById("pi5").value);
    var di1 = document.getElementById("pi1");
    var di2 = document.getElementById("pi2");
    var di3 = document.getElementById("pi3");
    var di4 = document.getElementById("pi4");
    var di5 = document.getElementById("pi5");
    di1.style.backgroundColor = "red";
    di1.style.fontSize = "15px";
    di1.style.fontWeight = "500";
    di2.style.backgroundColor = "red";
    di2.style.fontSize = "15px";
    di2.style.fontWeight = "500";
    di3.style.backgroundColor = "red";
    di3.style.fontSize = "15px";
    di3.style.fontWeight = "500";
    di4.style.backgroundColor = "red";
    di4.style.fontSize = "15px";
    di4.style.fontWeight = "500";
    di5.style.backgroundColor = "red";
    di5.style.fontSize = "15px";
    di5.style.fontWeight = "500";

    

    if(a>b){
        if(a>c){
            if(a>d){
                if(a>e){
                    var div = document.getElementById("pi1");
                    
                }else{
                    var div = document.getElementById("pi5");
                    
                }
            }else{
                if(d>e){
                    var div = document.getElementById("pi4");
                    
                }else{
                    var div = document.getElementById("pi5");
                    
                }
            }
        }else{
            if(c>d){
                if(c>e){
                    var div = document.getElementById("pi3");
                    
                }else{
                    var div = document.getElementById("pi5");
                    
                }
            }else{
                if(d>e){
                    var div = document.getElementById("pi4");
                    
                }else{
                    var div = document.getElementById("pi5");
                    
                }
            }
        }
    }else{
        if(b>c){
            if(b>d){
                if(b>e){
                    var div = document.getElementById("pi2");
                    
                }else{
                    var div = document.getElementById("pi5");
                    
                }
            }else{
                if(d>e){
                    var div = document.getElementById("pi4");
                    
                }else{
                    var div = document.getElementById("pi5");
                    
                }
            }
        }else{
            if(c>d){
                if(c>e){
                    var div = document.getElementById("pi3");
                    
                }else{
                    var div = document.getElementById("pi5");
                    
                }
            }else{
                if(d>e){
                    var div = document.getElementById("pi4");
                    
                }else{
                    var div = document.getElementById("pi5");
                    
                }
            }
        }
    }
    div.style.backgroundColor = "green";
    div.style.fontSize = "20px";
    div.style.fontWeight = "900";
}
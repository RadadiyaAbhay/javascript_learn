function passw(){

    var password = document.getElementById('pass').value;

    var a = password;

    
            if((a.length >= 4)&&(a[0]>='A' && a[0]<= 'Z') && (a[1]>='a' && a[1]<= 'z') &&(a[2]>=0 && a[2]<= 9)&& !((a[3]>='A' && a[3]<= 'Z') || (a[3]>='a' && a[3]<= 'z')|| (a[3]>=0 && a[3]<= 9))) {
                document.getElementById("su").innerHTML= "success";
            }else{
                document.getElementById("su").innerHTML= "error";
            };
            
        
   


};



for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    console.log(letter);
  }
  
      


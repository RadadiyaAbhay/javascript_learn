function pass(){
    var oldPassword = document.getElementById('oldp').value;
    var newPassword = document.getElementById('newp').value;
    var newRePassword = document.getElementById('newpr').value;

    var oldp = "Kumar59";
    

    if(oldPassword == oldp){
        if(newPassword==newRePassword){
            document.getElementById('pri').innerHTML="Your Password Successfully Changed";
        }else{
            document.getElementById('pri').innerHTML="Your New Password Not Match";
        }
    }else{
        document.getElementById('pri').innerHTML="Enter Valid Old Password";
    }

    
}
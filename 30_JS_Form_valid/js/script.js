const formVaildation = (name , email , pass ,cpass) => {
    var formobj ={
        name : name,
        email : email,
        password : pass,
        confirm_password : cpass
    }
    for (const key in formobj) {
    
        if(formobj[key] == ''){
            document.getElementById(key).innerHTML =`<span style="color:red;">${key} is required</span>`
        }else{
            document.getElementById(key).innerHTML =` `
        }
    }
    
    if(pass != cpass){
        document.getElementById('passCheak').innerHTML =`<span style="color:red;">Password And Confirm Password Different</span>`
    }else{
        document.getElementById('passCheak').innerHTML =``
    }
}
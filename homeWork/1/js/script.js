function remove(){
    var hf = document.querySelector('.hf');
    hf.style.display = "none";
}

var name1;
function sign_up(){
    name1 = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var dob1 = document.getElementById('dob').value;


    document.getElementById('username').innerHTML = name1 ;
    document.getElementById('password').innerHTML = dob1 ;
    return { name1: name1,dob1 : dob1 };
}

function sign_in(){
    var password2 = document.getElementById('password2').value;
    var username2 = document.getElementById('username2').value;

    var output = sign_up();
    var name1 = output.name1;
    var dob1 = output.dob1;

    document.getElementById('cheak').innerHTML = dob1 ;

    if(username2 ==name1 && password2==dob1){
        document.getElementById('out').innerHTML = "SuccessFully login" ;

    }else{
        document.getElementById('out').innerHTML = "Username or Password Not Match" ;
    }
}
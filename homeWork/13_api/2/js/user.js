var getData = () =>{
    var user = new XMLHttpRequest();

    
    user.open("GET" , 'https://dummyjson.com/users' , true)
    user.onreadystatechange = function (){

            var k = JSON.parse(this.responseText);
            var m = k.users;

            loginNow(m);
        }
        user.send();
}


var loginNow = (userData) =>{
    var print = document.getElementById('print');
    var paa = document.getElementById('pa');
    var user = document.getElementById('user') ;
    var pass = document.getElementById('pass') ;
    userData.forEach(users => {
        
        var pa = users;
        
        if(user.value == pa.username){
            if(pass.value == pa.password){
                print.innerHTML =  `<h5>Name :- ${pa.firstName}</h5>
                <h5>Age :- ${pa.age}</h5>
                <a href="${pa.userAgent}">
                <img src="${pa.image}" style="width:200px;">
                </a>
                `;
            }
        }else{
            paa.innerHTML = `<p>Pls Enter Vaild Password Or Username</p>`;
        }

    });
}
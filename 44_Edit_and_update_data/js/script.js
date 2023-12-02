var createData = () =>{

    var data ={
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        number : document.getElementById('number').value, 
        pass : document.getElementById('pass').value
    }

    localStorage.setItem('myData' , JSON.stringify(data));

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('pass').value = '';

}

var readData = () =>{
    var data = JSON.parse(localStorage.getItem('myData'));

    if(data != null){

        for (const key in data) {
            
            document.getElementById('pri').innerHTML += `${key} = ${data[key]}<br/>`;
        }
    }else{
        document.getElementById('pri').innerHTML = ` `;

    }
}

var updateData = () =>{

    var data = JSON.parse(localStorage.getItem('myData'));

    document.getElementById('name').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('number').value = data.number;
    document.getElementById('pass').value = data.pass;
}

var deleteData = () =>{
    localStorage.removeItem('myData');
}


var dataCreate = () => {
    var data = {
        name : document.getElementById('name').value, 
        moNumber : document.getElementById('conumber').value, 
        email : document.getElementById('email').value, 
        age : document.getElementById('age').value, 
        pass : document.getElementById('pass').value, 
    }

    localStorage.setItem('myData' , JSON.stringify(data));

    document.getElementById('name').value = '' 
    document.getElementById('conumber').value = '' 
    document.getElementById('email').value = ''
    document.getElementById('age').value = ''
    document.getElementById('pass').value = ''
}


var dataRead = () => {
    var data = JSON.parse(localStorage.getItem('myData'));

    console.log(data);
}

var dataUpdate = () =>{
    var data = JSON.parse(localStorage.getItem('myData'));


    document.getElementById('name').value = data.name
    document.getElementById('conumber').value = data.moNumber 
    document.getElementById('email').value = data.email
    document.getElementById('age').value = data.age
    document.getElementById('pass').value = data.pass

}

var dataRemove = () => {
    
    localStorage.removeItem('myData')
}
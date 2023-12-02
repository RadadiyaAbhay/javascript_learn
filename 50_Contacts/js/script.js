var contacts = [];
var show = document.getElementById('show')

var getData = () =>{
    var cont = JSON.parse(localStorage.getItem('myCon'));
    if(cont != null){
        cont.forEach(element => {
            contacts.push(element);
        });
    }
}

getData();

var saveContact = () => {
    var name = document.getElementById('name').value ;
    var moNumber = document.getElementById('monumber').value ;
    show.innerHTML = ``;
    var con ={
        name : name,
        moNumber : moNumber
    }


    contacts.push(con);
    localStorage.setItem('myCon',JSON.stringify(contacts));

    contacts.forEach(element => {
        
        show.innerHTML += `
        <p>${element.name}</p>
        <p>${element.moNumber}</p>
        `
    });
}


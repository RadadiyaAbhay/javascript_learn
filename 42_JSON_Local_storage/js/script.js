var data = () =>{
    event.preventDefault();
    console.log('hi');
    let  photo = document.getElementById('file').files[0];
    var data = {
        id : document.getElementById('id').value,
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        age : document.getElementById('age').value,
        photo:`images/${photo.name}`
    }

    localStorage.setItem("mydata" ,JSON.stringify(data));
}


var p = document.getElementById('pri')

var getData = () =>{

    var http = new XMLHttpRequest();

    http.open("GET" , "https://jsonplaceholder.typicode.com/photos" , true);
    http.onreadystatechange = function() {
        var dataa = JSON.parse(this.responseText);

        dataa.forEach(k => {
            document.write(`<img src="${k.url}"/>`)
        });
        
    }
    http.send();
}


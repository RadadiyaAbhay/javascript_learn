var getData = () => {
    var http = new XMLHttpRequest();

    http.open("GET" , "https://jsonplaceholder.typicode.com/posts" , true)
    http.onreadystatechange = function (){
        var data = this.responseText;
        try {
            var dataa = JSON.parse(data);
        } catch (error) {
            console.log("hii");
        }
       
        localStorage.setItem('data' , JSON.stringify(dataa))
    }
    http.send();
}

getData();

var pri = document.getElementById('pri');
var printData = () => {
    var dataPrint = JSON.parse(localStorage.getItem('data'));
    
    
    dataPrint.forEach(prod => {
        for (const key in prod) {
            pri.innerHTML +=`${key} = ${prod[key]}<br>`
        }
    });
}


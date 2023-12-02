var details =[

]


var table = document.getElementById('ProductDetail');

var setData = () =>{

    var heading = document.getElementById('head').value;
    var price = document.getElementById('price').value;
    var dis = document.getElementById('dis').value;
    var url = document.getElementById('url').value;

    details.push({
        head : heading ,
        price : price ,
        dis : dis,
        url : url
    });

    // console.log(details);
    localStorage.setItem('ProDet',JSON.stringify(details));

    getData();
}


var getData =() =>{

    var getdata =JSON.parse(localStorage.getItem('ProDet'));
    console.log(getdata);

    
    for (const pro of getdata) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        

        for (const det in pro) {
            console.log( det,"=", pro[det]);
            var td = document.createElement('td');
            td.textContent = pro[det];
            tr.appendChild(td);



        }
    }
}
getData();
var kai =()=>{
    var getdata =JSON.parse(localStorage.getItem('ProDet'));
    console.log(getdata);

    for (const pro of getdata) {     
        details.push(pro);
    }
}

kai();

var removeData = () =>{
    localStorage.removeItem("ProDet");
}
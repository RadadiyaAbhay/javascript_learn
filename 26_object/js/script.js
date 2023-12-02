

let product1 = {
    name : "Redmi 5i",
    bprice : 30000,
    discount : 5,
    aprice : 28500
}

let product2 = {
    name : "Redmi M23",
    bprice : 40000,
    discount : 5,
    aprice : 38000
}

document.getElementById('proname').innerHTML = product1.name;
document.getElementById('bprice').innerHTML = "₹ " +product1.bprice;
document.getElementById('dis').innerHTML = product1.discount + " %";
document.getElementById('aprice').innerHTML = "₹ " +product1.aprice;



function addPro(){
    document.getElementById('inputpro').innerHTML = `
        <input type="text" placeholder='Enter Product Name' id="iname"/>
        <input type="text" placeholder='Enter Product Before Price' id="ibprice"/>
        <input type="text" placeholder='Enter Product Discout' id="idis"/>
        <input type="text" placeholder='Enter Product After Price' id="iaprice"/>
        <input type="button" value="Submit" onclick="return addDetails()"/>
    `
 
}

function addDetails(){
    var pname = document.getElementById('iname').value;
    var bname = document.getElementById('ibprice').value;
    var dis = document.getElementById('idis').value;
    var aname = document.getElementById('iaprice').value;
    
    let product3 ={
        name : pname,
        bprice : bname,
        discount : dis,
        aprice : aname
    }
    
    document.getElementById('proname').innerHTML += product3.name;
    document.getElementById('bprice').innerHTML += "₹ " +product3.bprice;
    document.getElementById('dis').innerHTML += product3.discount + " %";
    document.getElementById('aprice').innerHTML += "₹ " +product3.aprice;
    document.getElementById('inputpro').innerHTML = " ";
}
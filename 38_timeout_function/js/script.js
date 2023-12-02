var jadu = document.getElementById('koiMilGaya');

setTimeout(() => {
    jadu.style.display = 'block';
}, 1000);
setTimeout(() => {
    jadu.style.display = 'none';
}, 3000);

var cout =0;
var name8 = ['abhay' , 'ram', 'sohan' , 'mohan' ,'laxman']
var koi = setInterval(() => {
    document.getElementById('name7').innerHTML = name8[cout];
    cout++;
    if(cout == 5){
        clearInterval(koi);
    }
}, 2000);
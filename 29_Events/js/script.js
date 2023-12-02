let pal = document.querySelector('.para');

pal.addEventListener('click' ,function(){
    console.log('dea');
})



function app() {
    
    const a = document.createElement('li');
    const b = document.createTextNode('Milk');
    a.appendChild(b);
    
    document.getElementById('cw').appendChild(a);
}
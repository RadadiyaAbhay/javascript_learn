
var snake = () =>{
    var show = document.getElementById('show')
    var j = -9
    for (let i = 100; i > 0; i--) {
            if(i>80 && i<91){
                show.innerHTML +=`
                <div class="di1"  id="box${j+80}"></div>`
            }else if(i>60 && i<71){
                show.innerHTML +=`
                <div class="di1"  id="box${j+40}"></div>`
            }else if(i>40 && i<51){
                show.innerHTML +=`
                <div class="di1"  id="box${j}"></div>`
            }else if(i>20 && i<31){
                show.innerHTML +=`
                <div class="di1"  id="box${j-40}"></div>`
            }else if(i>0 && i<11){
                show.innerHTML +=`
                <div class="di1"  id="box${j-80}"></div>`
            }
            
        else{
            show.innerHTML +=`
            <div class="di1"  id="box${i}"></div>`
        }
        j++;
    }
}
snake();


var co = 0;
function user() {
    var num = Math.random()

    var k = Math.floor(num*10);
    if(k > 0 && k < 7){
        console.log(k);
        if(co == 0){
            play(k);
            co = 1 ;
            console.log(0);
        }else{
            play2(k);
            co = 0;
            console.log(1)

        }
    }else{
        user();
    }
    
}

var play1 = 1; 
var play0 = 1; 
document.getElementById(`box${play1}`).innerHTML = `<div class="border border-5 rounded-circle wii border-danger bg-danger"></div><div class="border border-5 rounded-circle wii border-success bg-success"></div>`

function play(a) {
    
    document.getElementById(`box${play1}`).innerHTML = ``
    play1 += a;
    if(play1 == play0){
        document.getElementById(`box${play1}`).innerHTML = `<div class="border border-5 rounded-circle wii border-danger bg-danger"></div><div class="border border-5 rounded-circle wii border-success bg-success"></div>`
    }else if(play1 <= 100){
        document.getElementById(`box${play1}`).innerHTML = `<div class="border border-5 rounded-circle wii border-danger bg-danger"></div>`
    }else {
        play1 -= a;
        document.getElementById(`box${play1}`).innerHTML = `<div class="border border-5 rounded-circle wii border-danger bg-danger"></div>`
    }
    if(play1 == 4){
        document.getElementById(`box${play1}`).innerHTML = ``
        play1 = 14;
        play(0);
    }
    if(play1 == 9){
        document.getElementById(`box${play1}`).innerHTML = ``
        play1 = 31;
        play(0);
    }
    if(play1 == 18){
        document.getElementById(`box${play1}`).innerHTML = ``
        play1 = 45;
        play(0);
    }
    if(play1 == 21){
        document.getElementById(`box${play1}`).innerHTML = ``
        play1 = 42;
        play(0);
    }
    if(play1 == 28){
        document.getElementById(`box${play1}`).innerHTML = ``
        play1 = 84;
        play(0);
    }
    if(play1 == 51){
        document.getElementById(`box${play1}`).innerHTML = ``
        play1 = 67;
        play(0);
    }
    if(play1 == 78){
        document.getElementById(`box${play1}`).innerHTML = ``
        play1 = 97;
        play(0);
    }
    if(play1 == 71){
        document.getElementById(`box${play1}`).innerHTML = ``
        play1 = 91;
        play0(0);
    }
}
function play2(a) {
    document.getElementById(`box${play0}`).innerHTML = ``;
    play0 += a;
    if(play1 == play0){
        document.getElementById(`box${play0}`).innerHTML = `<div class="border border-5 rounded-circle wii border-danger bg-danger"></div><div class="border border-5 rounded-circle wii border-success bg-success"></div>`
    }else if(play0 <= 100){
        document.getElementById(`box${play0}`).innerHTML = `<div class="border border-5 rounded-circle wii border-success bg-success"></div>`
    }else{
        play0 -= a;
        document.getElementById(`box${play0}`).innerHTML = `<div class="border border-5 rounded-circle wii border-success bg-success"></div>`
    }

    if(play0 == 4){
        document.getElementById(`box${play0}`).innerHTML = ``
        play0 = 14;
        play2(0);
    }
    if(play0 == 9){
        document.getElementById(`box${play0}`).innerHTML = ``
        play0 = 31;
        play2(0);
    }
    if(play0 == 18){
        document.getElementById(`box${play0}`).innerHTML = ``
        play0 = 45;
        play2(0);
    }
    if(play0 == 21){
        document.getElementById(`box${play0}`).innerHTML = ``
        play0 = 42;
        play2(0);
    }
    if(play0 == 28){
        document.getElementById(`box${play0}`).innerHTML = ``
        play0 = 84;
        play2(0);
    }
    if(play0 == 51){
        document.getElementById(`box${play0}`).innerHTML = ``
        play0 = 67;
        play2(0);
    }
    if(play0 == 78){
        document.getElementById(`box${play0}`).innerHTML = ``
        play0 = 97;
        play2(0);
    }
    if(play0 == 71){
        document.getElementById(`box${play0}`).innerHTML = ``
        play0 = 91;
        play2(0);
    }
}
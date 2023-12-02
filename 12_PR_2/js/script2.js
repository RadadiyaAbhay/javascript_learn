

function season(){
    var useri = parseInt(document.getElementById('in').value);

    switch(useri){

        case 1:
        case 2:
        case 3:
        case 4:
            document.getElementById('out').innerHTML="Winter";
            var hi = document.getElementById('im');
            hi.style.backgroundImage = "url('./img/3.jpg')";
            
            break;

        case 5:
        case 6:
        case 7:
        case 8:
            document.getElementById('out').innerHTML="Summer";
            var hi = document.getElementById('im');
            hi.style.backgroundImage = "url('./img/2.jpg')";
            break;
        
        case 9:
        case 10:   
        case 11:
        case 12:
            document.getElementById('out').innerHTML="Monsoon";
            var hi = document.getElementById('im');
            hi.style.backgroundImage = "url('./img/1.jpg')";
            break;
        
        default:
            document.getElementById('out').innerHTML="Enter Vaild Month"
            var hi = document.getElementById('im');
            hi.style.backgroundImage = "url('./img/3.jp')";
            break
    }
}
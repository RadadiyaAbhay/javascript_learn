console.log('hi');
function imgInputq(){
    var img = document.getElementById('imgInput').files[0];
    console.log(img);
     document.getElementById('imgPrint').innerHTML =`<img src="images/${img.name}" alt="">`;
}
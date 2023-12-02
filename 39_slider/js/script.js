var slider = `<div class="slide">
<img src="images/img1.jpeg" alt="1">
</div>
<div class="slide">
<img src="images/img2.jpg" alt="2">
</div>
<div class="slide">
<img src="images/img3.jpeg" alt="3">
</div>`;


var count=0;

setInterval(() => {
    var slides = document.querySelectorAll('.slide');
    count++;
        slides.forEach(slide => { 
            slide.style.transform =`translateX(-${count*100}%)`;
        });
        if(count == slides.length){
            count=0;
            document.getElementById('add').innerHTML = `${slider}`;
        }

        
    }, 2000);


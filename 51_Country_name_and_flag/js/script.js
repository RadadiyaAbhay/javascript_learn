var url = 'https://restcountries.com/v3.1/all?fields=name,flags'


var show =document.getElementById('show');


fetch(url).then((res)=>{
    return res.json();
}).then((resn)=>{
    console.log(resn)
    // console.log(resn[key].flags);

    for (const key in resn) {
    
    show.innerHTML += `
    <div class="col-3 border border-2 p-2 border-dark">
        <img src="${resn[key].flags.png}" alt="" class="img-fluid mx-auto d-block" style="height:200px;">
        <h4 class="text-center m-0 pt-1 fw-bolder">${resn[key].name.common}</h4>
    </div>
    `
    }
}).catch((err) =>{
    console.log(err)
})
let opt =document.getElementById('opt');
let pri =document.getElementById('pri');
var getData = () =>{
    var sd = fetch("https://dog.ceo/api/breeds/list/all").then((res)=>{
        return res.json();
    })
    .catch((err)=>{
        console.log(err);
    })
    return sd;
}
var pr = getData();

pr.then((resn)=>{
console.log(resn.message);
for (const key in resn.message) {
    // opt.innerHTML += `<option value="${key}" >${key}</option>`
    opt.innerHTML += `<button type="button" onclick="return showDataRandom('${key}') " class="border border-0 d-block bg-transparent">${key}</button>`
}
}).catch((err)=>{
    console.log(err);
});

var showData = (name) =>{
    pri.innerHTML = ``;
    fetch(`https://dog.ceo/api/breed/${name}/images`).then((r)=>{
        return r.json();
    }).then((rn)=>{
        rn.message.forEach(element => {
        pri.innerHTML += `<img src="${element}" class="img-fluid col-12 mb-2"/>`
        });
    }).catch((e)=>{
        console.log(e);
    })
}

var showDataRandom = (name) =>{
    console.log(name);
    pri.innerHTML = ``;
    fetch(`https://dog.ceo/api/breed/${name}/images/random`).then((r)=>{
        return r.json();
    }).then((rn)=>{
        setTimeout(()=>{
            pri.innerHTML = `<img src="${rn.message}" class="img-thumbnail col-12"/>`
            pri.innerHTML += `<button type="button" onclick="showData('${name}')" class="btn btn-secondary d-block mt-2" >Show More</button>`
        },1000)
    }).catch((e)=>{
        console.log(e);
    })
}
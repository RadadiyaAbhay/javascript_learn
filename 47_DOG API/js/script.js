
fetch("https://dog.ceo/api/breeds/image/random").then((res)=>{
    console.log(res.json().then((data)=>{
        document.write(`<img src="${data.message}">`);
    }).catch((err)=>{
        console.log(err);
    }));
}
).catch((err)=>{
    console.log(err);
})
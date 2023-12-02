const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2fc80ef196mshcfe5b3ec063f087p1a78a8jsn5c6b5ed13fa7',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

var show = document.getElementById('show')

fetch(url,options).then((res)=>{
    return res.json();
}).then((resn)=>{
    for (const key in resn) {
        console.log(resn[key].id);
        show.innerHTML += `<div>
        <h4>${resn[key].name}</h4>
        <p>${resn[key].chapter_summary_hindi}</p>
        <p>${resn[key].chapter_summary}</p>
        <button onclick="getData(${resn[key].id})">Submit</button>
        </div>`
    
    }
}).catch((err) =>{
    console.log(err);
})




var getData = (num) => {



const url1 = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${num}/verses/`;
const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2fc80ef196mshcfe5b3ec063f087p1a78a8jsn5c6b5ed13fa7',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};



fetch(url1,options1).then((res1)=>{
    return res1.json();
}).then((resn1)=>{
    console.log(resn1);
}).catch((err) =>{
    console.log(err);
})

}
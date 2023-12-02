const url = 'https://sportscore1.p.rapidapi.com/sports';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c926266bc7mshceb106e0f692c72p15a76ajsn4f3d229973eb',
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};

var select = document.getElementById('select');
var prin = document.getElementById('prin');

fetch(url,options).then((res) =>{
    return res.json();
}).then((resn)=>{
    console.log(resn.data);
    resn.data.forEach(element => {
        select.innerHTML += `<option value="${element.name}">${element.name}</option> `
    });
}).catch((err)=>{
    console.log(err);
})

var getData = () =>{
    prin.innerHTML = ` `;

    var n = select.value;
    fetch(url,options).then((resa) =>{
        return resa.json();
    }).then((resna)=>{
        console.log(resna.data);
        resna.data.forEach(element => {
            if(element.name == n){
                
                prin.innerHTML = `<h4>${n}</h4>`
                for (const key in element.name_translations) {
                        prin.innerHTML += `<h5>${key} = ${element.name_translations[key]}</h5>`
                        
                }
            }
        });
    }).catch((err)=>{
        console.log(err);
    })
}
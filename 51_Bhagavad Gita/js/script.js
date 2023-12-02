const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2fc80ef196mshcfe5b3ec063f087p1a78a8jsn5c6b5ed13fa7',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

    var show = document.getElementById('show')
    var bu = document.getElementById('bu')
    var but = document.getElementById('but')

var hindi = () =>{
    bu.style.backgroundColor = 'white'
    but.style.backgroundColor = 'black'
    but.style.color = 'white'
    bu.style.color = 'black'

    

    show.innerHTML = ` `;
    fetch(url,options).then((res)=> {
        return res.json();
    }).then((resn) =>{

        show.innerHTML +=  `
        <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            ${resn[0].chapter_number}.    ${resn[0].name}
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>अध्याय का सारांश : </strong><br> ${resn[0].chapter_summary_hindi}
          </div>
        </div>
        </div>
        `
        for (let i = 1; i < resn.length; i++) {
            
            show.innerHTML += `
            <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
              ${resn[i].chapter_number}.    ${resn[i].name}
              </button>
            </h2>
            <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <strong>अध्याय का सारांश : </strong><br> ${resn[i].chapter_summary_hindi}
              </div>
            </div>
          </div>        
            `
        };
    
    
    }).catch((err)=>{
        console.log(err);
    })
}

var english = () =>{
    bu.style.backgroundColor = 'black'
    but.style.backgroundColor = 'white'
    but.style.color = 'black'
    bu.style.color = 'white'

    show.innerHTML = ` `;
    fetch(url,options).then((res)=> {
        return res.json();
    }).then((resn) =>{

        show.innerHTML +=  `
        <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            ${resn[0].chapter_number}.    ${resn[0].name_translated}
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>Chapter Summary : </strong><br> ${resn[0].chapter_summary}
          </div>
        </div>
        </div>
        `
        for (let i = 1; i < resn.length; i++) {
            
            show.innerHTML += `
            <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
              ${resn[i].chapter_number}.    ${resn[i].name_translated}
              </button>
            </h2>
            <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <strong>Chapter Summary : </strong><br> ${resn[i].chapter_summary}
              </div>
            </div>
          </div>        
            `
        };
    
    
    }).catch((err)=>{
        console.log(err);
    })
}

hindi();
const url = 'https://os-sports-perform.p.rapidapi.com/v1/teams/statistics/result?team_id=44&season_id=37036&unique_tournament_id=17';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '010d80a126mshb07db5e8caf19dep1666eajsncdc9916408e3',
		'X-RapidAPI-Host': 'os-sports-perform.p.rapidapi.com'
	}
};

fetch(url,options).then((res)=>{
    return res.json();

}).then((resn)=>{
    // console.log(resn.data);

    for (const key in resn.data) {
        document.write( key + ' = ' + resn.data[key] + ' <br> ');
    }
}).catch((err)=>{
    console.log(err);
});
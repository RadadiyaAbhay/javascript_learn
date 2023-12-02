const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=All';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c8b81e30bemshcbd61c5e18a1e9cp114052jsnecd335cd0b9b',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

fetch(url, options).then((res) =>
    res.json()
).then((data) =>

   data.d.forEach(element => {
    console.log(element.i);
    var k = element.l ;
    document.getElementById('movie').innerHTML += `<p>${k}<p> `
   })
).catch((err) => {
    console.log(err)
})


const url = "https://api.openweathermap.org/data/2.5/weather?q="
const api_Key = "e4fe2573d4b3261dbee77a28382cc43d"




var search = () => {
    var city = document.getElementById('city');
    var show = document.getElementById('dataPrint');
    show.innerHTML = ``
    const cityName = city.value;

    fetch(`${url}${cityName}&appid=${api_Key}`).then((res)=>{
        return res.json();
    }).then((data)=>{

        if(data.cod != 404){
            show.innerHTML = `
            <div class="d-flex"> 
            <img src ="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"  style="width:80px;">
            <p class="ps-3 pt-2" style="font-size: 50px;">${((data.main.temp-32)*5/9).toFixed(0)}<pre class="pt-4">°C</pre> </p>
            <p class="ps-3 pt-2 " style="font-size: 50px;">| ${(data.main.temp).toFixed(0)}<pre class="pt-4">°F</pre> </p>
            <div class="pt-4 ps-5">
                <p class="m-0">Temp Max : ${(data.main.temp_max).toFixed(0)}°F</p>
                <p class="m-0">Temp Min : ${(data.main.temp_min).toFixed(0)}°F</p>
            </div>
            <div class="pt-4 ps-5">
                
                <p class="m-0 fw-bolder">${data.name} | ${data.sys.country}</p>                                
                <p class="m-0">${data.weather[0].description}</p>                                
            </div>
            </div>
            <div class="d-flex justify-content-around">
                <div>
                <p class="m-0 fs-4 text-danger fw-bolder">Details</p>
                <p class="m-0">Lat : ${data.coord.lat}</p>
                <p class="m-0">Lon : ${data.coord.lon}</p>
                <p class="m-0">Sunset : ${data.sys.sunset}</p>
                <p class="m-0">Sunrise : ${data.sys.sunrise}</p>
                <p class="m-0">Visibility :${data.visibility}</p>
                <p class="m-0">Timezone : ${data.timezone}</p>
                </div>
            <div class="ps-5">
                <p class="m-0 fs-4 text-danger fw-bolder">Precipitation</p>
                <p class="m-0">Humidity : ${data.main.humidity}</p>
                <p class="m-0">Pressure : ${data.main.pressure}</p>
                <p class="m-0">Feels like : ${data.main.feels_like}</p>
                <p class="m-0">Grnd level : ${data.main.grnd_level}</p>
                <p class="m-0">Sea level : ${data.main.sea_level}</p>
    
            </div>
            <div class="ps-5">
                <p class="m-0 fs-4 text-danger fw-bolder">Wind</p>
                <p class="m-0">Deg : ${data.wind.deg}</p>
                <p class="m-0">Gust : ${data.wind.gust}</p>
                <p class="m-0">Speed : ${data.wind.speed}</p>
            </div>
            </div>
            `
        }else{
        show.innerHTML = `
            <h1 class="text-center">City Not Found</h1>
        `
        }


    }).catch((err)=>{
        console.log(err);
    });
}
var state = {
    AN : 'Andaman & Nicobar',
    AP : 'Andhra Pradesh',
    AR : 'Arunachal Pradesh',
    AS : 'Assam',
    BR : 'Bihar',
    CH : 'Chandigarh',
    CT : 'Chhattisgarh',
    DL : 'Delhi',
    DN : 'Dadra & Nagar Haveli',
    GA : 'Goa',
    GJ : 'Gujarat',
    HP : 'Himachal Pradesh',
    HR : 'Haryana',
    JH : 'Jharkhand',
    JK : 'Jammu & Kashmir',
    KA : 'Karnataka',
    KL : 'Kerala',
    LA : 'Ladakh',
    LD : 'Lakshadweep',
    MH : 'Maharashtra',
    ML : 'Meghalaya',
    MN : 'Manipur',
    MP : 'Madhya Pradesh',
    MZ : 'Mizoram',
    NL : 'Nagaland',
    OR : 'Odisha',
    PB : 'Punjab',
    PY : 'Puducherry',
    RJ : 'Rajasthan',
    SK : 'Sikkim',
    TG : 'Telangana',
    TN : 'Tamil Nadu',
    TR : 'Tripura',
    TT : 'Total',
    UP : 'Uttar Pradesh',
    UT : 'Uttarakhand',
    WB : 'West Bengal',
}


const url = 'https://data.covid19india.org/v4/min/data.min.json'
var prin = document.getElementById('prin');

    fetch(url).then((res) =>{
        return res.json();
    }).then((resn) =>{
        console.log(resn);

        for (const key in resn) {   
            for (const keys in state) {
                if(key == keys){
                prin.innerHTML += `
                    <div class="col-12 ko p-0  d-flex">
                        <div class="col-3 border border-2 py-2 text-center fs-6 fw-normal">${state[keys]}</div>
                        <div class="col-1 border border-2 py-2 text-center fs-6 fw-normal">${resn[key].total.tested}</div>
                        <div class="col-1 border border-2 py-2 text-center fs-6 fw-normal">${resn[key].total.confirmed}</div>
                        <div class="col-1 border border-2 py-2 text-center fs-6 fw-normal">${resn[key].total.deceased}</div>
                        <div class="col-2 border border-2 py-2 text-center fs-6 fw-normal">${resn[key].total.recovered}</div>
                        <div class="col-2 border border-2 py-2 text-center fs-6 fw-normal">${resn[key].total.vaccinated1}</div>
                        <div class="col-2 border border-2 py-2 text-center fs-6 fw-normal">${resn[key].total.vaccinated2}</div>
                    </div>
                    `
                }
            }
    }
    }).catch((err) =>{
        console.log(err);
    })


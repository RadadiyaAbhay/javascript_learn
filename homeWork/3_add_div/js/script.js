function addDiv(){

    for(i=1 ; i<=32 ; i++){
        var a =document.getElementById('name').value;

        document.getElementById('out').innerHTML += `<div style="height: 100px;font-size:20px;color:white; font-weight:900; width: 100px; background-color: brown; padding: 20px; margin: 20px; border: 3px solid black;">${a}</div>
        `;
    }
}
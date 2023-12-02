
var i=1;
var users = [

]


function addDetails(){
    
    document.getElementById('userdetails').innerHTML = ' ';
    var k = document.getElementById('adduser');
    k.style.display= 'block';
    var id = document.getElementById('iid').value;
    var name = document.getElementById('iname').value;
    var number = document.getElementById('inumber').value;
    var email = document.getElementById('iemail').value;
    var course = document.getElementById('icourse').value;
    
    document.getElementById('iform').innerHTML = ` `;
    
    users.push({
        no : i++,
        id:id,
        name:name,
        number:number,
        email:email,
        course:course,
    })

    
    users.forEach(user => {
        
        

        document.getElementById('userdetails').innerHTML +=`
        <tr>
            <td>
                ${user.no}           
            </td>
            <td>
                ${user.id}           
            </td>
            <td>
                ${user.name}           
            </td>
            <td>
                ${user.number}           
            </td>
            <td>
                ${user.email}           
            </td>
            <td>
                ${user.course}           
            </td>
        </tr>
        `
    });
}

function addUser(){
    var k = document.getElementById('adduser');
    k.style.display= 'none';
    document.getElementById('iform').innerHTML = `
    <div>    
        <input type="text" id="iid"/>
        <input type="text" id="iname"/>
        <input type="text" id="inumber"/>
        <input type="text" id="iemail"/>
        <input type="text" id="icourse"/>
        <input type="button" value="Submit" onclick="return addDetails()">
    </div>
    `
}






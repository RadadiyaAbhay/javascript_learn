var stu =[
    {
        name : 'Abhay',
        surname : 'Radadiya',
        number : '63552 78345',
        course : 'Full Stack Developer'
    },
    {
        name : 'Vaibhav',
        surname : 'Radadiya',
        number : '43552 78793',
        course : 'Web Developer'
    },
    {
        name : 'Abhay',
        surname : 'Radadiya',
        number : '63552 78345',
        course : 'Full Stack Developer'
    },
    {
        name : 'Abhay',
        surname : 'Radadiya',
        number : '63552 78345',
        course : 'Full Stack Developer'
    }
]

var section = document.createElement('section');
document.body.appendChild(section);




stu.forEach((det) =>{
    
    for (const key in det) {
        var div = document.createElement('div');
        div.textContent = `${key} = ${det[key]}`;
        section.appendChild(div);
    }

})
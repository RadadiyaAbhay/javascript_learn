var stu =[
    {
        name : 'Abhay',
        surname : 'Radadiya',
        email :'abhay@gmail.com',
    },
    {
        name : 'Vaibhav',
        surname : 'Radadiya',
        email :'vaibhav@gmail.com',
    }
]
    stu.push({
            name : 'Varsha',
            surname : 'Radadiya',
            email :'varsha@gmail.com',
    });
    

stu.forEach(element => {
    for (const stuObj in element) {
        console.log(stuObj, '=', element[stuObj]);
    }
});


class student {
    constructor(){
        console.log('Welcome Our Website');
    }
    age(age){
        if (age <=18) {
            console.log('Yot are not access this file');
        }else{
            if (age<=20) {
                console.log('Yot are access only 2 files');
            } else {
                function aa(){
                    console.log('Yot are access all file '+ age * 2);
                }
                aa();
            }
        }
    }
}
let stu2 = new student();
console.log(stu2.age(21));
console.log(stu2.age(25));
console.log(stu2.age(20));
console.log(stu2.age(18));

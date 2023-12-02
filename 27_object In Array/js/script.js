

var users = [
    {
        id : 1,
        name : "Abhay",
        Age : 18,
        email : "abhay592004@gmail.com",
        topics : ['HTML' , 'JS' ,'BT' , 'CSS']
    },

    {
        id : 2,
        name : "vaibhav",
        Age : 20,
        email : "vradadiya@gmail.com",
        topics : ['HTML' , 'JS' ,'BT' , 'CSS' , 'React']
    }
]

users.forEach((user) => {
    for(let a in user ){
        console.log(a," = ",user[a]);

        if(a === 'topics'){
           let pri = user[a].forEach((topic) => {
                    
               console.log(topic);
            });


        }
    }
});

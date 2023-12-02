var aafun = async() =>{
    var getEmp = new Promise((resolve , reject) =>{
        setTimeout(()=>{
            resolve('GetEmp Coming')
        },3000)
    })

    var setEmp = new Promise((resolve , reject) =>{
        setTimeout(()=>{
            resolve('SetEmp Coming'),
            reject('SetEmp not Coming')
        },1000)
    })

    var pri1 = await getEmp.then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });


    // this function in error print


    var pri2 = await setEmp.then((res)=>{
        console.log(re);
    }).catch((err)=>{
        console.log(err);
    });


}

aafun();
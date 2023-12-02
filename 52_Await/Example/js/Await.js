
const fun = async() =>{
    const getemp  = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" new of employees = 50")  
        },3000)
    })

    const sitemp = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("60 employees can seat..")
        }, 2000);
    })

    let emp = await getemp;
       console.log("seat employees");
   
    let sit =  await sitemp;
    console.log("my emplyee");

    setTimeout(() => {
       console.log("123"); 
    }, 2000);

    
    setTimeout(() => {
        console.log("456"); 
     }, 4000);

     
    setTimeout(() => {
        console.log("789"); 
     }, 1000);
 
}

fun();



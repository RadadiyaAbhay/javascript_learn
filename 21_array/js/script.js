function data(){
 var stu_data = [[1,'Abhay Radadiya','Fullstack Developer',6355237855,18],[2,'Vaibhav Radadiya','Game Developer',7777980633,20]]
    for(i=0 ; i<2 ;i++){
        document.getElementById('sr1').innerHTML =`<span>Sr No. = </span>${stu_data[i][0]} <br><span>Name = </span> ${stu_data[i][1]} <br><span>Occupation = </span> ${stu_data[i][2]}<br> <span>Contact No. = </span> ${stu_data[i][3]} <br> <span>Age = </span> ${stu_data[i][4]}`;
    }

    for(i=0 ; i<1 ;i++){
        document.getElementById('sr').innerHTML =`<span>Sr No. = </span>${stu_data[i][0]} <br><span>Name = </span> ${stu_data[i][1]} <br><span>Occupation = </span> ${stu_data[i][2]}<br> <span>Contact No. = </span> ${stu_data[i][3]} <br> <span>Age = </span> ${stu_data[i][4]}`;
    }
}

data();

function passChange(){
    
}


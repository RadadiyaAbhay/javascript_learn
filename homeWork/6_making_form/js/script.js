var formInput =  `
<div>
<label for="addTitle" class="fs-4 pb-2 fw-bolder">Select Your Question Type And Question Details</label><br/>
<label for="quetitle" class="pb-2" >Enter Your Question : </label><br/>
<input type="text" class="form-control" id="quetitle"><br/>
<select class="form-select"  id="questiontype" onchange="return optionValue()">
    <option selected value="-1">-- Select Your Question Type --</option>
    <option value="text">One line Ans</option>
    <option value="textarea">Descriptive Ans</option>
    <option value="radio">Any One Choice Ans</option>
    <option value="checkbox">Multiple Choice Ans</option>
    <option value="range">Range Ans</option>
    <option value="date">Date Ans</option>
    <option value="file">File Ans</option>
    <option value="color">Color Ans</option>
    <option value="time">Time Ans</option>
    <option value="password">Password Ans</option>
    <option value="email">Email Ans</option>
    <option value="number">Number Ans</option>
    </select><br/>
    </div>
    `;


function addTitle(){
    var title = document.getElementById('addTitle').value;
    document.getElementById('details').innerHTML = `
    <h2 class="text-center pb-3">${title}</h2>
    `
}

function addQuestion(){

    document.getElementById('showButton2').innerHTML = `
    `
    document.getElementById('show').innerHTML = formInput;
    document.getElementById('showButton').innerHTML = `
        <input type="button" value="Submit" onclick="return selectQuestion()">
    `
}

function selectQuestion(){
    var questionType = document.getElementById('questiontype').value;
    var questionLabel = document.getElementById('quetitle').value;
    try{
        var optionLable1 = document.getElementById('option1').value;
        var optionLable2 = document.getElementById('option2').value;
    }catch(err){
        console.log("error");
    }
    
    document.getElementById('show').innerHTML = ` `;
    document.getElementById('optionAdd').innerHTML=``;
    document.getElementById('optionAddbutton').innerHTML=``;
    document.getElementById('showButton').innerHTML = ``;
    
    if(questionType == 'textarea'){
        document.getElementById('details').innerHTML += `
        <label class="pb-2">${questionLabel}</label><br/>
        <textarea class="form-control" placeholder="Leave a comment here" style="height: 100px"></textarea>
        
        `
    }
    if(questionType == 'radio' || questionType == 'checkbox'){
        
        document.getElementById('details').innerHTML += `
        <label class="pb-2">${questionLabel}</label><br/>
        <input type="${questionType}" name="same" value="${optionLable1}"><label>${optionLable1}</label><br/>
        <input type="${questionType}"  name="same"  value="${optionLable2}"><label>${optionLable2}</label><br/>
        `
    }if(questionType != 'textarea' && questionType != 'radio' && questionType != 'checkbox'){
        
        document.getElementById('details').innerHTML += `
        <label class="pb-2">${questionLabel}</label><br/>
        <input type="${questionType}" class="form-control"  ><br/>
        `
    }

    document.getElementById('showButton2').innerHTML = `
        <input type="button" value="Submit" onclick="return addQuestion()">
    `

}

function optionValue(){
    var questionType = document.getElementById('questiontype').value;
  

    if(questionType == 'radio' || questionType == 'checkbox'){
        document.getElementById('optionAdd').innerHTML=`
        <label class="pb-2" >Enter Your option : </label><br/>
        <input type="text" class="form-control" id="option1" ><br/>
        <input type="text" class="form-control" id="option2" ><br/>
        `
        document.getElementById('optionAddbutton').innerHTML=`
        <input type="button" value="Add Option" onclick="return addOption()"><br/>
        `
    }
}

function addOption() {
    document.getElementById('optionAdd').innerHTML+=`
    <input type="text" class="form-control" id="option2" ><br/>`
}


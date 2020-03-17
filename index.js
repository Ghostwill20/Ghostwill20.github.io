// projects html //


//answers
 answers0 = "Augusta";
 answers1 = "26";
 answers2 = "Patriots";
 answers3 = "Ps4";
 answers4 = "Grovetown";
 answers5 = "Tampa";
//

//this is the function to check answers
function checkAnswers() {

    answers0 = document.getElementById("question0").value;
    answers1= document.getElementById("question1").value;
    answers2 = document.getElementById("question2").value;
    answers3 = document.getElementById("question3").value;
    answers4 = document.getElementById("question4").value;
    answers5 = document.getElementById("question5").value;

    if(answers0 === "Augusta"){
        alert("pass");
    }
    // want this to run if true works
    else if(answers0 !== "Augusta"){
    document.write("You Failed")}
    // want this to run if not true works

    if(answers1 === "26"){
        alert ("pass");
    }

    else if (answers1 !== "26"){
    document.write("You Failed")}
    
    if(answers2 === "Patriots"){
        alert("pass")
    }

    else if (answers2 !== "Patriots"){
    document.write("You Failed")}
   
    if( answers3 === "Ps4"){
        alert("pass")
    }
    
    else if ( answers3 !== "Ps4"){
    document.write("You Failed")}
    
    if(answers4 === "Grovetown"){
        alert("pass")
    }
   
    else if (answers4 !== "Grovetown"){
    document.write("You Failed")}

    if(answers5 === "Tampa"){
        alert("pass")
    }  
    
    else if (answers5 !== "Tampa");
  {  document.write("You Failed")
}
}









// these are refrences to my id on my html page// let Quiz = documentgetElementById('quiz')
 



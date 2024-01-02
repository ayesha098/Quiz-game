const ques=[{
    quest: "WWW stands for:",
        choices: ["World Worm Web", "World Wide Web", "World Word Web", "World Word Web"],
        cA: "World Wide Web",
        ans: false
}, {
    quest: "What does CPU stand for?",
    choices: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit", "Central Processing Unit"],
    cA: "Central Processing Unit",
    ans: false
}, {
    quest: "What does HTML stand for?",
    choices: ["Hyper Text Markup Language", "Hyper Transfer Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language"],    cA: "Central Processing Unit",
    cA: "Hyper Text Markup Language",
    ans: false
},{
quest: "What does URL stand for?",
choices: ["Universal Resource Locator", "Uniform Resource Link", "Universal Reference Link", "Uniform Resource Locator"],
cA: "Universal Resource Locator",
ans: false
},
{
    quest: "What is the main purpose of an operating system?",
    choices: ["Running applications", "Managing hardware resources", "Creating documents", "Playing games"],
    cA: "Managing hardware resources",
    ans: false
}
];

let i=0;

let score =0;
let quesarea = document.getElementById("area");

 let question = document.getElementById("ques");
 let choicelist= document.getElementById("multiple");
 let scoring = document.getElementById("score");
 let next = document.getElementById("next");
 let p = document.getElementById("p");
 let t = document.getElementById("title");
  function displaymultiple(){
    let cq = ques[i];
    cq.ans= true;
    question.innerHTML = cq.quest;
    choicelist.innerHTML =" ";
    cq.choices.forEach((value) => {
        const item = document.createElement("li");
        item.textContent = value;
        item.addEventListener("click", () => checkans(value, item));
        choicelist.appendChild(item);
    });
  };
  function checkans(ans, item){
    let cq = ques[i];
    
    if( ans == cq.cA)
    {
        item.style.backgroundColor ="green";
        item.style.color ="#fff"
        score +=5;
        scoring.textContent = score;
         
       
    }
    else if(ans !== cq.cA){
        item.style.backgroundColor ="red";
        item.style.color ="#fff"
    }
   
    i++;
   
    
  };
 function endGame(){
    question.innerHTML="";
    t.innerHTML= "Quiz Game Ended";
    choicelist.innerHTML =" ";
    scoring.innerHTML = score;
    next.style.display ="none";
    quesarea.style.border ="none";
    question.style.textAlign ="center";
    p.style.textAlign ="center";
   
   

 }
  next.addEventListener("click", ()=>{
   if(i< ques.length){
    displaymultiple();
    
   }
   else {
    endGame();
}
  });
  displaymultiple();
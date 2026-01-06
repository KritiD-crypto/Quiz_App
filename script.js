const quizData = [
    {
            question: "What does HTML stand for?",
            options: [
            "Hyper Text Markup Language",
            "Highr Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
  ],
  correct: 0
},
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style System",
            "Cascading Style Sheets",
            "Computer Style Syntax",
            "Colorful Style Sheets"
        ],
        correct: 1
    },

    {
        question: "Which HTML tag is used for JavaScript?",
        options: [
            "<javascript>",
            "<js>",
            "<script>",
            "<code>"
        ],
        correct: 2
    },

    {
        question: "Which property is used to change text color in CSS?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        correct: 2
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "All of the above"
        ],
        correct: 3
    }
]

// console.log(quizData[3].question);
// console.log(quizData[1].options[1]);
// console.log(quizData[3].correct);
let currentQues=0;

let flag=false;
let score=0;
let totalQuestions = quizData.length;
const options = document.querySelectorAll(".optionA");
const optionTexts = document.querySelectorAll(".optionA h3");
const para = document.querySelector(".para");
let bar= document.querySelector(".inner-bar");
const ans = document.querySelector(".options");
console.dir(ans.innerText);
ans.addEventListener("click", (event)=>{

    para.innerText = `Question ${currentQues + 1} of ${quizData.length}`;
    // document.querySelector(".optioinA");
    const option = event.target.closest(".optionA");
        if(!option){
            return;
        }

        if(flag){
            return;
        }

       options.forEach(opt => opt.classList.remove("selected"));

    
    option.classList.add("selected");

    const clicked= event.target.getAttribute("data-index");
    if(Number(clicked) === (quizData[currentQues].correct)){
        // console.log("correct");
        flag=true;
        score++;
        
        }
     
    flag=true;
    Object.assign(bar.style, {
    width: (currentQues + 1) / totalQuestions * 100 + "%",
    backgroundColor: "#22C55E"
    });

    // currentQues++;
});


const next = document.querySelector(".nextbtn");
const question = document.querySelector(".question h2");
const nxt = next.addEventListener("click",(event) =>{
   
    console.log("Button clicked");
    if(flag==false){
        alert("Please select an option!");
        return;
    }
    
 if(currentQues === quizData.length-1){
        question.innerText= `Your score is ${score} out of ${quizData.length}`;
        document.querySelector(".options").style.display = "none";
        document.querySelector(".mainbar").style.display = "none";
        next.style.display = "none";
        return;
 }

    currentQues++;
    flag=false;

 options.forEach(opt => opt.classList.remove("selected"));

    
    question.innerText= (quizData[currentQues].question);

    optionTexts[0].innerText = quizData[currentQues].options[0];
    optionTexts[1].innerText = quizData[currentQues].options[1];
    optionTexts[2].innerText = quizData[currentQues].options[2];
    optionTexts[3].innerText = quizData[currentQues].options[3];
   

    if(currentQues === quizData.length-1){
        next.innerText = "submit";
        console.log(score);
    }else{
        next.innerText = "Next";
    }
        
});

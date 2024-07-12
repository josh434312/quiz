const questions = [
  {
    question: "which is the largest animal in the world?",
    answers:  [
      {text: "shark", correct: false},
      {text: "Blue Whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: false},
      
    ]
  },
  {
    question: "which is the smallest country in the world?",
    answers:  [
      {text: "Vatican City", correct: true},
      {text: "Bhutan", correct: false},
      {text: "Nepal", correct: false},
      {text: "Shri Lanka", correct: false},
      
    ]
  },
  {
    question: "which is the largest desert in the world?",
    answers:  [
      {text: "Kalahari", correct: false},
      {text: "Gobi", correct: false},
      {text: "Sahara", correct: false},
      {text: "Antarctica", correct: true},
      
    ]
  },
  {
    question: "which is the smallest continent in the world?",
    answers:  [
      {text: "Asia", correct: false},
      {text: "Australia", correct: true},
      {text: "Arctic", correct: false},
      {text: "Africa", correct: false},
      
    ]
  },
  {
    question: "who won the 2006 world cup?",
    answers:  [
      {text: "Italy", correct: true},
      {text: "Argentina", correct: false},
      {text: "Germany", correct: false},
      {text: "Brazil", correct: false},
      
    ]
  },
  {
    question: "How many time zone are there in Russia?",
    answers:  [
      {text: "5", correct: false},
      {text: "11", correct: true},
      {text: "14", correct: false},
      {text: "9", correct: false},
      
    ]
  },
  {
    question: "what's the national animal of Australia?",
    answers:  [
      {text: "Lion", correct: false},
      {text: "Monkey", correct: false},
      {text: "Kangaroo", correct: true},
      {text: "Elephant", correct: false},
      
    ]
  },
  {
    question: "In what country was Elon Musk born?",
    answers:  [
      {text: "France", correct: false},
      {text: "United State", correct: false},
      {text: "Canada", correct: false},
      {text: "South Africa", correct: true},
      
    ]
  },
  {
    question: "What is acrophobia a fear of?",
    answers:  [
      {text: "Water", correct: false},
      {text: "Heights", correct: true},
      {text: "Dog", correct: false},
      {text: "Death", correct: false},
      
    ]
  },
  {
    question: "Who was the youngest British prime minister?",
    answers:  [
      {text: "William Pitt", correct: true},
      {text: "Rishi Sunak", correct: false},
      {text: "Boris Johnson", correct: false},
      {text: "David Cameron ", correct: false},
      
    ]
  },
  {
    question: " In what year was first iphone released?",
    answers:  [
      {text: "2007", correct: true},
      {text: "2005", correct: false},
      {text: "2015", correct: false},
      {text: "2012", correct: false},
      
    ]
  },
  {
    question: "What is the tallest mountain in Africa?",
    answers:  [
      {text: "Mount Kenya", correct: false},
      {text: "Mount Kilimanjaro", correct: true},
      {text: "Mount Everest", correct: false},
      {text: "Mount K2", correct: false},
      
    ]
  },
  {
    question: "Busiest Airpot in the world?",
    answers:  [
      {text: "Los Angeles International Airpot", correct: false},
      {text: "Paris Charles de Gaulle Airpot", correct:false},
      {text: "Shanghai Pudong International Airpot", correct: false},
      {text: "Dubai International Airpot", correct: true},
      
    ]
  },
  {
    question: "First social media site was born in what year?",
    answers:  [
      {text: "2000", correct: false},
      {text: "1997", correct: true},
      {text: "2005", correct: false},
      {text: "1990", correct: false},
      
    ]
  },
  {
    question: "Which country owns Telegram?",
    answers:  [
      {text: "Nigeria", correct: false},
      {text: "United state", correct: false},
      {text: "China", correct: false},
      {text: "Russia", correct: true},
      
    ]
  },
  {
    question: "What is the chemical symbol for Gold?",
    answers:  [
      {text: "Au", correct: true},
      {text: "Hg", correct: false},
      {text: "Tin", correct: false},
      {text: "Gld", correct: false},
      
    ]
  },
  {
    question: "Which planet is known as the 'Red Planet?'",
    answers:  [
      {text: "Venus", correct: false},
      {text: "Mars", correct: true},
      {text: "Jupiter", correct: false},
      {text: "Saturn", correct: false},
      
    ]
  },
  {
    question: "Who discover electricity?",
    answers:  [
      {text: "Isaac Newton", correct: false},
      {text: "Nicola Tesla", correct: false},
      {text: "Micheal Faraday", correct: false},
      {text: "Benjamin Franklin", correct: true},
      
    ]
  },
  {
    question: "What is the world's largest ocean?",
    answers:  [
      {text: "Atlantic Ocean", correct: false},
      {text: "Indian Ocean", correct: false},
      {text: "Pacific Ocean", correct: true},
      {text: "Southern Ocean", correct: false},
      
    ]
  },
  {
    question: "What language is spoken in Brazil?",
    answers:  [
      {text: "Spanish", correct: false},
      {text: "Portuguese", correct: true},
      {text: "English ", correct: false},
      {text: "French", correct: false},
      
    ]
  },
  
  {
    question: "What's is the main ingredient in humus?",
    answers:  [
      {text: "Potatoes", correct: false},
      {text: "Lentils", correct: false},
      {text: "Chickpeas ", correct: true},
      {text: "White beans", correct: false},
      
    ]
  },
  {
    question: "What does a barometer measure?",
    answers:  [
      {text: "Sound", correct: false},
      {text: "Light", correct: false},
      {text: "Atmospheric pressure", correct:true},
      {text: "Humidity", correct: false},
      
    ]
  },
  {
    question: "What is the highest-grossing film of all time?",
    answers:  [
      {text: "Stars Wars: The Force Awakens ", correct: false},
      {text: "Avengers: Endgame", correct: true},
      {text: "Titanic ", correct: false},
      {text: "Avatar", correct: false},
      
    ]
  },
  {
    question: "In what year was the internet created?",
    answers:  [
      {text: "1960s", correct: true},
      {text: "1970s", correct: false},
      {text: "1980s ", correct: false},
      {text: "1990s", correct: false},
      
    ]
  },
  {
    question: "What's the capital city of Canada?",
    answers:  [
      {text: "Vancouver", correct: false},
      {text: "Toronto", correct: false},
      {text: "Quebec City ", correct: false},
      {text: "Ottawa", correct: true},
      
    ]
  },
  {
    question: "What is the loudest animak on Earth?",
    answers:  [
      {text: "Elephant", correct: false},
      {text: "Lion", correct:false},
      {text: "Blue Whale", correct: false},
      {text: "Sperm Whale", correct: true},
      
    ]
  },
  {
    question: "What is a group of crows called?",
    answers:  [
      {text: "A pack", correct: false},
      {text: "A flock", correct: false},
      {text: "A murder ", correct: true},
      {text: "A caw", correct: false},
      
    ]
  },
  {
    question: "What does DNA stand for?",
    answers:  [
      {text: "Deoxyribose Nitrogen Acid", correct: false},
      {text: "Deoxyribonucleic Acid", correct: true},
      {text: "Deoxyribonicle Acid ", correct: false},
      {text: "Deoxidized Numeric Acid", correct: false},
      
    ]
  },
  {
    question: "How many legs does a spider ussually have?",
    answers:  [
      {text: "Four", correct: false},
      {text: "Six", correct: false},
      {text: "Eight", correct: true},
      {text: "Ten", correct: false},
      
    ]
  },
  {
    question: "Who is the AMVCA 2024 winner?",
    answers:  [
      {text: "Funke Akindele", correct: false},
      {text: "Kehinde Bankole", correct: true},
      {text: "Genoveva Umeh ", correct: false},
      {text: "Bobrisky", correct: false},
      
    ]
  },
 
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
   ShowQuestion();
   
}

function ShowQuestion(){
  resetState()
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);

  });
     
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true"
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

 function handleNextButton(){
   currentQuestionIndex++;
   if(currentQuestionIndex < questions.length){
     ShowQuestion();
    }else{
      showScore();
    }
 }

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})
startQuiz();

// use setTimeout to go to next question
// set answer to wrong
// currentQuestionIndex++;

setInterval(() => {
  
 
  if(currentQuestionIndex < questions.length){
     handleNextButton();
  }else{
    startQuiz();
  }
},15000);


/* Questions for the quiz */
const quizData = [
    {
      question: "Leonardo Dicaprio won an Oscar for which movie?",
      options: ["Titanic", "Catch me if you can", "The Revenant", "Blood Diamond"],
      answer: "The Revenant",
      image: "assets/css/images/leonardo.jpg",
    },

    {
        question: "What´s the name of Batmans sidekick?",
        options: ["Bob", "Albert", "James", "Robin"],
        answer: "Robin",
        image: "assets/css/images/robin.jpg",
      },

      {
        question: "Who plays the main character in The mask of Zorro?",
        options: ["Antonio Banderas", "Danny Devito", "Ryan Gosling", "Ryan Reynolds"],
        answer: "Antonio Banderas",
        image: "assets/css/images/antonio.jpg",
      },

      {
        question: "Which movie has the highest ranking on IMDB?",
        options: ["Shrek 2", "The Shawshank Redemption", "Avatar", "Shindlers List"],
        answer: "The Shawshank Redemption",
        image: "assets/css/images/shawshank.jpg",
      },

      {
        question: "What is the name of the planet in Avatar?",
        options: ["Patrick", "Pluto", "Precious", "Pandora"],
        answer: "Pandora",
        image: "assets/css/images/pandora.jpg",
      },

      {
        question: "What James Bond´s favourite drink?",
        options: ["Vodka Martini", "Beer", "Negroni", "White Russian"],
        answer: "Vodka Martini",
        image: "assets/css/images/martini.jpg",
      },
    ];

let currentQuestion = 0;
let score = 0;

/* Variables that represents different HTML elements*/
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const feedbackText = document.getElementById("feedback-text");
const feedbackImage = document.getElementById("feedback-image");
const nextButton = document.getElementById("next-btn");

/* Displays the current quiz question and answer options */
function displayQuestion() {
  console.log("Displaying question:", currentQuestion);
  const currentQuizData = quizData[currentQuestion];
  questionText.textContent = currentQuizData.question;

  optionsContainer.innerHTML = "";
  currentQuizData.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;
    optionsContainer.appendChild(button);
    button.addEventListener("click", checkAnswer);
  });

  nextButton.style.display = "block";
  feedbackImage.src = "";
  

  if (currentQuestion === 0) {
    console.log("This is the first question.");
    feedbackText.textContent = ""; 
    
    
  } else {
    console.log("Displaying feedback text.");
    feedbackText.textContent = "Feedback text";
    
  }
}

  /* Checks answer and provides feedback*/
  function checkAnswer(event) {
    console.log("Checking answer...");
    const selectedOption = event.target.textContent;
    const currentQuizData = quizData[currentQuestion];
  
    feedbackImage.src = currentQuizData.image;
    feedbackImage.setAttribute("alt", "An image displaying the correct answer"); /*new code wednesday*/
  
    if (selectedOption === currentQuizData.answer) {
      console.log("Correct answer!");
      feedbackText.textContent = "Correct answer!";
      score++;
    } else {
      console.log("Wrong answer.");
      feedbackText.textContent = `Wrong answer. The correct answer was: ${currentQuizData.answer}. Try again!`;
    }

    /* Reset answer button, hide submit and show next*/
    const answerButtons = document.querySelectorAll(".option");
  answerButtons.forEach((button) => {
    button.removeEventListener("click", checkAnswer);
  });
}        
  
      

      /*Move to the next question or display final score*/
      function nextQuestion() {
        console.log("Moving to the next question.");
        currentQuestion++;
        if (currentQuestion < quizData.length) {
          console.log("Displaying next question.");
          displayQuestion();
          feedbackText.textContent = "";
          feedbackImage.src = "";
          feedbackImage.removeAttribute("alt");/*new code wednesday*/
      
          const answerButtons = document.querySelectorAll(".option");
          answerButtons.forEach((button) => {
            button.addEventListener("click", checkAnswer);
          });
        } else {
          console.log("Quiz completed!");
          questionText.textContent = `Quiz completed! Your score is ${score} out of ${quizData.length}.`;
          optionsContainer.innerHTML = "";
          feedbackText.textContent = "";
          nextButton.style.display = "none";
          feedbackImage.src = "";
          feedbackImage.removeAttribute("alt");/*new code wednesday*/
        }
      }

        /* Quiz setup and start*/
        

        nextButton.addEventListener("click", nextQuestion);

        displayQuestion();

      


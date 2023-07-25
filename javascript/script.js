/* Questions for the quiz */
const quizData = [
    {
      question: "Leonardo Dicaprio won an Oscar for which movie?",
      options: ["Titanic", "Catch me if you can", "The Revenant", "Blood Diamond"],
      answer: "The Revenant",
      image: "assets/images/leonardo.jpeg",
    },

    {
        question: "What´s the name of Batmans sidekick?",
        options: ["Bob", "Albert", "James", "Robin"],
        answer: "Robin",
        image: "assets/images/robin.jpg",
      },

      {
        question: "Who plays the main character in The mask of Zorro?",
        options: ["Antonio Banderas", "Danny Devito", "Ryan Gosling", "Ryan Reynolds"],
        answer: "Antonio Banderas",
        image: "assets/images/antonio.jpg",
      },

      {
        question: "Which movie has the highest ranking on IMDB?",
        options: ["Shrek 2", "The Shawshank Redemption", "Avatar", "Shindlers List"],
        answer: "The Shawshank Redemption",
        image: "assets/images/shawshank.jpg",
      },

      {
        question: "What is the name of the planet in Avatar?",
        options: ["Patrick", "Pluto", "Precious", "Pandora"],
        answer: "Pandora",
        image: "assets/images/pandora.jpg",
      },

      {
        question: "What James Bond´s favourite drink?",
        options: ["Vodka Martini", "Beer", "Negroni", "White Russian"],
        answer: "Vodka Martini",
        image: "assets/images/martini.jpg",
      },
    ];

let currentQuestion = 0;
let score = 0;

/* Variables that represents different HTML elements*/
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const feedbackText = document.getElementById("feedback-text");
const feedbackImage = document.getElementById("feedback-image");
const submitButton = document.getElementById("submit-btn");
const nextButton = document.getElementById("next-btn");

/* Displays the current quiz question and answer options */
function displayQuestion() {
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
  }

  /* Checks answer and provides feedback*/
  function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuizData = quizData[currentQuestion];
  
    if (selectedOption === currentQuizData.answer) {
      feedbackText.textContent = "Correct answer!";
      feedbackImage.src = currentQuizData.image;
      score++;
    } else {
      feedbackText.textContent = "Wrong answer. Try again!";
      feedbackImage.src = "";
    }

    /* Reset answer button, hide submit and show next*/
    const answerButtons = document.querySelectorAll(".option");
        answerButtons.forEach((button) => {
          button.removeEventListener("click", checkAnswer);
        });     
        
        submitButton.style.display = "none";
        nextButton.style.display = "block";
      }

      /*Move to the next question or display final score*/
      function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < quizData.length) {

    
            displayQuestion();
            feedbackText.textContent = "";
            feedbackImage.src = "";
            submitButton.style.display = "block";
            nextButton.style.display = "none";


            const answerButtons = document.querySelectorAll(".option");
            answerButtons.forEach((button) => {
              button.addEventListener("click", checkAnswer);
            });
          } else {
            
            questionText.textContent = `Quiz completed! Your score is ${score} out of ${quizData.length}.`;
            optionsContainer.innerHTML = "";
            feedbackText.textContent = "";
            feedbackImage.src = "";
            submitButton.style.display = "none";
            nextButton.style.display = "none";
          }
        }


      


const questions = [
    
        {  
          "question": "What is the synonym of 'happy'?",  
          "answers": [  
            { "text": "Sad", "correct": false },  
            { "text": "Joyful", "correct": true },  
            { "text": "Angry", "correct": false },  
            { "text": "Tired", "correct": false }  
          ]  
        },  
        {  
          "question": "Which of these words is an antonym of 'small'?",  
          "answers": [  
            { "text": "Tiny", "correct": false },  
            { "text": "Large", "correct": true },  
            { "text": "Petite", "correct": false },  
            { "text": "Miniature", "correct": false }  
          ]  
        },  
        {  
          "question": "Choose the correct spelling:",  
          "answers": [  
            { "text": "Recieve", "correct": false },  
            { "text": "Receive", "correct": true },  
            { "text": "Recieve", "correct": false },  
            { "text": "Receeve", "correct": false }  
          ]  
        },  
        {  
          "question": "What is the past tense of 'go'?",  
          "answers": [  
            { "text": "Went", "correct": true },  
            { "text": "Go", "correct": false },  
            { "text": "Gone", "correct": false },  
            { "text": "Goed", "correct": false }  
          ]  
        },  
        {  
          "question": "Which word is a noun?",  
          "answers": [  
            { "text": "Run", "correct": false },  
            { "text": "Beautiful", "correct": false },  
            { "text": "Chair", "correct": true },  
            { "text": "Quickly", "correct": false }  
          ]  
        },  
        {  
          "question": "Identify the verb in the sentence: 'She reads a book.'",  
          "answers": [  
            { "text": "She", "correct": false },  
            { "text": "Reads", "correct": true },  
            { "text": "A", "correct": false },  
            { "text": "Book", "correct": false }  
          ]  
        },  
        {  
          "question": "Which sentence is correct?",  
          "answers": [  
            { "text": "He don't like pizza.", "correct": false },  
            { "text": "He doesn't like pizza.", "correct": true },  
            { "text": "He doesn't likes pizza.", "correct": false },  
            { "text": "He don't likes pizza.", "correct": false }  
          ]  
        },  
        {  
          "question": "What is the plural of 'child'?",  
          "answers": [  
            { "text": "Childs", "correct": false },  
            { "text": "Children", "correct": true },  
            { "text": "Childes", "correct": false },  
            { "text": "Childrens", "correct": false }  
          ]  
        },  
        {  
          "question": "Choose the correct article: ___ apple a day keeps the doctor away.",  
          "answers": [  
            { "text": "A", "correct": false },  
            { "text": "An", "correct": true },  
            { "text": "The", "correct": false },  
            { "text": "Some", "correct": false }  
          ]  
        },  
        {  
          "question": "Which sentence uses the correct punctuation?",  
          "answers": [  
            { "text": "What time is it?", "correct": true },  
            { "text": "What time is it.", "correct": false },  
            { "text": "What time is it!", "correct": false },  
            { "text": "What time is it!", "correct": false }  
          ]  
        },  
        {  
          "question": "What is the opposite of 'easy'?",  
          "answers": [  
            { "text": "Hard", "correct": true },  
            { "text": "Soft", "correct": false },  
            { "text": "Gentle", "correct": false },  
            { "text": "Light", "correct": false }  
          ]  
        },  
        {  
          "question": "Which of the following is a preposition?",  
          "answers": [  
            { "text": "Quick", "correct": false },  
            { "text": "Under", "correct": true },  
            { "text": "Run", "correct": false },  
            { "text": "Happiness", "correct": false }  
          ]  
        },  
        {  
          "question": "Choose the correct form: 'I ___ to the store yesterday.'",  
          "answers": [  
            { "text": "Go", "correct": false },  
            { "text": "Went", "correct": true },  
            { "text": "Goen", "correct": false },  
            { "text": "Goes", "correct": false }  
          ]  
        },  
        {  
          "question": "What is a contraction of 'do not'?",  
          "answers": [  
            { "text": "Don't", "correct": true },  
            { "text": "Doesn't", "correct": false },  
            { "text": "Didnt", "correct": false },  
            { "text": "Dont", "correct": false }  
          ]  
        },  
        {  
          "question": "Select the correct sentence:",  
          "answers": [  
            { "text": "She can sings well.", "correct": false },  
            { "text": "She can sing well.", "correct": true },  
            { "text": "She can singing well.", "correct": false },  
            { "text": "She can sung well.", "correct": false }  
          ]  
        },  
        {  
          "question": "Which word is an adjective?",  
          "answers": [  
            { "text": "Beautiful", "correct": true },  
            { "text": "Quickly", "correct": false },  
            { "text": "Run", "correct": false },  
            { "text": "Happiness", "correct": false }  
          ]  
        },  
        {  
          "question": "Identify the adverb: 'He runs fast.'",  
          "answers": [  
            { "text": "He", "correct": false },  
            { "text": "Runs", "correct": false },  
            { "text": "Fast", "correct": true },  
            { "text": "He runs", "correct": false }  
          ]  
        },  
        {  
          "question": "Choose the correct comparative: 'This book is ___ than that one.'",  
          "answers": [  
            { "text": "More interesting", "correct": true },  
            { "text": "Most interesting", "correct": false },  
            { "text": "Interestinger", "correct": false },  
            { "text": "Interestest", "correct": false }  
          ]  
        },  
        {  
          "question": "What is the term for a word that sounds like its meaning?",  
          "answers": [  
            { "text": "Onomatopoeia", "correct": true },  
            { "text": "Metaphor", "correct": false },  
            { "text": "Simile", "correct": false },  
            { "text": "Alliteration", "correct": false }  
          ]  
        },  
        {  
          "question": "Which sentence is in the passive voice?",  
          "answers": [  
            { "text": "The cake was baked by Mary.", "correct": true },  
            { "text": "Mary baked the cake.", "correct": false },  
            { "text": "Mary is baking the cake.", "correct": false },  
            { "text": "Baking the cake, Mary was busy.", "correct": false }  
          ]  
        },  
        {  
          "question": "Choose the correct plural noun:",  
          "answers": [  
            { "text": "Cactuses", "correct": false },  
            { "text": "Cacti", "correct": true },  
            { "text": "Cacties", "correct": false },  
            { "text": "Cactas", "correct": false }  
          ]  
        },  
        {  
          "question": "What is a synonym for 'quick'?",  
          "answers": [  
            { "text": "Slow", "correct": false },  
            { "text": "Fast", "correct": true },  
            { "text": "Lazy", "correct": false },  
            { "text": "Late", "correct": false }  
          ]  
        },  
        {  
          "question": "Define the word 'benevolent'.",  
          "answers": [  
            { "text": "Kind and generous", "correct": true },  
            { "text": "Angry and mean", "correct": false },  
            { "text": "Lazy and slow", "correct": false },  
            { "text": "Rich and powerful", "correct": false }  
          ]  
        },  
        {  
          "question": "Which sentence is correct?",  
          "answers": [  
            { "text": "They is going to the park.", "correct": false },  
            { "text": "They are going to the park.", "correct": true },  
            { "text": "They going to the park.", "correct": false },  
            { "text": "They is going to park.", "correct": false }  
          ]  
        },  
        {  
          "question": "What is the superlative form of 'good'?",  
          "answers": [  
            { "text": "Better", "correct": false },  
            { "text": "Best", "correct": true },  
            { "text": "Goodest", "correct": false },  
            { "text": "Most good", "correct": false }  
          ]  
        },  
    ]
  
  const questionElement = document.getElementById("question");
  const answersButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const previousButton = document.getElementById("prev-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Function to start the quiz
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    loadQuestion();
    updateNavigationButtons();
  }
  
  // Load the current question and display answers
  function loadQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
  
    questionElement.innerHTML = (currentQuestionIndex + 1) + ". " + currentQuestion.question;
  
    // Generate answer buttons
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      button.dataset.correct = answer.correct;
      button.addEventListener("click", selectAnswer);
      answersButtons.appendChild(button);
    });
  }
  
  // Reset previous answers
  function resetState() {
    nextButton.style.display = "none"; // Hide Next button initially
    while (answersButtons.firstChild) {
      answersButtons.removeChild(answersButtons.firstChild);
    }
  }
  
  // Handle answer selection
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
  
    if (isCorrect) {
      score++;
      selectedBtn.classList.add("correct");
    } else {
      selectedBtn.classList.add("wrong");
    }
  
    // Mark the correct answers
    Array.from(answersButtons.children).forEach((btn) => {
      btn.disabled = true; // Disable all answers
      if (btn.dataset.correct === "true") {
        btn.classList.add("correct");
      }
    });
  
    // Show the Next button
    nextButton.style.display = "inline-block";
  
    // Disable all answer buttons after selection
    Array.from(answersButtons.children).forEach((btn) => (btn.disabled = true));
  }
  
  // Event for Next button
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      updateNavigationButtons();
    } else {
      // End of quiz
      alert(`Quiz finished! Your score: ${score}/${questions.length}`);
      startQuiz(); // Restart quiz
    }
  });
  
  // Event for Previous button
  previousButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion();
      updateNavigationButtons();
    }
  });
  
  // Enable or disable Prev button
  function updateNavigationButtons() {
    previousButton.disabled = currentQuestionIndex === 0;
  }
  
  // Initialize quiz when page loads
  startQuiz();
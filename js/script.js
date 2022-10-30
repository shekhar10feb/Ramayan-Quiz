// Start Section 
let start = document.querySelector('#start');

// guide section 
let guide = document.querySelector('#guide');
let exit = document.querySelector('#exit');
let continueBtn = document.querySelector('#continue');

// Quiz Section 
let quiz = document.querySelector('#quiz');
let time = document.querySelector('#time');

// question Section 
let questionNo = document.querySelector('#questionNo');
let questionText = document.querySelector('#questionText');

// Multiple Choices of Questions
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');

// correct and next button 
let total_correct = document.querySelector('#total_correct');
let next_question = document.querySelector('#next_question');

// Result Section 
let result = document.querySelector('#result');
let points = document.querySelector('#points');
let quit = document.querySelector('#quit');
let startAgain = document.querySelector('#startAgain');

// Get All 'H4' From Quiz Section (MCQS) 
let choice_que = document.querySelectorAll('.choice_que');

// Trophy and Stars Animation 
let trophy = document.querySelector('.fa-trophy');
let star1  = document.querySelector('.star1');
let star2  = document.querySelector('.star2');
let star3  = document.querySelector('.star3');

let index = 0;
let timer = 0;
let interval = 0;

// total points 
let correct = 0;

// store answer value 
let UserAns = undefined;

// what happen when 'Start' button will check 
start.addEventListener('click', ()=> {
    start.style.display = 'none';
    guide.style.display = 'block';
});

// what happen when 'Exit' button will click 
exit.addEventListener('click', ()=> {
    start.style.display = 'block';
    guide.style.display = 'none';
});

// Creating Timer for Quiz Timer Section 
let countDown = ()=> {
    if(timer === 20) {
        clearInterval(interval);
        next_question.click();
    } else {
        timer++;
        time.innerText = timer;
    }
};

// Loading questions 
let loadData = ()=> {
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;

    // timer start 
    timer = 0;
};

loadData();

// what happen when 'Continue' button will check 
continueBtn.addEventListener('click', ()=> {
    quiz.style.display = 'block';
    guide.style.display = 'none';

    interval = setInterval(countDown, 1000);
    loadData();

    // remove all active classes when continue button will check 
    choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
    });
    total_correct.innerHTML = `${MCQS.length} में से ${correct = 0} प्रश्न सही`;
});

choice_que.forEach( (choices, choiceNo) => {

    choices.addEventListener("click", ()=> {

       choices.classList.add("active");    
    
       // check answer 
       if(choiceNo === MCQS[index].answer) {
           correct++;
       } else {
           correct += 0;
       }

       // stop counter 
       clearInterval(interval);

       // disable all options when user select an option 
       for(i=0; i<=3; i++) {
          choice_que[i].classList.add("disabled");
       }
    });
});

// what happen when 'Next' button will check 
next_question.addEventListener("click", ()=> {
    
    // if index is less than MCQS.length 
    if(index !== MCQS.length - 1) {
        index++;

        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        });

        // question 
        loadData();

        // result 
        total_correct.style.display = "block";
        total_correct.innerHTML = `${MCQS.length} में से ${correct} प्रश्न सही `;
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
    } else {
        index = 0;

        // when quiz question complete display result section 
        clearInterval(interval);
        quiz.style.display = "none";
        points.innerHTML = `आपको ${MCQS.length} में से ${correct} मिल गया है`;
        result.style.display = "block";
    }

    for(i=0; i<=3; i++) {
        choice_que[i].classList.remove("disabled");
    }
});

// what happen when 'Quit' button will click 
quit.addEventListener("click", ()=> {
    start.style.display = 'block';
    result.style.display = 'none';
});

// what happen when 'Start Again' button will click 
startAgain.addEventListener('click', ()=> {
    guide.style.display = 'block';
    result.style.display = 'none';
});


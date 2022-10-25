const questions = [
    {
        'que': ' Who had composed the original Ramayana?',
        'a': 'Rishi Valmiki',
        'b': 'Tulsi Das',
        'c': 'Sant Ek Nath',
        'd': 'Anhinanda',
        'correctAns': 'a'
    },
    {
        'que': 'Lakshmana is considered to be the incarnation of whom?',
        'a': 'Lord Vishnu',
        'b': 'Lord Shiva',
        'c': 'Lord Brahma',
        'd': 'Sheshnag',
        'correctAns': 'd'
    },
    {
        'que': 'Which of the following statement is/are true for Gayatri Mantra?',
        'a': 'Gayatri Mantra was formed from the first letter that comes from after every 1000 verses of Ramayana.',
        'b': 'The Gayatri Mantra consists of 20 letters.',
        'c': 'The Gayatri Mantra was first mentioned in Rigveda.',
        'd': 'Only A and C are correct',
        'correctAns': 'd'
    }
];

const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.options');

let total = questions.length;
let right = 0,
    wrong = 0;
let index = 0;
const loadQuestion = () => {
    if(index === total-1){
        document.querySelector('.btn').innerHTML = 'Submit';
    }
    if(index === total) {
        return endQuiz();
    } 
    reset();
    const data = questions[index];
    // console.log(data);
    quesBox.innerText = `${index+1}) ${data.que}`;
    // console.log(quesBox.innerText);
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    // console.log(ans, data.correctAns);
    if(ans === data.correctAns) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(input => {
        if(input.checked){
            answer = input.value;
        }
    });
    // console.log('yes');
    return answer;
}

const reset = () => {
    optionInputs.forEach(input => {
        input.checked = false;
    });
}

const refreshBtn = () => {
    location.reload();
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <div class="resultClass" style="text-align:center">
       <h2>Out of ${total} questions, you have ${right} correct answers!</h2>
       <h3>Thank you for playing the quiz.</h3>
       <button class='btn resultBtn' onclick="refreshBtn()">Play Again</button>
    </div>
    `;
}

loadQuestion();
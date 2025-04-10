var newBtn = document.querySelector('#js-new-quote');
newBtn.addEventListener('click', getQuote);

var answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAuthor);

var checkBtn = document.querySelector('#js-check-answer');
checkBtn.addEventListener('click', checkAnswer);

var endpoint = "https://thequoteshub.com/api/random";


let current = {
    quote: "",
    author: ""
};

async function getQuote() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log(json);

        displayQuote(json.text);

        current.quote = json.text;
        current.author = json.author;

    } 
    catch(err) {
        console.log(err);
        alert('Fail');
    } 
}


function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = '"' + quote + '"';
}

function displayAuthor(answer) {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = '- ' + current.author;
}

function checkAnswer() {
    const userInput = document.querySelector('#js-user-answer').value.trim().toLowerCase();
    const correctAnswer = current.author.trim().toLowerCase();
    const feedbackToUser = document.querySelector('#js-answer-feedback');

    if(userInput == correctAnswer) {
        feedbackToUser.textContent = "Yes, this is correct! Great job!!";
    }
    else {
        feedbackToUser.textContent = `No, so so wrong. Correct answer was: ${current.author}`;
    }
}

getQuote();
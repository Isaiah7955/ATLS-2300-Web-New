//step 1 - select new quote button using query selector
var newBtn = document.querySelector('#js-new-quote');

//step 2 - write event listener that opens getQuote function
newBtn.addEventListener('click', getQuote);

var answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

let current = {
    question: "",
    answer: ""
};

//step 3 - create function that logs every time it is clicked
async function getQuote() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        // console.log();
        displayQuote(json.question);

        current.question = json.question;
        current.answer = json.answer;

    } 
    catch(err) {
        console.log(err);
        alert('Fail');
    } 
}


//step 4 - add new variable holding api endpoint
var endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayAnswer(answer) {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = current.answer;
}

getQuote();
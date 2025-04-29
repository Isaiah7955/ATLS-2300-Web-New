//save variables that are going to be needed to be tracked later in our program
const phoneInput = document.getElementById('phoneInput');
const enteredDigits = document.getElementById('enteredDigits');
const clearButton = document.getElementById('clearButton');
const deleteButton = document.getElementById('deleteButton');

const inputContainer = document.getElementById('inputContainer');
const clearContainer = document.getElementById('clearContainer');
const deleteContainer = document.getElementById('deleteContainer');

let hoverAttemptsInput = 0;
let hoverAttemptsClear = 0;
let hoverAttemptsDelete = 0;
let hoverAttemptThreshold = 3;
let phoneNumber = '';

// This is a function to move a container element to random spot on screen
function moveElement(container) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight; //save variables of max px's for screen

    const randomX = Math.floor(Math.random() * (windowWidth - containerWidth)); //find random width value
    const randomY = Math.floor(Math.random() * (windowHeight - containerHeight)); //find random height value

    container.style.left = randomX + 'px'; //change to random spot + px so it knows to move it in px
    container.style.top = randomY + 'px';
}

// function to move the element as long as you haven't hovered at least 5 times
phoneInput.addEventListener('mouseenter', (z) => {
    if (hoverAttemptsInput < hoverAttemptThreshold) { //if less than hover threshold
        moveElement(inputContainer); //move element randomly 
        hoverAttemptsInput++; //increase hover attempets tracker
      }
});

//if user clicks on box, it will still move to random location if less than 5 hovers
phoneInput.addEventListener('click', (z) => {
    if (hoverAttemptsInput < hoverAttemptThreshold) { //if less than hover threshold
        moveElement(inputContainer); //move element randomly
        z.preventDefault(); //prevent default action of allowing the click to occur
        //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
      }
});

// Typing into the phone input box
phoneInput.addEventListener('input', (z) => {

    if (hoverAttemptsInput < hoverAttemptThreshold) { //if less than hover threshold
        moveElement(inputContainer); //move element randomly 
        hoverAttemptsInput++; //increase hover attempets tracker
      }
});

//if user clicks on box, it will still move to random location if less than 5 hovers
phoneInput.addEventListener('click', (z) => {
    if (hoverAttemptsInput < 3) { //if less than 5 hovers
        moveElement(inputContainer); //move element randomly
        z.preventDefault(); //prevent default action of allowing the click to occur
      }
});

// Typing into the phone input box
phoneInput.addEventListener('input', (z) => {
    const value = phoneInput.value; //save value from the phoneInput which is the digit container box
    if (value && !isNaN(value)) { //check to see if valid number input
      //value check is not null, false, 0 or an empty string
      phoneNumber += value; //phone number starts as empty string and concatanates with every digit added
      enteredDigits.textContent = 'Phone number currently is: ' + phoneNumber; //display current number tracker


    if (phoneNumber.length === 10) {
      const formatted = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
      
      const messageBox = document.getElementById('phoneMessage');
      messageBox.textContent = `Your phone number is: ${formatted}`;
      messageBox.style.display = 'block';

      // // Optionally hide the message after a few seconds
      // setTimeout(() => {
      //     messageBox.style.display = 'none';
      // }, 4000); // hides after 4 seconds

      // Reset input and tracker
      phoneNumber = '';
      enteredDigits.textContent = 'Phone number currently is: ';
      phoneInput.blur();
    }


      phoneInput.value = ''; //set the phone input value back to empty to not mess up previous inputs or future inputs
  
      // Reset hover count and move the input box after the user types a digit
      hoverAttemptsInput = 0;  // Resetting hover counter
      moveElement(inputContainer);  // Move the input box again
  
      // this makes it so cursor is taken out of container so user has to try and click it again
      phoneInput.blur();
      //https://www.w3schools.com/jsref/met_html_blur.asp

      hoverAttemptThreshold += 1; //increase threshold by 2 everytime user types a number (heehee)
    } else { //if not valid user input (i.e not 0-9 digit)
      phoneInput.value = '';  // Clear input if it's not a valid number
    }
});

// Clear button hover
clearButton.addEventListener('mouseenter', (z) => {
    if (hoverAttemptsClear < 8) { //if hover for clear button isn't at 20 yet
        moveElement(clearContainer); //move clear container
        hoverAttemptsClear++; //increment it
      }
});

// Delete button hover 
deleteButton.addEventListener('mouseenter', (z) => {
    if (hoverAttemptsDelete < 8) { //same thing with hover check
        moveElement(deleteContainer); //move delete container
        hoverAttemptsDelete++; //increment it
      }
});

clearButton.addEventListener('click', (z) => {
    if (hoverAttemptsClear < 8) { //if hover isn't at 20 yet
        moveElement(clearContainer); //move clear container
        e.preventDefault(); //prevent default action of allowing the click to occur
      } 
      
      else { //we can now clear the number input
        phoneNumber = '';  // Clear the phone number
        enteredDigits.textContent = 'Phone number currently is: ';
        moveElement(clearContainer); // Move the clear button after clicking
        hoverAttemptsClear = 0;  // Reset hover counter for clear button
        clearButton.blur();
      }
});

deleteButton.addEventListener('click', (z) => {
    if (hoverAttemptsDelete < 8) { // if hover count not at 20
        moveElement(deleteContainer); //move delete container
        e.preventDefault(); //prevent default action of allowing the click to occur
      } 
      
      else {
        phoneNumber = phoneNumber.slice(0, -1);  // Remove last digit
        //https://www.geeksforgeeks.org/javascript-program-to-remove-last-character-from-the-string/
        enteredDigits.textContent = 'Phone number currently is: ' + phoneNumber; //display current number tracker

        moveElement(deleteContainer); // Move the delete button after clicking
        hoverAttemptsDelete = 0;  // Reset hover counter for delete button
        deleteButton.blur();
      }
});

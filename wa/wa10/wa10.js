const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit in the dome of doom, so :insertx: decied it was the best time to tan! The UV Index was reaching 15 and the dome had the perfect atmosphere for skin to change. When they horrificly arrived at :inserty:, they knew they needed to go in. It was only destiny and the world was ending if they would not! Then :insertz:. Bob was watching through a very miniscule telescope and taking notes in his very miniscule journal as he watched — :insertx: is a gigantic, gigantic man, weighting in at 300 pounds, and realized for he cannot tan. Dumbledore himself has spoke against it so now he must cry in sorrow.";
const insertX = ["Gandolf the Goblin",
    "Lucas Baby Man",
    "Zane the Molter"];
const insertY = ["Rays Place",
    "Rays Terrible, Terrible Neighbors House",
    "The Eat Well Cafe"];
const insertZ = ["they ate lots of cheese and crackers", "they drank wine until their bellies turned red", "discussed new spells and cauldrons with Mr.Dumbledore himself"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(/:insertx:/g,xItem);
  newStory = newStory.replace(":inserty:",yItem);
  newStory = newStory.replace(":insertz:",zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature =  Math.round((94-32)* 5/9) + ' centrigade';

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

let btn = document.querySelector('button');
btn.addEventListener('click', result);
//Card distribution
let CardNumber = [];
let numberOfCards = prompt(
  "Insira um número par de 4 a 14 para selecionar com quantas cartas deseja jogar:"
);
//Repeats if and while the chosen number doesn't meet the requirements to be valid
while (numberOfCards % 2 !== 0 || numberOfCards < 4 || numberOfCards > 14) {
  numberOfCards = prompt(
    "Insira um número par de 4 a 14 para selecionar com quantas cartas deseja jogar:"
  );
}
//If it's valid, the code continues
for (let i = 0; i < numberOfCards; i++) {
  let CardAdd = document.querySelector("body div"); //Selects the div that contains the cards
  CardAdd.innerHTML += `<div class="card card${i + 1}" onclick="flipCard(this)"><img src="img/front.png"></img></div>`; //Add a card in the div
  CardNumber.push(`card${i + 1}`); //Adds the card number in the array CardNumber
}

let ParrotType = [
  "bob",
  "explody",
  "fiesta",
  "metal",
  "revert",
  "triplet",
  "unicorn",
];

function comparator() {
  return Math.random() - 0.5; //Random number generator
}

ParrotType.sort(comparator); //Randomizes ParrotType

CardNumber.sort(comparator); //Randomizes CardNumber

let CardNum;
let Y = 0;

for (let ArrayPos = 0; ArrayPos < CardNumber.length; ArrayPos++) {
  CardNum = document.querySelector(`.${CardNumber[ArrayPos]}`); //Selects the card number as a class, using the randomized CardNumber array
  //Since two cards must receive the same class, we only update a second parameter every 2 loops
  //This way, CardNumber[0] and CardNumber[1] will have the same class
  //Same for CardNumber[2] and CardNumber[3], and so on...
  //This is done by the code below:
  if (ArrayPos % 2 === 0 && ArrayPos !== 0) {
    Y++;
  }
  //The card class is then updated using that Y parameter
  CardNum.classList.add(`${ParrotType[Y]}`);
}

//Flip Card
let FlippedCards = 0;

function flipCard(card) {
  //Adds the gif according to the class (ParrotType) of the card
  if (card.classList.contains("bob")){
    card.innerHTML = '<img src="img/bob.gif"></img>';
  }else if (card.classList.contains("explody")){
    card.innerHTML = '<img src="img/explody.gif"></img>';
  }else if (card.classList.contains("fiesta")){
    card.innerHTML = '<img src="img/fiesta.gif"></img>';
  }else if (card.classList.contains("metal")){
    card.innerHTML = '<img src="img/metal.gif"></img>';
  }else if (card.classList.contains("revert")){
    card.innerHTML = '<img src="img/revert.gif"></img>';
  }else if (card.classList.contains("triplet")){
    card.innerHTML = '<img src="img/triplet.gif"></img>';
  }else if (card.classList.contains("unicorn")){
    card.innerHTML = '<img src="img/unicorn.gif"></img>';
  }

  card.classList.add("flipped"); //Adds a class named flipped
  FlippedCards++;
  setTimeout(unflipCard, 1000);
}
function unflipCard() {
  if (FlippedCards >= 2) {
    for (let n = 0; n < 2; n++) {
      let Flipped = document.querySelector(".flipped");
      Flipped.innerHTML = '<img src="img/front.png"></img>';
      Flipped.classList.remove("flipped");
      FlippedCards--;
    }
  }
}

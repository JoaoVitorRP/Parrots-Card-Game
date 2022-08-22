//Card distribution
const CardNumber = [];
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
  const CardAdd = document.querySelector(".container"); //Selects the div that contains the cards
  CardAdd.innerHTML += `<div class="card card${i + 1}" onclick="flipCard(this)"><img src="img/front.png"></img></div>`; //Add a card in the div
  CardNumber.push(`card${i + 1}`); //Adds the card number in the array CardNumber
}

const ParrotType = [
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

let Y = 0;

for (let ArrayPos = 0; ArrayPos < CardNumber.length; ArrayPos++) {
  const CardNum = document.querySelector(`.${CardNumber[ArrayPos]}`); //Selects the card number as a class, using the randomized CardNumber array
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

//Chronometer
let seconds = 0;

function updateChronometer() {
  const chronometer = document.querySelector(".chronometer h2"); //Selects the text inside the chronometer div
  seconds++; //Adds +1 to the seconds
  chronometer.innerHTML = `${seconds}s`; //Updates the chronometer innerHTML to display the seconds
}

const myInterval = setInterval(updateChronometer, 1000); //Repeats the 'updateChronometer()' function every 1s

//Flip Card
let FlippedCards = 0;
let x = 1;
let ClickCount = 0;
let CorrectCards = 0;

function flipCard(card) {
  //Adds the gif according to the class (ParrotType) of the card
  if (card.classList.contains("bob")) {
    card.innerHTML = '<img src="img/bob.gif"></img>';
  } else if (card.classList.contains("explody")) {
    card.innerHTML = '<img src="img/explody.gif"></img>';
  } else if (card.classList.contains("fiesta")) {
    card.innerHTML = '<img src="img/fiesta.gif"></img>';
  } else if (card.classList.contains("metal")) {
    card.innerHTML = '<img src="img/metal.gif"></img>';
  } else if (card.classList.contains("revert")) {
    card.innerHTML = '<img src="img/revert.gif"></img>';
  } else if (card.classList.contains("triplet")) {
    card.innerHTML = '<img src="img/triplet.gif"></img>';
  } else if (card.classList.contains("unicorn")) {
    card.innerHTML = '<img src="img/unicorn.gif"></img>';
  }

  card.classList.add(`flipped${x}`); //Adds a class named 'flipped'
  card.classList.add(`back`); //Adds a class named 'back'
  card.removeAttribute("onclick"); //Removes the onclick to avoid duplicated flipped classes

  const cover = document.querySelector(".cover"); //Selects the cover div
  cover.classList.remove("hidden"); //Removes the 'hidden' class from it, which makes it "visible"
  setTimeout(disableCover, 1000); //After 1 second, it disables the cover

  FlippedCards++;
  x++;
  ClickCount++;

  if (FlippedCards >= 2) {
    setTimeout(unflipCard, 1000); //Activates the unflip card function after 1 second
  }
}

function unflipCard() {
  let cardSelect1 = document.querySelector(".flipped1");
  cardSelect1 = cardSelect1.innerHTML; //Selects the innerHTML (gif image) of the card with the class 'flipped1'

  let cardSelect2 = document.querySelector(".flipped2");
  cardSelect2 = cardSelect2.innerHTML; //Selects the innerHTML (gif image) of the card with the class 'flipped2'

  //If both are equal:
  if (cardSelect1 == cardSelect2) {
    cardSelect1 = document.querySelector(".flipped1");
    cardSelect1.classList.remove(`flipped1`); //Removes the class 'flipped1' but the card remains flipped (the innerHTML doesn't change)

    cardSelect2 = document.querySelector(".flipped2");
    cardSelect2.classList.remove(`flipped2`); //Removes the class 'flipped2' but the card remains flipped (the innerHTML doesn't change)

    FlippedCards -= 2;
    x -= 2;
    CorrectCards += 2;

    //If the number of correct card equals the total number of cards in the game, that means the player guessed all correctly, so the game ends:
    if (CorrectCards == numberOfCards) {
      clearInterval(myInterval); //Stops the timer
      alert(`Você ganhou em ${ClickCount} jogadas e ${seconds} segundos!`); //Displays a winning message with the number of flips and the time taken
      const RestartGame = prompt(
        "Você quer reiniciar o jogo? Responda com sim ou não"
      ); //Asks if the player wants to restart the game
      if (RestartGame == "sim") {
        location.reload(); //If the player answers 'yes', the page refreshes
      }
    }

    //If not:
  } else {
    for (let n = 1; n < 3; n++) {
      const Flipped = document.querySelector(`.flipped${n}`); //Selects the cards with the class 'flipped'
      Flipped.innerHTML = '<img src="img/front.png"></img>'; //Changes the innerHTML to the card front image, making it unflip
      Flipped.classList.remove(`flipped${n}`); //Removes the class 'flipped'
      Flipped.classList.remove(`back`); //Removes the class 'back'
      Flipped.setAttribute("onclick", "flipCard(this)"); //Adds back the onclick
      FlippedCards--;
      x--;
    }
  }
}

function disableCover() {
  const cover = document.querySelector(".cover"); //Selects the cover div
  cover.classList.add("hidden"); //Adds the 'hidden' class back to it, making it "invisible"
}

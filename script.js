//Card distribution
let numberOfCards = prompt(
  "Insira um número par de 4 a 14 para selecionar com quantas cartas deseja jogar:"
);
if (numberOfCards % 2 !== 0 || numberOfCards < 4 || numberOfCards > 14) {
  numberOfCards = prompt(
    "Insira um número par de 4 a 14 para selecionar com quantas cartas deseja jogar:"
  );
} else {
  for (let i = 0; i < numberOfCards; i++) {
    let CardAdd = document.querySelector("body div");
    CardAdd.innerHTML +=
      '<div class="card" onclick="flipCard(this)"><img src="img/front.png"></img></div>';
  }
}

//Flip Card
let FlippedCards = 0;

function flipCard(card) {
  card.innerHTML = '<img src="img/fiestaparrot.gif"></img>';
  card.classList.add("flipped");
  FlippedCards += 1;
  setTimeout(unflipCard, 1000);
}
function unflipCard() {
  if (FlippedCards === 2) {
    for (let n = 0; n < 2; n++) {
      let Flipped = document.querySelector(".flipped");
      Flipped.innerHTML = '<img src="img/front.png"></img>';
      Flipped.classList.remove("flipped");
      FlippedCards -= 1;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // the game:

  const cardArray = [
    {
      name: "dogo1",
      src: "images/dogo1.jpg",
    },
    {
      name: "dogo2",
      src: "images/dogo2.jpg",
    },
    {
      name: "dogo3",
      src: "images/dogo3.jpg",
    },
    {
      name: "dogo4",
      src: "images/dogo4.jpg",
    },
    {
      name: "dogo5",
      src: "images/dogo5.jpg",
    },
    {
      name: "dogo6",
      src: "images/dogo6.jpg",
    },
    {
      name: "dogo1",
      src: "images/dogo1.jpg",
    },
    {
      name: "dogo2",
      src: "images/dogo2.jpg",
    },
    {
      name: "dogo3",
      src: "images/dogo3.jpg",
    },
    {
      name: "dogo4",
      src: "images/dogo4.jpg",
    },
    {
      name: "dogo5",
      src: "images/dogo5.jpg",
    },
    {
      name: "dogo6",
      src: "images/dogo6.jpg",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());

  var cardsChosen = [];
  var cardsChosenID = [];
  var cardsWon = [];

  // create board
  const grid = document.querySelector("#grid");
  const message = document.querySelector("#message");

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/card.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);

      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatches() {
    var cards = document.querySelectorAll("img");

    const opOneID = cardsChosenID[0];
    const opTwoID = cardsChosenID[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      message.style.backgroundColor = "#43aa8b";
      message.textContent = "You got it!";
      cards[opOneID].setAttribute("src", "images/blank.png");
      cards[opTwoID].setAttribute("src", "images/blank.png");
      cardsWon.push(cardsChosen);
    } else {
      message.style.backgroundColor = "#f94144";
      message.textContent = "Oops! Try Again.";
      cards[opOneID].setAttribute("src", "images/card.png");
      cards[opTwoID].setAttribute("src", "images/card.png");
    }

    cardsChosenID = [];
    cardsChosen = [];
    if (cardsWon.length === cardArray.length / 2) {
      message.style.backgroundColor = "#f9c74f";
      var reloadGame = document.createElement("span");
      reloadGame.textContent = "Play again!";
      reloadGame.addEventListener("click", playAgain);
      reloadGame.setAttribute("style", "cursor: pointer; color: #577590");
      message.textContent = "Nice! You got them all!  ";
      message.appendChild(reloadGame);

      var winner = document.createElement("img");
      winner.setAttribute("src", "images/winner.gif");
      winner.setAttribute(
        "style",
        "position: absolute; width: 400px; height: 300px; top: 0px"
      );
      grid.appendChild(winner);
    }
  }
  // flip the cards
  function flipCard() {
    var cardID = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);

    this.setAttribute("src", cardArray[cardID].src);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatches, 500);
    }
  }

  // reload game
  function playAgain() {
    document.location.reload(false);
  }
  createBoard();
});


const addCardBtnFinal = document.getElementById("add-card-button-final");
const termInput = document.getElementById("term");
const defInput = document.getElementById("def");
const cardList = document.querySelector(".card-list-ul");
const newCardForm = document.querySelector(".new-card-form");
console.log(newCardForm);

let cards = [];
let currentIndex = 0;

const termDisplay = document.querySelector(".random-term p");
const defDisplay = document.querySelector(".random-def p");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

function showCard(index) {
    if (cards.length === 0) {
        termDisplay.textContent = "No cards available";
        defDisplay.innerHTML = '<img src="images/study-man-white.png" width="200" height="auto">';
        return
    }
    currentIndex = (index + cards.length) % cards.length;

    termDisplay.textContent = cards[currentIndex].term;
    defDisplay.textContent = "Click to reveal definition";
    defDisplay.style.cursor = "pointer";

    const newDefDisplay = document.querySelector(".random-def p");

    newDefDisplay.addEventListener("click", () => {
        newDefDisplay.textContent = cards[currentIndex].def;
        newDefDisplay.style.cursor = "default";
    })
}

leftBtn.addEventListener("click", () => {
    showCard(currentIndex - 1);
});

rightBtn.addEventListener("click", () => {
    showCard(currentIndex + 1);
});

showCard(currentIndex);

newCardForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const term = termInput.value.trim();
    const definition = defInput.value.trim();

    cards.push({term, def: definition});
    showCard(cards.length - 1);

    const newCard = document.createElement("li");
    newCard.classList.add("card-item");
    newCard.innerHTML = `
    <div class="card-term">
      <h5>${term}</h5>
    </div>
    <div class="card-def">
      <p class="def-text">${definition}</p>
    </div>
    <button class="delete-btn">🗑️</button>
  `;

  // the delete button functionality
  newCard.querySelector(".delete-btn").addEventListener("click", () => {
    const index = cards.findIndex(c => c.term === term && c.def === definition);
    if (index > -1) {
        cards.splice(index, 1);
    }
    newCard.remove();
    updateDisplayedCard();
  });

  cardList.appendChild(newCard);

    newCardForm.reset();
    newCardForm.classList.add("hidden");
    addCardBtn.classList.remove("hidden");
    const exampleCard = document.querySelector(".card-example");
    exampleCard.classList.add("hidden");
})

// hide the button
newCardForm.classList.add("hidden");

const addCardBtn = document.querySelector(".add-card");

addCardBtn.addEventListener("click", () => {
  newCardForm.classList.remove("hidden");
  addCardBtn.classList.add("hidden");
});


// to display the cards
const cardListCont = document.querySelector(".card-list");
const showCardsBtn = document.querySelector(".show-cards-btn");
cardListCont.classList.add("hidden");

showCardsBtn.addEventListener("click", () => {
    cardListCont.classList.toggle("hidden");

    if (cardListCont.classList.contains("hidden")) {
        showCardsBtn.textContent = "Card List v";
    } else {
        showCardsBtn.textContent = "Card List ^";
    }
});


// makes the man disapear after you have given him hair

const section = document.querySelector('.save-him');

section.addEventListener('animationend', (event) => {
  if (event.animationName === "fadeOut") {
    section.style.display = 'none';
  }
});


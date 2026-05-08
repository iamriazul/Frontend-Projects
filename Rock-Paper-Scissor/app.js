const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playgame(playerChoice){
    const computerChoices = choices[Math.floor(Math.random() * 3)];
   let result = "";
   if(playerChoice == computerChoices){
    result = "IT'S A TIE!";
   }
   else{
    switch(playerChoice){
        case "rock":
          result =  (computerChoices === "scissors") ? "YOU WIN!" : "YOU LOSE!";
          break;
        case "paper":
          result =  (computerChoices === "rock") ? "YOU WIN!" : "YOU LOSE!";
          break;
        case "scissors":
          result =  (computerChoices === "paper") ? "YOU WIN!" : "YOU LOSE!";
          break;

          
    };
   }

   resultDisplay.classList.remove("greenText","redText" );

playerDisplay.textContent = `PLAYER: ${playerChoice}`;
computerDisplay.textContent = `Computer: ${computerChoices}`;
resultDisplay.textContent = result;

switch(result){
    case "YOU WIN!":
        resultDisplay.classList.add("greenText");
        break;
    case "YOU LOSE!":
        resultDisplay.classList.add("redText");
        break;
}
}
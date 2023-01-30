let computerScore = 0;
let playerScore = 0;
let nbRound = 0;

const choices = ["Rock", "Paper", "Scissors"]
const imageURL = {Rock: "./images/rock.jpg", Paper: "./images/paper.jpg", Scissors: "./images/scissors.jpg"}

initGame()



function initGame() {
    let rockButton = document.querySelector('#rock');
    let paperButton = document.querySelector('#paper');
    let scissorsButton = document.querySelector('#scissors');

    rockButton.addEventListener('click', event => {playRound('Rock')})
    paperButton.addEventListener('click', event => {playRound('Paper')})
    scissorsButton.addEventListener('click', event => {playRound('Scissors')})
}

function playRound(playerChoice){
    computerChoice = choices[(Math.floor(Math.random()*3))];;

    showRound(playerChoice, computerChoice);

    if (computerScore >= 5 || playerScore >= 5) {
        showFinalResult()
    }
}

function whoWin(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "tie"
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        return "computer"
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return "player"
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return "computer"
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        return "player"
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        return "computer"
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return "player"
    } 
}

function showRound(playerChoice, computerChoice) {
    let roundDiv = document.querySelector("#round");
    let resultDiv = document.querySelector("#result");
    let thisRound = document.createElement("div");
    let oldRound = roundDiv.querySelectorAll("div");

    oldRound.forEach((round) => {
        if (!round.classList.contains("inactive")) 
            round.classList.add("inactive");
      });

    nbRound++;
    let roundText = document.createElement("span");
    roundText.textContent = `round ${nbRound}`;

    let playerImage = document.createElement("img");
    playerImage.setAttribute("src", imageURL[playerChoice]);

    let computerImage = document.createElement("img");
    computerImage.setAttribute("src", imageURL[computerChoice]);
    
    thisRound.appendChild(roundText);
    thisRound.appendChild(playerImage);
    thisRound.appendChild(computerImage);
    roundDiv.appendChild(thisRound);
    
    let newRoundDiv = document.createElement("div");
    let scoreDiv = document.createElement("div");
    let computerScoreP = document.createElement("p");
    let playerScoreP = document.createElement("p");

    let result = whoWin(playerChoice, computerChoice)

    if (result == "player") {
        playerScore++;
        newRoundDiv.textContent += "You win this round !";
    } else if (result == "computer") {
        computerScore++;
        newRoundDiv.textContent += "You lose this round !";
    } else{
        newRoundDiv.textContent += "No winner, this is a tie !";
    }
    computerScoreP.textContent = `Computer score : ${computerScore}`
    playerScoreP.textContent = `Player score : ${playerScore}`

    scoreDiv.appendChild(computerScoreP);
    scoreDiv.appendChild(playerScoreP);

    resultDiv.replaceChildren();
    resultDiv.appendChild(newRoundDiv);
    resultDiv.appendChild(scoreDiv);
}

function showFinalResult(){
    let resultDiv = document.querySelector("#result");
    let newRoundDiv = document.createElement("div");
    let scoreDiv = document.createElement("div");
    let buttonsDiv = document.querySelector("#buttons");
    let newRound = document.createElement("button");

    if (computerScore == playerScore) {
        newRoundDiv.textContent += "It's a tie, how is iy possible ?";
    } else if (computerScore > playerScore) {
        newRoundDiv.textContent += "I Win the game !";
    } else if (computerScore < playerScore) {
        newRoundDiv.textContent += "You win the game !";
    }
    scoreDiv.textContent += computerScore + " to " + playerScore

    resultDiv.replaceChildren();

    resultDiv.appendChild(newRoundDiv);
    resultDiv.appendChild(scoreDiv);

    buttonsDiv.replaceChildren();
    newRound.textContent = "New round ?"
    newRound.setAttribute("onclick", "reinit()");
    buttonsDiv.appendChild(newRound);
}

function reinit() {
    let buttonsDiv = document.querySelector("#buttons");
    let resultDiv = document.querySelector("#result");
    let roundDiv = document.querySelector("#round");

    computerScore = 0;
    playerScore = 0;
    nbRound = 0;
    buttonsDiv.replaceChildren();
    for (var key in imageURL) {
        let image = document.createElement("img");
        image.setAttribute("src", imageURL[key]);
        image.setAttribute("id", key.toLowerCase());
        buttonsDiv.appendChild(image);
    }
    resultDiv.replaceChildren();
    roundDiv.replaceChildren();
    initGame();
}
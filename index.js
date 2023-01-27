
const choices = ["Rock", "Paper", "Scissors"]

game()

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let a = 0; a < 5; a++) {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        winnerRound = playRound(playerChoice, computerChoice);
        if (winnerRound == "tie") {
            console.log ("It's a tie !")
        } else if (winnerRound == "player") {
            console.log ("You Win ! " + playerChoice + " beats " + computerChoice)
            playerScore++;
        } else {
            console.log ("You Lose ! " + computerChoice + " beats " + playerChoice)
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You Win the match : " + playerScore + " vs. " + computerScore)
    } else if (playerScore < computerScore) {
        console.log("You Lose the match : " + computerScore + " vs. " + playerScore)
    } else {
        console.log("It's a Tie : " + computerScore + " vs. " + playerScore)
    }

}


function getComputerChoice() {
    return choices[(Math.floor(Math.random()*3))];;
}

function getPlayerChoice() {
    let playerEntry = ""
    do {
        playerEntry = prompt("Please choose betwwen rock, paper and scissors :");
        playerEntry = playerEntry.charAt(0).toUpperCase() + playerEntry.slice(1).toLowerCase();
    } while (playerEntry != "Rock" && playerEntry != "Paper" && playerEntry != "Scissors" )
    return playerEntry;
}

function playRound(playerChoice, computerChoice){
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
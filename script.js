function getComputerChoice(output) {
    let random = [
        'rock',
        'paper',
        'scissors'      
    ]

    let choice = random[Math.floor(Math.random() * random.length)];
    output = choice;
    return output;
};

function playRound(playerSelection,computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Tie';
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            return 'Lose';
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            return 'Win';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'Win';
        } else if (playerSelection == 'paper' && computerSelection == 'paper') {
            return 'Tie';
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            return 'Lose';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'Lose';
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            return 'Win';
        } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
            return 'Tie';
    }

}



function game() {
    let player = prompt('Rock, Paper, or Scissors?' , '')
    console.log(
        playRound(player.toLowerCase(), getComputerChoice())
    )
}

game();
game();
game();
game();
game();


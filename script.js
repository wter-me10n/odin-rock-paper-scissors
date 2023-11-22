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
        console.log('A tie between two rocks...')
        return 'Tie'
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            console.log('You Lose! Paper beats rock!')
            return 'Lose';
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            console.log('You Win! Rock beats scissors!')
            return 'Win';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You Win! Paper beats rock!')
        return 'Win';
        } else if (playerSelection == 'paper' && computerSelection == 'paper') {
            console.log('A tie between two papers...')
            return 'Tie';
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            console.log('You Lose! Scissor beats paper!') 
            return 'Lose';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('You Lose! Rock beats scissor!') 
        return 'Lose';
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            console.log('You Win! Scissor beats paper!')
            return 'Win';
        } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
            console.log('A tie between two scissors...')
            return 'Tie';
    }

}




function game() {
    let player = prompt('Rock, Paper, or Scissors?' , '')
    console.log(
        playRound(player.toLowerCase(), getComputerChoice())
    )
    player = prompt('Rock, Paper, or Scissors?' , '')
    console.log(
        playRound(player.toLowerCase(), getComputerChoice())
    )
    player = prompt('Rock, Paper, or Scissors?' , '')
    console.log(
        playRound(player.toLowerCase(), getComputerChoice())
    )
    player = prompt('Rock, Paper, or Scissors?' , '')
    console.log(
        playRound(player.toLowerCase(), getComputerChoice())
    )
    player = prompt('Rock, Paper, or Scissors?' , '')
    console.log(
        playRound(player.toLowerCase(), getComputerChoice())
    )
}

alert('Welcome! (Please use console to see the on-going results...)')
game();
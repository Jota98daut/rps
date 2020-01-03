function computerPlay() {
    let rand = Math.floor(Math.random()*9)+1;
    return (rand <= 3) ? 'Rock' :
           (rand <= 6) ? 'Paper' :
           'Scissors';
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    if (player == 'rock') {
        if (computer == 'rock') return 'tie';
        else if (computer =='paper') return 'computer';
        else return 'player';
    }
    else if (player == 'paper') {
        if (computer == 'rock') return 'player';
        else if (computer == 'paper') return 'tie';
        else return 'computer';
    }
    else {
        if(computer == 'rock') return 'computer';
        else if (computer == 'paper') return 'player';
        else return 'tie';
    }
}

function game() {
    playerPoints = computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Rock, Paper or Scissors?');
        computerSelection = computerPlay();

        roundWinner = playRound(playerSelection, computerSelection);
        if (roundWinner == 'player') playerPoints++;
        else if(roundWinner == 'computer') computerPoints++;
    }
    return (playerPoints > computerPoints) ? 'Player wins!' :
           (playerPoints < computerPoints) ? 'Computer wins!' :
           'It\'s a tie!'
}
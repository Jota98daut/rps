let computerPoints = 0;
let playerPoints = 0;
const buttons = document.querySelectorAll('button');
let round = 1;

// Makes a random choice for computer's turn
function computerPlay() {
    let rand = Math.floor(Math.random()*9)+1;
    return (rand <= 3) ? 'Rock' :
           (rand <= 6) ? 'Paper' :
           'Scissors';
}

// Alters the HTML to show the state of the game
function displayRound(playerPlay, computerPlay, result, round) {
    const roundDisp = document.querySelector('.round');
    const game = document.querySelector('.game');
    const points = document.querySelector('.points');

    roundDisp.textContent = `Round ${round}`;
    game.innerHTML = `Player plays <b>${playerPlay}</b>` + '<br>' +
            `Computer plays <b>${computerPlay}</b>` + '<br>' +
            result.charAt(0).toUpperCase() + result.slice(1);
    if (playerPoints < 5 && computerPoints < 5) {
        points.textContent = `Player ${playerPoints} - ${computerPoints} Computer`;
    }
    else {
        points.textContent = 'Winner: ' + result.toUpperCase(); + '!!';
    }
}

// Takes both parts' choices and informs the winner
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result;

    if (player == 'rock') {
        if (computer == 'rock') result = 'tie';
        else if (computer =='paper') result = 'computer';
        else result = 'player';
    }
    else if (player == 'paper') {
        if (computer == 'rock') result = 'player';
        else if (computer == 'paper') result = 'tie';
        else result = 'computer';
    }
    else {
        if(computer == 'rock') result = 'computer';
        else if (computer == 'paper') result = 'player';
        else result = 'tie';
    }
    
    // If a player reached 5 points, restarts the game
    if (playerPoints < 5 && computerPoints < 5) {
        round++;
        if (result == 'computer') computerPoints++;
        else if (result == 'player') playerPoints++;
    }
    else {
        round = 1;
        computerPoints = playerPoints = 0;
    }
    displayRound(player, computer, result, round);
    return result;
}

buttons.forEach(button => button.addEventListener('click', () => {
    playRound(`${button.id}`, computerPlay())
}));
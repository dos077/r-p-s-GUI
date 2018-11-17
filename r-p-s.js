function computerPlay() {
    var results = ['Rock', 'Paper', 'Scissors'];
    var result = results[Math.floor(Math.random() * results.length)];
    return result;
}

function playRound(playerSelection, computerSelection) {
    var message = 'You picked ' + playerSelection + ' and computer picked ' + computerSelection + '.';
    pSelect = playerSelection.toLowerCase();
    cSelect = computerSelection.toLowerCase();
    var gameWin = 0;
    if(pSelect == 'rock') {
        if(cSelect == 'rock') {
            message = message + 'It\'s a draw.';
            gameWin = 2;
        }
        else if(cSelect == 'paper'){
            message = message + ' You lost.';
        }
        else if(cSelect == 'scissors') {
            message = message + ' You won!';
            gameWin = 1;
        }
    } else if(pSelect == 'paper'){
        if(cSelect == 'paper') {
            message = message + ' It\'s a draw.';
            gameWin = 2;
        }
        else if(cSelect == 'scissors'){
            message = message + ' You lost.';
        }
        else if(cSelect == 'rock') {
            message = message + ' You won!';
            gameWin = 1;
        }
    } else if(pSelect == 'scissors'){
        if(cSelect == 'scissors') {
            message = message + ' It\'s a draw.';
            gameWin = 2;
        }
        else if(cSelect == 'rock'){
            message = message + ' You lost.';
        }
        else if(cSelect == 'paper') {
            message = message + ' You won!';
            gameWin = 1;
        }
    } else {
        message = 'Please pick rock, paper, or scissor.';
        gameWin = 3;
    }
    var result = [message, gameWin];
    return result;
}

function game() {
    var pScore = 0;
    var cScore = 0;
    var round;
    while( pScore < 3 && cScore < 3 ) {
        if (round) {
            var message = round[0] + ' The score is Player: ' + pScore + ', Computer: ' + cScore + '. Rock, Paper, Scissors?';
            var playerSelection = window.prompt(message);
            round = playRound(playerSelection, computerPlay());
            winScore = round [1];
            if (winScore == 0) {cScore++;}
            if (winScore == 1) {pScore++;}
        } else {
            var playerSelection = window.prompt('Rock, paper or scissor?');
            round = playRound(playerSelection, computerPlay());
            winScore = round [1];
            if (winScore == 0) {cScore = 1; pScore =0;}
            if (winScore == 1) {pScore = 1; cScore =0;}
        }
        if (pScore >= 3) {
            alert('You won!');
        } else if (cScore >= 3) {
            alert('Computer won.');
        } 
    }
}
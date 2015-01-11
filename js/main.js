document.addEventListener('DOMContentLoaded', function(){

    var humanScore = 0;
    var computerScore = 0;

    document.getElementById('rock').onclick = function() {
        console.log('rock click');

        var botChoice = 'paper';

        if(botChoice === 'rock') {
            // TIE - rock ties with rock
            console.log(botChoice, 'TIE');
            // no change in score
        }
        else if(botChoice === 'paper') {
            // LOSE - paper covers rock
            console.log(botChoice, 'LOSE');
            // computer wins:
            computerScore += 1;
        }
        else if(botChoice === 'scissors') {
            // WIN - rock breaks scissors
            console.log(botChoice, 'WIN');
            // human wins
            humanScore += 1;
        }

        console.log('score: ', humanScore, computerScore);

        document.getElementById('status').innerHTML = 'You played rock. The bot played {TEST} . You win! :)';
    }
    document.getElementById('paper').onclick = function() {
        console.log('paper click');
        document.getElementById('status').innerHTML = 'You played paper. The bot played {TEST} . You win! :)';
    }
    document.getElementById('scissors').onclick = function() {
        console.log('scissors click');
        document.getElementById('status').innerHTML = 'You played scissors. The bot played {TEST} . You win! :)';
    }

})

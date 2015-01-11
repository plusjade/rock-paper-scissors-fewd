document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('rock').onclick = function() {
        console.log('rock click');

        var botChoice = 'paper';

        if(botChoice === 'rock') {
            // TIE - rock ties with rock
            console.log(botChoice, 'TIE');
        }
        else if(botChoice === 'paper') {
            // LOSE - paper covers rock
            console.log(botChoice, 'LOSE');
        }
        else if(botChoice === 'scissors') {
            // WIN - rock breaks scissors
            console.log(botChoice, 'WIN');
        }

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

document.addEventListener('DOMContentLoaded', function(){

    var humanScore = 0;
    var computerScore = 0;

    function randomizeBot() {
      var choices = ['rock', 'paper', 'scissors'];
      var indexChoice = Math.floor(Math.random() * 3);
      return choices[indexChoice];
    }

    function updateUI(userChoice, botChoice, result) {
        var resultText;

        if(result === 0) {
            resultText = "tied. :|";
        }
        else if (result === -1 ) {
            resultText = "lose. :(";
        }
        else if (result === 1) {
            resultText = "win! :)";
        }

        document.getElementById('status').innerHTML = 'You played ' + userChoice + '. The bot played '+ botChoice +'.<br>You ' + resultText;
        document.getElementById('humanScore').innerHTML = humanScore;
        document.getElementById('computerScore').innerHTML = computerScore;
    }

    function play(userChoice) {
        var result;
        var botChoice = randomizeBot();

        if (userChoice === 'rock') {
            if(botChoice === 'rock') {
                // TIE - rock ties with rock
                console.log(botChoice, 'TIE');
                // no change in score
                result = 0;
            }
            else if(botChoice === 'paper') {
                // LOSE - paper covers rock
                console.log(botChoice, 'LOSE');
                // computer wins:
                computerScore += 1;
                result = -1;
            }
            else if(botChoice === 'scissors') {
                // WIN - rock breaks scissors
                console.log(botChoice, 'WIN');
                // human wins
                humanScore += 1;
                result = 1;
            }
        }
        else if (userChoice === 'paper') {
            // logic when user plays paper
            if(botChoice === 'rock') {
                // WIN - paper covers rock
                humanScore += 1;
                result = 1;
            }
            else if(botChoice === 'paper') {
                // TIE
                result = 0;
            }
            else if(botChoice === 'scissors') {
                // LOSE - scissors cuts paper
                computerScore += 1;
                result = -1;
            }
        }
        else if (userChoice === 'scissors') {
            // logic when user plays scissors
            if(botChoice === 'rock') {
                // LOSE - rock breaks scissors
                computerScore += 1;
                result = -1;
            }
            else if(botChoice === 'paper') {
                // WIN - scissors cuts paper
                humanScore += 1;
                result = 1;
            }
            else if(botChoice === 'scissors') {
                // TIE
                result = 0;
            }
        }

        console.log('score: ', humanScore, computerScore);

        updateUI(userChoice, botChoice, result);
    }

    document.getElementById('rock').onclick = function() {
        console.log('rock click');

        play('rock');
    }
    document.getElementById('paper').onclick = function() {
        console.log('paper click');

        play('paper');
    }
    document.getElementById('scissors').onclick = function() {
        console.log('scissors click');

        play('scissors');
    }

})

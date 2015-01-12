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
                result = 0;
            }
            else if(botChoice === 'paper') {
                // LOSE - paper covers rock
                computerScore += 1;
                result = -1;
            }
            else if(botChoice === 'scissors') {
                // WIN - rock breaks scissors
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

        updateUI(userChoice, botChoice, result);
    }

    function handleUserChoice(event) {
        var choice = event.target.id;
        play(choice);
    }

    document.getElementById('rock').onclick = handleUserChoice;
    document.getElementById('paper').onclick = handleUserChoice;
    document.getElementById('scissors').onclick = handleUserChoice;
})

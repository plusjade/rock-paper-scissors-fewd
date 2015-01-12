document.addEventListener('DOMContentLoaded', function(){

    var humanScore = 0;
    var computerScore = 0;
    var gameEngine = {
        "rock" : {
            "scissors" : 1,
            "paper" : -1,
            "rock" : 0
        }
        ,
        "paper" : {
            "rock" : 1,
            "scissors" : -1,
            "paper" : 0
        }
        ,
        "scissors" : {
            "paper" : 1,
            "rock" : -1,
            "scissors" : 0
        }
    }

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
        var botChoice = randomizeBot();
        var result = gameEngine[userChoice][botChoice];

        if (result === 1) {
            humanScore += 1;
        }
        else if (result === -1) {
            computerScore += 1;
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

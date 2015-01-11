document.addEventListener('DOMContentLoaded', function(){

    var humanScore = 0;
    var computerScore = 0;

    function randomizeBot() {
      var choices = ['rock', 'paper', 'scissors'];
      var indexChoice = Math.floor(Math.random() * 3);
      return choices[indexChoice];
    }

    document.getElementById('rock').onclick = function() {
        console.log('rock click');

        var botChoice = randomizeBot();
        var result;

        if(botChoice === 'rock') {
            // TIE - rock ties with rock
            console.log(botChoice, 'TIE');
            // no change in score
            result = "tied. :|";
        }
        else if(botChoice === 'paper') {
            // LOSE - paper covers rock
            console.log(botChoice, 'LOSE');
            // computer wins:
            computerScore += 1;
            result = "lose. :(";
        }
        else if(botChoice === 'scissors') {
            // WIN - rock breaks scissors
            console.log(botChoice, 'WIN');
            // human wins
            humanScore += 1;
            result = "win! :)";
        }

        console.log('score: ', humanScore, computerScore);

        document.getElementById('status').innerHTML = 'You played rock. The bot played '+ botChoice +'.<br>You ' + result;
        document.getElementById('humanScore').innerHTML = humanScore;
        document.getElementById('computerScore').innerHTML = computerScore;
    }
    document.getElementById('paper').onclick = function() {
        console.log('paper click');

        var botChoice = randomizeBot();
        var result;

        // logic when user plays paper
        if(botChoice === 'rock') {
            // WIN - paper covers rock
            humanScore += 1;
            result = "win! :)";
        }
        else if(botChoice === 'paper') {
            // TIE
            result = "tied. :|";
        }
        else if(botChoice === 'scissors') {
            // LOSE - scissors cuts paper
            computerScore += 1;
            result = "lose. :(";
        }

        console.log('score: ', humanScore, computerScore);

        document.getElementById('status').innerHTML = 'You played paper. The bot played '+ botChoice +'.<br>You ' + result;
        document.getElementById('humanScore').innerHTML = humanScore;
        document.getElementById('computerScore').innerHTML = computerScore;
    }
    document.getElementById('scissors').onclick = function() {
        console.log('scissors click');

        var botChoice = randomizeBot();
        var result;

        // logic when user plays scissors
        if(botChoice === 'rock') {
            // LOSE - rock breaks scissors
            computerScore += 1;
            result = "lose. :(";
        }
        else if(botChoice === 'paper') {
            // WIN - scissors cuts paper
            humanScore += 1;
            result = "win! :)";
        }
        else if(botChoice === 'scissors') {
            // TIE
            result = "tied. :|";
        }

        console.log('score: ', humanScore, computerScore);

        document.getElementById('status').innerHTML = 'You played scissors. The bot played '+ botChoice +'.<br>You ' + result;
        document.getElementById('humanScore').innerHTML = humanScore;
        document.getElementById('computerScore').innerHTML = computerScore;
    }

})

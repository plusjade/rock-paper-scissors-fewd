document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('rock').onclick = function() {
        console.log('rock click');
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

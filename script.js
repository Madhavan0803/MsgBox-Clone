var messageBox = document.getElementById('messageBox');
var counter = document.getElementById('counter');
var warning = document.getElementById('warning');
var form = document.getElementById('messageForm');
var maxCharacters = 200;

function updateCounter() {
    var currentLength = messageBox.value.length;

    counter.textContent = `${currentLength}/${maxCharacters} characters`;
    
    if (currentLength === maxCharacters) {
        warning.textContent = 'You have reached the character limit!';
        warning.classList.remove('hidden');
    } else {
        warning.classList.add('hidden');
    }
}

messageBox.addEventListener('input', updateCounter);
updateCounter();
// Reinitialisation input form
const form = document.querySelector("#form");
const inputs = document.querySelectorAll('.form-input');

window.addEventListener('beforeunload', function() {
    inputs.forEach(function(input) {
        input.value = '';
    });
});
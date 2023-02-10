let primeClass = document.querySelector('.class')
let primeButton = document.querySelector('.button_class')
primeButton.addEventListener('click', function() {
    primeClass.textContent = "Omni Prime Activated"
})

let bumbleId = document.querySelector('#id_query')
let bumbleButton = document.querySelector('#button_id_query')
bumbleButton.addEventListener('click', function() {
    bumbleId.textContent = "Bumble Bee Activated"
})

let omegaId = document.getElementById('id')
let omegaButton = document.getElementById('button_id')
omegaButton.addEventListener('click', function() {
    omegaId.textContent = "Omega Prime is Activated"
})
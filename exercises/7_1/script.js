let button = document.getElementById('btn');
let cont = document.getElementsByTagName('p');
let clicks = 0;

button.addEventListener('click', function() {
    clicks += 1;
    cont[0].innerText = clicks;
})
var jokes = [
    "All vampires keep their money in a special place—the blood bank!",
    "What do you call someone who can't stick to a diet? A desserter!",
    "I only seem to get sick on weekdays. I must have a weekend immune system.",
    "You can tell it's a dogwood tree from its bark!",
    "What do you call a sheep that knows karate? A lamb chop!"
];

var jokeElement = document.getElementById('joke');
var getJokeBtn = document.getElementById('getJokeBtn');

function getRandomJoke() {
    var randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

getJokeBtn.addEventListener('click', function() {
    jokeElement.textContent = getRandomJoke();
    document.body.style.backgroundColor = getRandomColor();
});
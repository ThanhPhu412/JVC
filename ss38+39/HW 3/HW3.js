var loading = document.getElementById('loading');
var progress = 0;

function incrementProgress() {
    progress++;
    loading.textContent = progress + '%';

    if (progress === 100) {
        loading.classList.add('complete');
    }
}

setInterval(incrementProgress, 20);
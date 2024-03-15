var stepNav = document.getElementById('stepNav');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var steps = Array.from(stepNav.children);
var currentStep = 0;

function updateStepNav() {
    steps.forEach(function(step, index) {
        if (index <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === steps.length - 1;
}

prevBtn.addEventListener('click', function() {
    currentStep--;
    updateStepNav();
});

nextBtn.addEventListener('click', function() {
    currentStep++;
    updateStepNav();
});
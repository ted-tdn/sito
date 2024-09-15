// Funzione per creare l'effetto ripple
function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Aggiungi event listener ai pulsanti
document.getElementById('ted-life').addEventListener('click', function(event) {
    createRipple(event);
    setTimeout(function() {
        window.location.href = 'ted-life.html';
    }, 500); // Ritardo per permettere all'effetto di completarsi
});

document.getElementById('ted-projects').addEventListener('click', function(event) {
    createRipple(event);
    setTimeout(function() {
        window.location.href = 'ted-projects.html';
    }, 500); // Ritardo per permettere all'effetto di completarsi
});
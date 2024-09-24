// Generăm efectul de abur fără imagini
document.addEventListener('DOMContentLoaded', function () {
    const iceImage = document.getElementById('dry-ice');

    function createSmokeEffect() {
        const smoke = document.createElement('div');
        smoke.classList.add('smoke');
        document.body.appendChild(smoke);

        // Plasăm aburul în apropierea imaginii de gheață carbonică
        smoke.style.left = `${iceImage.offsetLeft + (Math.random() * 100) - 50}px`;
        smoke.style.top = `${iceImage.offsetTop + (Math.random() * 50) - 25}px`;

        // Eliminăm elementul după ce animația se termină
        setTimeout(() => {
            smoke.remove();
        }, 6000); // Timpul de viață al aburului
    }

    // Efect continuu, la intervale aleatorii
    setInterval(createSmokeEffect, 1000);
});

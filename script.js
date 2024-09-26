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


function showFooterButtons(button) {
    // Găsește următorul element div care conține butoanele de apelare
    const footerButtons = button.nextElementSibling;
    
    // Verifică dacă sunt vizibile și inversează vizibilitatea
    if (footerButtons.style.display === "none" || footerButtons.style.display === "") {
        footerButtons.style.display = "block";
    } else {
        footerButtons.style.display = "none";
    }
}
function showPopup() {
    console.log("A fost apasat butonul de Contact");
    const popup = document.getElementById("contact-popup");
    popup.style.display = "flex";
}

function closePopup() {
    console.log("Pop-up-ul a fost închis");
    document.getElementById("contact-popup").style.display = "none";
}

// Închide pop-up-ul când dai click în afara lui
window.onclick = function(event) {
    const popup = document.getElementById("contact-popup");
    if (event.target === popup) {
        closePopup();
        console.log("A fost apasat in afara pop-up-ului");
    }
}

// Adaugă un event listener pe link-ul Contact
document.querySelector('nav ul li a[href="#contact"]').addEventListener('click', showPopup);



document.addEventListener('scroll', function() {
    const orderProcess = document.getElementById('order-process');
    const rect = orderProcess.getBoundingClientRect();

    // Verificăm dacă div-ul este vizibil pe ecran
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        // Dacă animația este deja activă, o resetăm
        orderProcess.classList.remove('animate'); // Înlăturăm clasa animate
        void orderProcess.offsetWidth; // Trigger reflow
        orderProcess.classList.add('animate'); // Adăugăm din nou clasa animate
    }
});

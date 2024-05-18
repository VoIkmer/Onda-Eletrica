document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo img");
    if (logo) {
        logo.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});


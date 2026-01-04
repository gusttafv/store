function redirectBasedOnWidth() {
    const isMobile = window.innerWidth < 768;  // Измените 768 на нужный порог

    if (isMobile) {
    window.location.replace("phone/main.html");
    } else {
    window.location.replace("main.html");
    }
}

redirectBasedOnWidth();

window.addEventListener('resize', function() {
    redirectBasedOnWidth();
});

let resizeTimeout;
window.addEventListener('resize', function() {
clearTimeout(resizeTimeout);
resizeTimeout = setTimeout(redirectBasedOnWidth, 300);
});
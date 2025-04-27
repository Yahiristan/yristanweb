const video1 = document.getElementById('projectvideo1');
const video2 = document.getElementById('projectvideo2');
const video3 = document.getElementById('projectvideo3');
const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
const videoList = [video1, video2, video3];
const links = document.querySelectorAll('.social-link');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.dataset.url;
        window.location.href = url;
    });
});

videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
    })
    video.addEventListener('mouseout', function(){
        video.pause()
    })
});

menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

close.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});

document.querySelectorAll('header ul a, .sidebar ul a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Detiene la propagación del evento
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Solo cerrar sidebar si está abierto (móvil/tablet)
            if (window.innerWidth <= 1000) {
                sideBar.classList.remove("open-sidebar");
                sideBar.classList.add("close-sidebar");
            }
        }
    });
});

document.getElementById("miBoton").addEventListener("click", function() {
    window.location.href = "/videogames/2048/2048.html";
});

document.getElementById("miBoton").addEventListener("click", function() {
    window.location.href = "/ds/slider-main/index.html";
});
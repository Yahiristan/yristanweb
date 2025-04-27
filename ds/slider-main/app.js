let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let verUnidadButtons = document.querySelectorAll('.ver-unidad');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// Función para los botones "Ver unidad"
verUnidadButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Detener el carrusel automático cuando se hace clic en un botón
        clearInterval(refreshInterval);
        
        // Redirigir a la página correspondiente según el índice
        const unidadPages = [
            '/ds/unidad1/unidad1.html',
            '/ds/unidad2/unidad2.html',
            '/ds/unidad3/unidad3.html',
            '/ds/unidad4/unidad4.html',
            '/ds/unidad5/unidad5.html'
        ];
        
        // Agregamos una pequeña animación antes de redirigir
        button.classList.add('clicking');
        
        // Esperamos un momento para que se vea la animación antes de redirigir
        setTimeout(() => {
            window.location.href = unidadPages[index];
        }, 300);
    });
});
const lazy = document.querySelectorAll('.lazy');
const img = document.querySelectorAll('img');

function interseccion(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            if (entry.target.classList.contains('lazy')){
                entry.target.src = entry.target.dataset.src;
            }
            observer.unobserve(entry.target);
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}
const observer = new IntersectionObserver(interseccion, options)
lazy.forEach(lazies => {
    observer.observe(lazies);
});

img.forEach(images => {
    observer.observe(images);
});
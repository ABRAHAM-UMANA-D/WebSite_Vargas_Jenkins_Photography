var galleries = document.querySelectorAll('.wrapper-gallery');
var btn_view_more = document.querySelector('.btn-load-more');
var gallery_current = 1

function showMore() {
    for (var i = gallery_current; i < gallery_current + 1; i++) {
        console.log(i);
        if (galleries[i]) {
            console.log(galleries[i]);
            galleries[i].style.display = 'block';
        }   
    }
    gallery_current += 1;
    if(gallery_current>=galleries.length){
        btn_view_more.style.display = 'none'
    }
}
var wrapper_gallery = document.querySelectorAll('.wrapper-gallery');
var btn_load = document.querySelector('.btn-load-more');
var imgCurrent = 1

function showMore() {
    for (var i = imgCurrent; i < imgCurrent + 1; i++) {
        console.log(i);
        if (wrapper_gallery[i]) {
            console.log(wrapper_gallery[i]);
            wrapper_gallery[i].style.display = 'block';
        }   
    }
    imgCurrent += 1;
    if(imgCurrent>=wrapper_gallery.length){
        btn_load.style.display = 'none'
    }
}
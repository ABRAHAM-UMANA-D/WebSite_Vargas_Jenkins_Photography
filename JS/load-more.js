var testimonies = document.querySelectorAll('.wrapper-gallery');
var btn_view_more = document.querySelector('.btn-load-more');
var testimony_current = 1

function showMore() {
    for (var i = testimony_current; i < testimony_current + 1; i++) {
        console.log(i);
        if (testimonies[i]) {
            console.log(testimonies[i]);
            testimonies[i].style.display = 'block';
        }   
    }
    testimony_current += 1;
    if(testimony_current>=testimonies.length){
        btn_view_more.style.display = 'block'
    }
}
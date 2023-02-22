var testimonies = document.querySelectorAll('.wrapper-testimony');
var btn_view_more = document.querySelector('.testimony-view-more');

var testimony_current = 1

function showMore() {
    for (var i = testimony_current; i < testimony_current + 1; i++) {
        if (testimonies[i]) {
            testimonies[i].style.display = 'block';
        }
    }
    testimony_current += 1;
    if (testimony_current >= testimonies.length) {
        btn_view_more.style.display = "none"
    }
}
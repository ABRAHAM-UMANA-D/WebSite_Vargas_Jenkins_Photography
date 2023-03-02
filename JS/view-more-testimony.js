var testimonies = document.querySelectorAll('.hide-testimony');
var btn_view_more = document.getElementById('btn-testimony-view');

var testimony_current = 3

btn_view_more.addEventListener('click', showMore);

function showMore() {
    for (var i = testimony_current; i < testimony_current + 3; i++) {
        if (testimonies[i]) {
            testimonies[i].style.display = 'block';
        }
    }
    testimony_current += 3;
    if (testimony_current >= testimonies.length) {
        btn_view_more.style.display = 'none';
    }
}
var benefits_package = document.querySelectorAll('.benefits');
var btn_load = document.querySelector('.btn-view-more');
var benefitCurrent = 3

function viewMore() {
    for (var i = benefitCurrent; i < benefitCurrent + 3; i++) {
        console.log(i);
        if (benefits_package[i]) {
            console.log(benefits_package[i]);
            benefits_package[i].style.display = 'block';
        }   
    }
    benefitCurrent += 3;
    if(benefitCurrent>=benefits_package.length){
        btn_load.style.display = 'none'
    }
}
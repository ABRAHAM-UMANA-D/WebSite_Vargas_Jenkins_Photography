var benefits_premium = document.querySelectorAll('.benefits');
var benefits_platinum = document.querySelectorAll('.benefits-platinum');
var btn_load = document.querySelector('.btn-view-more');
var btn_load_first = document.getElementById("btn-one");
var btn_load_two = document.getElementById("btn-two");
var btn_load_three = document.getElementById("btn-three");
var benefitCurrent = 3
var planinumCurrent = 3

function viewMore() {
    for (var i = benefitCurrent; i < benefitCurrent + 3; i++) {
        console.log(i);
        if (benefits_premium[i]) {
            console.log(benefits_premium[i]);
            benefits_premium[i].style.display = 'block';
        }   
    }
    benefitCurrent += 3;
    if(benefitCurrent>=benefits_premium.length){
        btn_load_first.style.display = 'none'
    }
}

function viewMorePlatinum() {
    for (var i = planinumCurrent; i < planinumCurrent + 3; i++) {
        console.log(i);
        if (benefits_platinum[i]) {
            console.log(benefits_platinum[i]);
            benefits_platinum[i].style.display = 'block';
        }   
    }
    planinumCurrent += 3;
    if(planinumCurrent>=benefits_platinum.length){
        btn_load_two.style.display = 'none'
    }
}


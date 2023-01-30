var benefits_premium = document.querySelectorAll('.benefits');
var benefits_platinum = document.querySelectorAll('.benefits-platinum');
var benefits_golden = document.querySelectorAll('.benefits-golden');

var btn_load = document.querySelector('.btn-view-more');

var btn_load_first = document.getElementById("btn-one");
var btn_load_two = document.getElementById("btn-two");
var btn_load_three = document.getElementById("btn-three");

var benefitCurrent = 3
var planinumCurrent = 3
var goldenCurrent = 3

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

function viewMoreGolden() {
    for (var i = goldenCurrent; i < goldenCurrent + 3; i++) {
        console.log(i);
        if (benefits_golden[i]) {
            console.log(benefits_golden[i]);
            benefits_golden[i].style.display = 'block';
        }   
    }
    goldenCurrent += 3;
    if(goldenCurrent>=benefits_golden.length){
        btn_load_three.style.display = 'none'
    }
}


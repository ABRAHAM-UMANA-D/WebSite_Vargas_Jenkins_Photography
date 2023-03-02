var benefits_one = document.querySelectorAll('.benefit-one');
var benefits_two = document.querySelectorAll('.benefit-two');
var benefits_three = document.querySelectorAll('.benefit-three');

var btn_load_first = document.getElementById("btn-one");
var btn_load_two = document.getElementById("btn-two");
var btn_load_three = document.getElementById("btn-three");

var benefitCurrent = 1
var benefitSecondCurrent = 1
var benefitsThreeCurrent = 1

function viewMore() {
    for (var i = benefitCurrent; i < benefits_one.length; i++) {
        console.log(i);
        if (benefits_one[i]) {
            console.log(benefits_one[i]);
            benefits_one[i].style.display = 'block';
        }
        btn_load_first.style.display = 'none';
    }
    benefitCurrent += 1;
}

function viewMoreTwo() {
    for (var i = benefitSecondCurrent; i < benefits_two.length; i++) {
        console.log(i);
        if (benefits_two[i]) {
            console.log(benefits_two[i]);
            benefits_two[i].style.display = 'block';
        }
        btn_load_two.style.display = 'none';
    }
    benefitSecondCurrent += 1;
}

function viewMoreThree() {
    for (var i = benefitsThreeCurrent; i < benefits_three.length; i++) {
        console.log(i);
        if (benefits_three[i]) {
            console.log(benefits_three[i]);
            benefits_three[i].style.display = 'block';
        }
        btn_load_three.style.display = 'none'
    }
    benefitsThreeCurrent += 2;
}
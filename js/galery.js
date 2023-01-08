//Creating all variables necesary
const imageContainer = document.querySelectorAll(".galery-page-card"),
  modalContainer = document.querySelector(".Modal-container"),
  previewImg = modalContainer.querySelector("img"),
  closeIcon = modalContainer.querySelector(".icon"),
  currentImg = modalContainer.querySelector(".current-img"),
  totalImg = modalContainer.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");

//Function - Open modal
window.onload = () => {
  for (let i = 0; i < imageContainer.length; i++) {
    totalImg.textContent = imageContainer.length; //passing total img length to totalImg variable
    let newIndex = i; //passing i value to newIndex variable
    let clickedImgIndex; //creating new variable

    imageContainer[i].onclick = () => {
      clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
      function preview() {
        currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
        let imageURL = imageContainer[newIndex].querySelector("img").src; //getting user clicked img url
        previewImg.src = imageURL; //passing user clicked img url in previewImg src
      }
      preview(); //calling above function

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (newIndex == 0) { //if index value is equal to 0 then hide prevBtn
        prevBtn.style.display = "none";
      }
      if (newIndex >= imageContainer.length - 1) { //if index value is greater and equal to imageContainer length by -1 then hide nextBtn
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = () => {
        newIndex--; //decrement index
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      }
      nextBtn.onclick = () => {
        newIndex++; //increment index
        if (newIndex >= imageContainer.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      }
      document.querySelector("body").style.overflow = "hidden";
      modalContainer.classList.add("show");
      shadow.style.display = "block";

      closeIcon.onclick = () => {
        newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        modalContainer.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
      }

    }

  }

}

const imageContaine = document.querySelectorAll(".galery-page-grupal-card"),
  modalContaine = document.querySelector(".Modal-container"),
  previewIm = modalContainer.querySelector("img"),
  closeIco = modalContainer.querySelector(".icon"),
  currentIm = modalContainer.querySelector(".current-img"),
  totalIm = modalContainer.querySelector(".total-img"),
  shado = document.querySelector(".shadow");

//Function - Open modal
window.onload = () => {
  for (let i = 0; i < imageContaine.length; i++) {
    totalIm.textContent = imageContaine.length; //passing total img length to totalImg variable
    let newIndex = i; //passing i value to newIndex variable
    let clickedImgIndex; //creating new variable

    imageContaine[i].onclick = () => {
      clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
      function preview() {
        currentIm.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
        let imageURL = imageContaine[newIndex].querySelector("img").src; //getting user clicked img url
        previewIm.src = imageURL; //passing user clicked img url in previewImg src
      }
      preview(); //calling above function

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (newIndex == 0) { //if index value is equal to 0 then hide prevBtn
        prevBtn.style.display = "none";
      }
      if (newIndex >= imageContaine.length - 1) { //if index value is greater and equal to imageContainer length by -1 then hide nextBtn
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = () => {
        newIndex--; //decrement index
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      }
      nextBtn.onclick = () => {
        newIndex++; //increment index
        if (newIndex >= imageContaine.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      }
      document.querySelector("body").style.overflow = "hidden";
      modalContaine.classList.add("show");
      shado.style.display = "block";

      closeIco.onclick = () => {
        newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        modalContaine.classList.remove("show");
        shado.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
      }

    }

  }

}

var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide-container");
  var btn = document.getElementsByClassName("options");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < btn.length; i++) {
    btn[i].className = btn[i].className.replace(" options-color", "");
  }
  x[slideIndex - 1].style.display = "grid";
  btn[slideIndex - 1].className += " options-color";
}
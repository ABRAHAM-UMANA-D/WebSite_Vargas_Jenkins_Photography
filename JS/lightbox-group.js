/* LIGHTBOX HORIZONTAL IMAGES */
const galleryGroup = document.querySelectorAll(".image-group-box"),
    previewBoxGroup = document.querySelector(".preview-lightbox-horizontal"),
    previewImgGroup = previewBoxGroup.querySelector("img"),
    closeIconGroup = previewBoxGroup.querySelector(".icon-horizontal"),
    currentImgGroup = previewBoxGroup.querySelector(".current-img-horizontal"),
    totalImgGroup = previewBoxGroup.querySelector(".total-img-horizontal"),
    shadowGroup = document.querySelector(".shadow-horizontal");

    window.onload = () => {
        for (let i = 0; i < galleryGroup.length; i++) {
            totalImgGroup.textContent = galleryGroup.length;
            let newIndex = i;
            let clickedImgIndex;
    
            galleryGroup[i].onclick = () => {
                clickedImgIndex = i;
                function preview() {
                    currentImgGroup.textContent = newIndex + 1;
                    let imageURL = galleryGroup[newIndex].querySelector("img").src;
                    previewImgGroup.src = imageURL;
                }
                preview();
    
                const prevBtn = document.querySelector(".prev-img");
                const nextBtn = document.querySelector(".next-img");
    
                if (newIndex == 0) {
                    prevBtn.style.display = "none";
                }
                if (newIndex >= galleryGroup.length - 1) {
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
                    newIndex++; 
                    if (newIndex >= galleryGroup.length - 1) {
                        preview();
                        nextBtn.style.display = "none";
                    } else {
                        preview();
                        prevBtn.style.display = "block";
                    }
                }
                document.querySelector("body").style.overflow = "hidden"; 
                previewBoxGroup.classList.add("show");
                shadowGroup.style.display = "block";
                closeIconGroup.onclick = () => {
                    newIndex = clickedImgIndex; 
                    prevBtn.style.display = "block";
                    nextBtn.style.display = "block";
                    previewBoxGroup.classList.remove("show");
                    shadowGroup.style.display = "none";
                    document.querySelector("body").style.overflow = "scroll";
                }
            }
        }
        console.log(totalImgGroup);
    }
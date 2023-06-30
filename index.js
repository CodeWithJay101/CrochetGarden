const closeBtn = document.querySelector(".close-lightbox");
const promoImgs = document.querySelectorAll(".promo-imgs");
const lightboxImgs = document.querySelectorAll(".lightbox-imgs");
const lightbox = document.querySelector(".lightbox");
const dayImgs = document.querySelectorAll(".day-imgs");
const closeBtn1 = document.querySelector(".close-lightbox1");
const lightbox1 = document.querySelector(".lightbox1");
const lightboxDayImgs = document.querySelectorAll(".lightbox-day-imgs");
const lightboxDayLabels = document.querySelectorAll(".lightbox-day-labels");

function closeLightbox() {
    lightbox.style.display = "none";
}
function closeLightbox1() {
    lightbox1.style.display = "none";
}

function openLightbox1() {
    lightbox1.style.display = "flex";
}
function openLightbox() {
    lightbox.style.display = "flex";
}

dayImgs.forEach(dayImg => {
    dayImg.addEventListener("click", (e) => {
        let target = e.target;
        let parent = target.parentNode.parentNode;
        let index = [].indexOf.call(parent.querySelectorAll(".day-imgs"), target);
        openLightbox1();
        displayDayImg(index);
    })
})

promoImgs.forEach(promoImg => {
    promoImg.addEventListener("click", (e) => {
        let target = e.target;
        let parent = target.parentNode;
        let index = [].indexOf.call(parent.children, target);
        openLightbox();
        displayImg(index);
    });
});

function displayImg(index) {
    for (let i = 0; i < lightboxImgs.length; i++){
        if (index === i) {
            lightboxImgs[i].style.display = "block";
        }
        else {
            lightboxImgs[i].style.display = "none";
        }
    }
}
function displayDayImg(index) {
    for (let i = 0; i < lightboxDayImgs.length; i++){
        if (index === i) {
            lightboxDayImgs[i].style.display = "block";
            lightboxDayLabels[i].style.display = "block";
        }
        else {
            lightboxDayImgs[i].style.display = "none";
            lightboxDayLabels[i].style.display = "none";
        }
    }
}

closeBtn.addEventListener("click", closeLightbox);
closeBtn1.addEventListener("click", closeLightbox1);
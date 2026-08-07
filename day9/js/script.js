const slides = document.querySelectorAll(".hero-slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentSlide = 0;
let heroTimer;

function showSlide(index){
    slides.forEach(slide=>{
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}

function nextSlide(){
    currentSlide++;
    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function previousSlide(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

function restartHeroTimer(){
    clearInterval(heroTimer);
    heroTimer = setInterval(nextSlide,5500);
}

if(nextBtn){
    nextBtn.addEventListener("click",()=>{
        nextSlide();
        restartHeroTimer();
    });
}

if(prevBtn){
    prevBtn.addEventListener("click",()=>{
        previousSlide();
        restartHeroTimer();
    });
}

if(slides.length){
    restartHeroTimer();
}

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

if(menu){
    menu.addEventListener("click",()=>{
        navbar.classList.toggle("show");
    });
}

if(navbar){
    navbar.querySelectorAll("a").forEach(link=>{
        link.addEventListener("click",()=>{
            navbar.classList.remove("show");
        });
    });
}

const header = document.querySelector(".header");

function updateHeader(){
    if(!header) return;

    if(window.scrollY > 80){
        header.classList.add("scrolled");
        header.style.background = "rgba(5,5,5,0.92)";
    }else{
        header.classList.remove("scrolled");
        header.style.background = "rgba(5,5,5,0.55)";
    }
}

window.addEventListener("scroll",updateHeader);
updateHeader();

const revealElements = document.querySelectorAll(
    ".feature-grid article, .leader-card, .editor-grid img, .article-grid article, .mag-card, .profile-card, .info-box, .achievement > div"
);

revealElements.forEach(el=>{
    el.classList.add("reveal");
});

if("IntersectionObserver" in window){
    const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },{threshold:0.15});

    revealElements.forEach(el=>{
        observer.observe(el);
    });
}else{
    revealElements.forEach(el=>{
        el.classList.add("visible");
    });
}

const coverItems = document.querySelectorAll(".cover-item");
const cfNextBtn = document.querySelector(".cf-next");
const cfPrevBtn = document.querySelector(".cf-prev");
let cfIndex = 0;
let cfTimer;

function updateCoverflow(){
    const total = coverItems.length;

    coverItems.forEach((item,i)=>{
        let offset = i - cfIndex;

        if(offset > total/2) offset -= total;
        if(offset < -total/2) offset += total;

        const abs = Math.abs(offset);
        const translateX = offset * 130;
        const scale = abs === 0 ? 1 : Math.max(0.62,1 - abs * 0.16);
        const rotateY = offset * -28;
        const opacity = abs > 2 ? 0 : 1 - abs * 0.3;
        const zIndex = 10 - abs;

        item.style.transform =
            "translate(-50%,-50%) translateX(" + translateX + "px) scale(" + scale + ") rotateY(" + rotateY + "deg)";
        item.style.opacity = opacity;
        item.style.zIndex = zIndex;
        item.classList.toggle("cf-active",offset === 0);
    });
}

function nextCover(){
    cfIndex++;
    if(cfIndex >= coverItems.length){
        cfIndex = 0;
    }
    updateCoverflow();
}

function previousCover(){
    cfIndex--;
    if(cfIndex < 0){
        cfIndex = coverItems.length - 1;
    }
    updateCoverflow();
}

function restartCoverTimer(){
    clearInterval(cfTimer);
    cfTimer = setInterval(nextCover,3200);
}

if(cfNextBtn){
    cfNextBtn.addEventListener("click",()=>{
        nextCover();
        restartCoverTimer();
    });
}

if(cfPrevBtn){
    cfPrevBtn.addEventListener("click",()=>{
        previousCover();
        restartCoverTimer();
    });
}

coverItems.forEach((item,i)=>{
    item.addEventListener("click",()=>{
        cfIndex = i;
        updateCoverflow();
        restartCoverTimer();
    });
});

if(coverItems.length){
    updateCoverflow();
    restartCoverTimer();
}
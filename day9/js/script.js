const slides = document.querySelectorAll(".hero-slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentSlide = 0;
let heroTimer;

function showSlide(index){
slides.forEach(slide=>{
slide.classList.remove("active");});
slides[index].classList.add("active");}

function nextSlide(){
currentSlide++;
if(currentSlide >= slides.length){
currentSlide = 0;}
showSlide(currentSlide);}

function previousSlide(){
currentSlide--;
if(currentSlide < 0){
currentSlide = slides.length - 1;}
showSlide(currentSlide);}

function restartHeroTimer(){
clearInterval(heroTimer);
heroTimer = setInterval(nextSlide, 5500);}
if(nextBtn){
nextBtn.addEventListener("click",()=>{
nextSlide();
restartHeroTimer();});}
if(prevBtn){
prevBtn.addEventListener("click",()=>{
previousSlide();
restartHeroTimer();});}
if(slides.length){
restartHeroTimer();}
const menu =
document.querySelector(".menu");
const navbar =
document.querySelector(".navbar");
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
}
else{
header.classList.remove("scrolled");
header.style.background = "rgba(5,5,5,0.55)";}}
window.addEventListener("scroll", updateHeader);
updateHeader();
const revealElements = document.querySelectorAll(
".feature-grid article, .leader-card, .editor-grid img, .article-grid article, .mag-card, .profile-card, .info-box, .achievement > div"
);
revealElements.forEach(el=>{
el.classList.add("reveal");
});
if("IntersectionObserver" in window){
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
observer.unobserve(entry.target);
}
});
},{ threshold: 0.15 });
revealElements.forEach(el=>{
observer.observe(el);
});
}
else{
revealElements.forEach(el=>{
el.classList.add("visible");
});
}
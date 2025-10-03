let scrollbar =document.querySelector(".scrollbar .bar");
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll',scroll)
function scroll(){
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop/scrollHeight)*100;
    scrollbar.style.width = `${scrolled}%`;
}


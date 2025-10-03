let typedText = document.querySelector('.typed-text');
let cursor = document.querySelector('.cursor');

let words = ["Awesome","Fun","Cool","Famous"];
let typingDelay = 200;
let erasingDelay = 200;
let newLetterDelay = 1000;
let charIndex = 0;
let index = 0;

document.addEventListener("DOMContentLoaded",()=>{
    if(words.length){
        setTimeout(type,newLetterDelay);
    }
})

let type = ()=>{
    if(charIndex<words[index].length){
        typedText.textContent += words[index][charIndex];
        charIndex++;
        setTimeout(type,typingDelay);
    }
    else{
        setTimeout(erase,newLetterDelay);
    }
}

let erase = ()=>{
    if(charIndex>0){
        typedText.textContent = words[index].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
    }
    else{
        index++;
        if(index>=words.length){
            index = 0;
        }
        setTimeout(type,typingDelay+1100);
    }
}

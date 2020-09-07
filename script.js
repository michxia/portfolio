const text = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const sentences = ["Hello world!", "I'm Michelle!"];
const typingDelay = 200;
const deletingDelay = 100;
const newTextDelay = 2000;

let sentencesIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < sentences[sentencesIndex].length){
        if(!cursor.classList.contains("typing")) {
            cursor.classList.add("typing");
        }
        text.textContent += sentences[sentencesIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingDelay);
    }
    else {
        cursor.classList.remove("typing");
        setTimeout(deleteText, newTextDelay);
    }

}

function deleteText() {
    if(charIndex > 0 & sentencesIndex < sentences.length - 1) {
        if(!cursor.classList.contains("typing")) {
            cursor.classList.add("typing");
        }
        text.textContent = sentences[sentencesIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, deletingDelay);
    }
    else {
        cursor.classList.remove("typing");
        sentencesIndex++;
        setTimeout(typeText, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeText, newTextDelay);
});
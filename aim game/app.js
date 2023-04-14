const button = document.querySelector("button");
const h1 = document.querySelector("h1");
let count = 0;

button.addEventListener("click", () =>{
    count++
    const butWidth = Math.floor(Math.random() * 1821)
    const butHeight = Math.floor(Math.random() *811)
    const margin = `${butHeight}px ${butWidth}px`
    h1.innerText = count;
    button.style.margin = margin;
})
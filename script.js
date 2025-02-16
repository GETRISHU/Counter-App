let heading= document.querySelector('h1')
let content = heading.textContent;


function Increment() {
    content++;  
    heading.textContent = content;  
}

function Decrement() {
    content--;  
    heading.textContent = content;  
}

function Reset() {
    content = 0;  
    heading.textContent = content;  
}

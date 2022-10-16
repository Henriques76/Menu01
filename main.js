const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click",controlaMenu);

function controlaMenu(){
    ul.classList.toggle("show");
}


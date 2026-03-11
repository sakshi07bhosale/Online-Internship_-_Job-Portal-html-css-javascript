const themeToggle = document.getElementById("themeToggle");

/* page load hone par saved theme apply */

window.addEventListener("load", () => {

let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
document.body.classList.add("dark");
themeToggle.innerText = "☀️";
}else{
themeToggle.innerText = "🌙";
}

});

/* toggle */

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
themeToggle.innerText="☀️";
}else{
localStorage.setItem("theme","light");
themeToggle.innerText="🌙";
}

});



function searchJobs() {

    let jobInput = document.getElementById("jobSearch").value.toLowerCase();
    let locationInput = document.getElementById("locationSearch").value.toLowerCase();

    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        let jobTitle = cards[i].querySelector(".job-title").innerText.toLowerCase();
        let location = cards[i].innerText.toLowerCase();

        if (jobTitle.includes(jobInput) && location.includes(locationInput)) {
            cards[i].style.display = "block";
        } 
        else {
            cards[i].style.display = "none";
        }
    }
}

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.onclick = function () {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggleBtn.innerHTML = "☀️";
    }
    else{
        toggleBtn.innerHTML = "🌙";
    }
}
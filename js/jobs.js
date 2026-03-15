function searchJobs() {

    let jobInput = document.getElementById("jobSearch").value.toLowerCase();
    let locationInput = document.getElementById("locationSearch").value.toLowerCase();

    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        let text = cards[i].innerText.toLowerCase();

        if (text.includes(jobInput) && text.includes(locationInput)) {
            cards[i].style.display = "";
        }
        else {
            cards[i].style.display = "none";
        }

    }

}

function showjob() {
    window.location.href = "job-details.html";
}

function viewJob(button) {

    let card = button.closest(".card");

    let title = card.querySelector(".job-title").innerText;

    localStorage.setItem("jobTitle", title);

    window.location.href = "job-details.html";

}
let cards = document.querySelectorAll(".card");

cards.forEach(function (card) {

    card.addEventListener("click", function () {

        card.style.border = "2px solid blue";

    });

});
function applyJob(){
alert("Application Submitted Successfully!");
}
function viewJob(job){

if(job == "web"){
window.location.href="job-details.html";
}

if(job == "uiux"){
window.location.href="uiux-job.html";
}

if(job == "data"){
window.location.href="data-job.html";
}

if(job == "python"){
window.location.href="python-job.html";
}

}
function applyJob(){

document.getElementById("msg").innerHTML="Applied Successfully";

const { jsPDF } = window.jspdf;

let doc = new jsPDF();

let title = document.getElementById("title").innerText;
let company = document.getElementById("company").innerText;
let location = document.getElementById("location").innerText;
let salary = document.getElementById("salary").innerText;
let type = document.getElementById("type").innerText;

doc.text("Internship Application",20,20);
doc.text("Job Title: " + title,20,40);
doc.text(company,20,50);
doc.text(location,20,60);
doc.text(salary,20,70);
doc.text(type,20,80);

doc.save("Application.pdf");

}
function viewDetails(page){
window.location.href = page;
}
function showDetails(){
alert("Opening Job Details...");
window.location.href="job-details.html";
}

function viewDetails(job){

localStorage.setItem("selectedJob", job);

window.location.href="job-details.html";

}
let job = localStorage.getItem("selectedJob");

if(job === "frontend"){

document.getElementById("jobTitle").innerHTML="Frontend Developer";
document.getElementById("company").innerHTML="Company: Capgemini";
document.getElementById("location").innerHTML="Location: Remote";
document.getElementById("salary").innerHTML="Salary: ₹5 LPA";

}

else if(job === "backend"){

document.getElementById("jobTitle").innerHTML="Backend Developer";
document.getElementById("company").innerHTML="Company: TCS";
document.getElementById("location").innerHTML="Location: Bangalore";
document.getElementById("salary").innerHTML="Salary: ₹6 LPA";

}
function applyJob(){

alert("Application Submitted Successfully!");

const text = `
Job Application

Job Title: Web Developer
Company: Tech Solutions
Location: Pune
Skills: HTML, CSS, JavaScript
Experience: 0-2 Years
`;

const blob = new Blob([text], {type:"application/pdf"});

const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "job_application.pdf";
link.click();

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


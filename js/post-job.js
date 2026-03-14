function postJob() {
    let title = document.getElementById("title").value;
    let location = document.getElementById("location").value;
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").value;

    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.push({ title, location, type, description });
    localStorage.setItem("jobs", JSON.stringify(jobs));
    alert("Job Posted Successfully!");
    window.location.href = "jobs.html";
}

// Apply Job
function applyJob(index) {
    let applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.push({ jobIndex: index, date: new Date().toLocaleString() });
    localStorage.setItem("applications", JSON.stringify(applications));
    alert("Applied Successfully!");
}
// img gallay

const IMAGES = [
    {
        url: "./../images/1.jpg",
        title: "CapGemini",
        description2: "Address: Yosemite - Block A, Capgemini SEZ..."
    },
    {
        url: "./../images/2.jpg",
        title: "TCS",
        description2: "Address: Parab Nagar, Nashik, Maharashtra 422006."
    },
    {
        url: "./../images/3.jpg",
        title: "WIPRO",
        description2: "Address: Plot No.31 MIDC, Hinjawadi Phase 2 Rd, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune."
    },
    {
        url: "./../images/4.jpg",
        title: "Cognizant",
        description2: "Address: DLF Cybercity Plot.No: 129,130,131 & 132, Gachibowli Rd, APHB Colony, Hyderabad."
    },
    {
        url: "./../images/5.jpg",
        title: "IBM",
        description2:"Address: TOWER-B, 191A/2a/1/2, Loop Rd, off Airport Road, next to Don Bosco School Road, Shastrinagar, Yerawada, Pune."
    },
    {
        url:"./../images/6.jpg",
        title: "Tech Mahindra Americas",
        description2: "5th Delta One Giga Space IT Park Internal Road Viman Nagar Pune Maharashtra 411014 IN, Giga Space IT Park Internal Rd, Sakore Nagar, Viman Nagar, Pune."
    },
    {
        url: "./../images/7.jpg",
        title: "HCLTech",
        description2: "Tower 7, Wing A & B, Magarpatta SEZ Entrance, Cybercity, Magarpatta, Hadapsar, Pune."
    },
    {
        url: "./../images/8.jpg",
        title: "Oracle India",
        description2: "Address: Salarpuria Cyber Park, Plot no 67, Hitech City Rd, Jubilee Enclave, HITEC City, Hyderabad."
    }
]
let currentIndex = 1;
function showCurrentIndexImage() {
    const imgElement = document.getElementById("mainImage");
    const headerElement = document.getElementById("companyTitle");
    const descriptionElement = document.getElementById("companyAddress");

    const currentImage = IMAGES[currentIndex];

    imgElement.src = currentImage.url;
    headerElement.innerText = currentImage.title;
    descriptionElement.innerText = currentImage.description2;
}
function slideLeft() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    else {
        currentIndex = IMAGES.length - 1;
    }
    showCurrentIndexImage();
}
function slideRight() {
    if (currentIndex < IMAGES.length - 1) {
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    showCurrentIndexImage();
}
function showImage(index) {
    currentIndex = index;
    showCurrentIndexImage();
}
function createGalleryPreview() {
    const galleryPreviewContainer = document.getElementById("gallery-preview");
    galleryPreviewContainer.innerHTML = "";
    for (let i = 0; i < IMAGES.length; i++) {
        const currentImage = IMAGES[i];
        galleryPreviewContainer.innerHTML += `<img src='${currentImage.url}' class='preview-img'
                onclick='showImage(${i})'/>`;
    }
}
createGalleryPreview();

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
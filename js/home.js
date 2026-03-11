/* JOB DATA */

let jobs= [

{
title:"Frontend Developer Intern",
company:"Google",
location:"Pune",
type:"Internship",
salary:"15000/month"
},

{
title:"Frontend Developer",
company:"Amazon",
location:"Mumbai",
type:"Full Time",
salary:"40000/month"
},

{
title:"Frontend Developer",
company:"Flipkart",
location:"Bangalore",
type:"Full Time",
salary:"45000/month"
},

{
title:"Frontend Developer",
company:"Wipro",
location:"Hyderabad",
type:"Internship",
salary:"18000/month"
},

{
title:"Backend Developer",
company:"Microsoft",
location:"Mumbai",
type:"Full Time",
salary:"60000/month"
},

{
title:"Backend Developer",
company:"IBM",
location:"Pune",
type:"Full Time",
salary:"55000/month"
},

{
title:"Backend Developer",
company:"Oracle",
location:"Bangalore",
type:"Full Time",
salary:"52000/month"
},

{
title:"Backend Developer",
company:"Accenture",
location:"Hyderabad",
type:"Full Time",
salary:"50000/month"
},

{
title:"Web Designer",
company:"Infosys",
location:"Bangalore",
type:"Internship",
salary:"12000/month"
},

{
title:"Web Designer",
company:"TCS",
location:"Mumbai",
type:"Full Time",
salary:"35000/month"
},

{
title:"Web Designer",
company:"Capgemini",
location:"Pune",
type:"Full Time",
salary:"30000/month"
},

{
title:"Web Designer",
company:"HCL",
location:"Hyderabad",
type:"Internship",
salary:"15000/month"
},

{
title:"Java Developer",
company:"TCS",
location:"Hyderabad",
type:"Full Time",
salary:"50000/month"
},

{
title:"Java Developer",
company:"Cognizant",
location:"Pune",
type:"Full Time",
salary:"48000/month"
},

{
title:"Java Developer",
company:"Dell",
location:"Bangalore",
type:"Full Time",
salary:"52000/month"
},

{
title:"Java Developer",
company:"Zoho",
location:"Mumbai",
type:"Full Time",
salary:"47000/month"
}
]

/* LOAD JOBS */

function loadJobs(list = jobs){

let container=document.getElementById("jobContainer")

container.innerHTML=""

list.forEach(function(job,index){

container.innerHTML+=`

<div class="job-card">

<h3>${job.title}</h3>

<p><b>Company:</b> ${job.company}</p>

<p><b>Location:</b> ${job.location}</p>

<p><b>Type:</b> ${job.type}</p>

<p><b>salary:</b> ${job.salary}</p>

<button onclick="showDetails(${index})">View Details</button>

</div>

`

})

}

loadJobs([jobs[0],jobs[4],jobs[8],jobs[12]])
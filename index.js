document.querySelector("#form").addEventListener("submit", JobApplication);
let jobAr;

if (localStorage.getItem("jobList") !== null) {
  jobArr = JSON.parse(localStorage.getItem("jobList"));
} else {
  jobArr = [];
}

function JobApplication() {
  event.preventDefault();
  let jobObj = {
    PersonName: form.name.value,
    personEmail: form.email.value,
    personRle: form.role.value,
    personSalary: form.salary.value,
    // personName: document.querySelector("#name").value,
    // personEmail: document.querySelector("#email").value,
    // personRole: document.querySelector("#role").value,

    // personSalary: document.querySelector("#salary").value,
  };
  // console.log(jobObj);
  jobArr.push(jobObj);

  localStorage.setItem("jobList", JSON.stringify(jobArr));

  window.location.href = "./applicatin.html";
}

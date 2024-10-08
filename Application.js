let jobArr = JSON.parse(localStorage.getItem("jobList"));
// console.log(jobAr);
jobArr.forEach(function (element) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = element.PersonName;
  let td2 = document.createElement("td");
  td2.innerText = element.personEmail;
  let td3 = document.createElement("td");
  td3.innerText = element.personRle;
  let td4 = document.createElement("td");
  td4.innerText = element.personSalary;
  let td5 = document.createElement("td");
  td5.innerText = "book mark";

  td5.addEventListener("click", function () {
    bookmarkFun(element);
  });

  tr.append(td1, td2, td3, td4, td5);

  document.querySelector("tbody").append(tr);
});

let bookMarkArr = JSON.parse(localStorage.getItem("bookmarks")) || [];
function bookmarkFun(element) {
  bookMarkArr.push(element);
  localStorage.setItem("bookMark", JSON.stringify(element));
}

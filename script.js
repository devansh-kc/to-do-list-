const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.querySelector(".Add");
const remove = document.getElementById("delete");

function addFunc() {
  if (document.querySelector(".row input ").value.length == 0) {
    alert("please enter something to  add");
  } else {
    document.getElementById("list-container").innerHTML += `
        <li >
            ${document.querySelector(".row input").value}
            
        </li>

         `;
    saveData();
  }
}

button.addEventListener("click", addFunc);
listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.classList === "delete") {
      event.target.parentElement.remove();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

getData();

// function for clicking select button
// creating ordered list
const ol = document.createElement("ol");
function getName(btnId) {
  document.getElementById(btnId).addEventListener("click", function () {
    const buttonElement = document.getElementById(btnId);
    const titleHtml = buttonElement.parentNode.childNodes[1];
    // getting player name title
    const title = titleHtml.innerText;
    // creating list and styling this
    const li = document.createElement("li");
    li.innerText = title;
    li.style.fontSize = "1.5rem";
    ol.appendChild(li);
    // append orderd list into selected part
    const selected = document.getElementById("selected-part");
    selected.appendChild(ol);
    buttonElement.setAttribute("disabled", "");
    buttonElement.style.background = "#20273A";
  });
}

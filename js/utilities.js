// function for selected anf budget button
// creating ordered list
const ol = document.createElement("ol");
function getName(btnId) {
  document.getElementById(btnId).addEventListener("click", function () {
    //  alert - if want to select more then 5 player
    if (ol.children.length > 4) {
      alert("Sorry! You can't select more players");
      return ol;
    }
    // getting player name title
    const buttonElement = document.getElementById(btnId);
    const titleHtml = buttonElement.parentNode.childNodes[1];
    const title = titleHtml.innerText;
    // creating list and styling the list
    const li = document.createElement("li");
    li.innerText = title;
    li.style.fontSize = "1.5rem";
    ol.appendChild(li);
    // append orderd list into selected part
    const selectedPart = document.getElementById("selected-part");
    selectedPart.appendChild(ol);
    buttonElement.setAttribute("disabled", "");
    buttonElement.style.background = "#20273A";
  });
}

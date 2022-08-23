// COMMON FUNCTION FOR GET INPUT VALUES
function getInputValue(inputId) {
  const inputElement = document.getElementById(inputId);
  const inputValue = parseFloat(inputElement.value);
  return inputValue;
}

// FUNTION FOR SELECTED AND BUDGET PART
// Creating ordered list
let ol = document.createElement("ol");
function getName(btnId) {
  // <------ Selected Part Start ------>
  document.getElementById(btnId).addEventListener("click", function () {
    //  alert - if want to select more then 5 player
    if (ol.children.length > 4) {
      alert("Sorry! You can't select more players");
      return ol;
    }
    // Getting player names
    const buttonElement = document.getElementById(btnId);
    const titleHtml = buttonElement.parentNode.childNodes[1];
    const title = titleHtml.innerText;
    // Creating and styling the list
    const li = document.createElement("li");
    li.innerText = title;
    li.style.fontSize = "1.35rem";
    ol.appendChild(li);
    // append orderd list into selected-part
    const selectedPart = document.getElementById("selected-part");
    selectedPart.appendChild(ol);
    // After clicking button, button will be disabled and changed background-color
    buttonElement.setAttribute("disabled", true);
    buttonElement.style.background = "#20273A";
    // <------ Selected Part End ------>

    // <------ Budget Part Start ------>
    //  Calculating selected players expenses
    document.getElementById("calculate").addEventListener("click", function () {
      // Getting total number of selected player
      const playerTotal = ol.children.length;
      const perPlayerAmount = getInputValue("per-player-input");
      // Getting all selected players total expenses
      const allPlayerAmount = perPlayerAmount * playerTotal;
      const playerExpensesElement = document.getElementById("player-expenses");
      playerExpensesElement.innerText = allPlayerAmount;
      // Calculating selected players, manager and coach total expenses
      document
        .getElementById("calculate-total")
        .addEventListener("click", function () {
          const managerAmount = getInputValue("manager-input");
          const coachAmount = getInputValue("coach-input");
          // Adding total expenses of selected players, manager and coach
          const totalExpenses = allPlayerAmount + managerAmount + coachAmount;
          const totalExpensesElement =
            document.getElementById("total-expenses");
          totalExpensesElement.innerText = totalExpenses;
          // <------ Budget Part End ------>
        });
    });
  });
}

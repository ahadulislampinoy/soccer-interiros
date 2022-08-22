// common function for get input value
function getInputValue(inputId) {
  const inputElement = document.getElementById(inputId);
  const inputValue = parseFloat(inputElement.value);
  return inputValue;
}

// function for selected and budget button
// creating ordered list
let ol = document.createElement("ol");
function getName(btnId) {
  // selected part start
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
    const playerTotal = ol.children.length;
    // selected part end

    // budget part start
    // calculate per player expense
    document.getElementById("calculate").addEventListener("click", function () {
      // getting total selected player number
      const playerTotal = ol.children.length;
      const perPlayerAmount = getInputValue("per-player-input");
      // getting total all player expenses
      const allPlayerAmount = perPlayerAmount * playerTotal;
      const playerExpensesElement = document.getElementById("player-expenses");
      playerExpensesElement.innerText = allPlayerAmount;
      //calculate all player total expenses
      document
        .getElementById("calculate-total")
        .addEventListener("click", function () {
          const managerAmount = getInputValue("manager-input");
          const coachAmount = getInputValue("coach-input");
          const totalExpenses = allPlayerAmount + managerAmount + coachAmount;
          const totalExpensesElement =
            document.getElementById("total-expenses");
          totalExpensesElement.innerText = totalExpenses;
          // budget part end
        });
    });
  });
}

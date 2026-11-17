const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkBtn");
const resultDisplay = document.getElementById("result");

function checkInput() {
  const rawValue = userInput.value.trim();

  // Handle empty/whitespace-only input first (Number("") evaluates to 0 otherwise)
  if (rawValue === "") {
    resultDisplay.textContent = "Please enter a valid number!";
    return;
  }

  const numericValue = Number(rawValue);

  if (Number.isNaN(numericValue)) {
    resultDisplay.textContent = "Please enter a valid number!";
  } else if (numericValue < 10) {
    resultDisplay.textContent = "The number is lower than 10";
  } else if (numericValue > 10) {
    resultDisplay.textContent = "The number is higher than 10";
  } else {
    resultDisplay.textContent = "The number is equal to 10";
  }
}

checkButton.addEventListener("click", checkInput);
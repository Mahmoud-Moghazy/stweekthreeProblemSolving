const addToFilteringArrayBtn = document.getElementById(
  "addToFilteringArrayBtn"
);
const filteringArrayBtn = document.getElementById("filteringArrayBtn");
const filterResult = document.getElementById("filterResult");

const arrayFiltering = [];

const showNotification = (message, sec, type = "success") => {
  const notification = document.createElement("div");
  notification.className = `alert alert-${type} position-absolute top-0 end-0 m-3 z-3`;
  notification.innerText = message;
  notification.role = "alert";

  document.getElementsByTagName("section")[sec].appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
};

const clearInput = (inputField) => {
  inputField.value = "";
};

const addToArray = (inputId, array, resultContainer, resultId, sec) => {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value.trim();

  if (!isNaN(inputValue) && inputValue !== "") {
    array.push(inputValue);
    showNotification("Added to array. You can add more.", sec);
    resultContainer.querySelector(resultId).innerText = `[ ${array.join(
      ", "
    )} ]`;
    clearInput(inputField);
  } else {
    showNotification("You must provide a valid number", sec, "danger");
    clearInput(inputField);
  }
  inputField.focus();
};

const filterEvenNumbers = (arr) => {
  return arr.length > 0 ? arr.filter((num) => num % 2 === 0) : [];
};

const filterArray = () => {
  const resultText = document.getElementById("filtered");
  const filteredResult = filterEvenNumbers(arrayFiltering);

  if (filteredResult.length === 0) {
    showNotification("No even numbers found.", 0, "danger");
    resultText.innerText = "There are no even numbers.";
  } else {
    resultText.innerText = `[ ${filteredResult.join(", ")} ]`;
  }
};

addToFilteringArrayBtn.addEventListener("click", () => {
  addToArray(
    "filteringArrayInput",
    arrayFiltering,
    filterResult,
    "#filteringArrayCreated",
    0
  );
});

filteringArrayBtn.addEventListener("click", filterArray);
//!==========================================================================================================
const addToLargestNumberArrayBtn = document.getElementById(
  "addToLargestNumberArrayBtn"
);
const findLargestNumberBtn = document.getElementById("findLargestNumberBtn");
const largestNumberResult = document.getElementById("largestNumberResult");

const largestNumberArray = [];

const findLargestNumber = (arr) => {
  return arr.length > 0 ? Math.max(...arr) : null;
};

const findLargest = () => {
  const resultText = document.getElementById("largestNumber");
  const largest = findLargestNumber(largestNumberArray);

  if (largest === null) {
    showNotification("You must create an array.", 1, "danger");
    resultText.innerText = "No numbers available.";
  } else {
    resultText.innerText = largest;
  }
};

addToLargestNumberArrayBtn.addEventListener("click", () => {
  addToArray(
    "largestNumberArrayInput",
    largestNumberArray,
    largestNumberResult,
    "#largestNumberArrayCreated",
    1
  );
});

findLargestNumberBtn.addEventListener("click", findLargest);

//!==========================================================================================================
const addStringBtn = document.getElementById("addStringBtn");
const reverseStringBtn = document.getElementById("reverseStringBtn");
const reverseStringResult = document.getElementById("reverseStringResult");

let string = "";

const reverseString = (str) => {
  return str ? str.split("").reverse().join("") : null;
};

const addString = () => {
  const inputField = document.getElementById("stringInput");
  const inputValue = inputField.value.trim();

  if (inputValue !== "" && isNaN(inputValue)) {
    string = inputValue;
    showNotification("Added a String Successfully", 2);
    reverseStringResult.querySelector("#reverseStringCreated").innerText =
      inputValue;
    clearInput(inputField);
  } else {
    showNotification("You must provide a String", 2, "danger");
    clearInput(inputField);
  }
  inputField.focus();
};

const reverse = () => {
  const resultText = document.getElementById("srtingReversed");
  const reversed = reverseString(string);

  if (reversed === null) {
    showNotification("You must create a String.", 2, "danger");
    resultText.innerText = "No String available.";
  } else {
    resultText.innerText = reversed;
  }
};

addStringBtn.addEventListener("click", addString);
reverseStringBtn.addEventListener("click", reverse);
//!==========================================================================================================
const addToDuplicatesArrayBtn = document.getElementById(
  "addToDuplicatesArrayBtn"
);
const removeDuplicatesBtn = document.getElementById("removeDuplicatesBtn");
const removeDuplicatesResult = document.getElementById(
  "removeDuplicatesResult"
);

const removeDuplicatesArray = [];

const removeDuplicates = (arr) => {
  return arr.length > 0 ? [...new Set(arr)] : [];
};

const removeDuplicate = () => {
  const resultText = document.getElementById("removeDuplicates");
  const removeDuplicatesResult = removeDuplicates(removeDuplicatesArray);

  if (removeDuplicatesResult.length === 0) {
    showNotification("You must create array.", 3, "danger");
    resultText.innerText = "No Array available.";
  } else {
    resultText.innerText = `[ ${removeDuplicatesResult.join(", ")} ]`;
  }
};

addToDuplicatesArrayBtn.addEventListener("click", () => {
  addToArray(
    "duplicatesArrayInput",
    removeDuplicatesArray,
    removeDuplicatesResult,
    "#removeDuplicatesCreated",
    3
  );
});
removeDuplicatesBtn.addEventListener("click", removeDuplicate);
//! =========================================================================================================


let input = document.querySelector("input");
let button = document.querySelector("button");
let str = document.getElementById("str");
let isPalindrome = document.getElementById("palindrome");

function checkPalindrome() {
  let inputValue = input.value;
  let string = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (!inputValue) {
    return;
  } else if (string === string.split("").reverse().join("")) {
    str.innerText = inputValue;
    isPalindrome.innerText = "Palindrome";
    isPalindrome.style.color = "green";
  } else {
    str.innerText = inputValue;
    isPalindrome.innerText = "Not-palindrome";
    isPalindrome.style.color = "red";
  }

  input.value = "";
}

button.addEventListener("click", checkPalindrome);

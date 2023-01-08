let input = document.querySelector("input");
let button = document.querySelector("button");
let str = document.getElementById("str");
let isPalindrome = document.getElementById("palindrome");

function checkPalindrome() {
  inputValue = input.value;
  string = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (string === string.split("").reverse().join("")) {
    str.innerText = inputValue;
    isPalindrome.innerText = "Palindrome";
    isPalindrome.style.color = "green";
  } else {
    str.innerText = inputValue;
    isPalindrome.innerText = "Not-palindrome";
    isPalindrome.style.color = "red";
  }
}

button.addEventListener("click", checkPalindrome);

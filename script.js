const btn = document.getElementById("changeTextButton");

btn.addEventListener("click", () => {
  let username = document.getElementById("name");
  const changedText = document.getElementById("message");

  if (username.value === "") {
    alert("Please enter a username");
  } else {
    changedText.textContent = `Hello ${username.value}`;
  }
});

let changeTextButton2 = document.getElementById("changeTextButton2");
changeTextButton2.addEventListener("click", () => {
  let myUsername = document.getElementById("name2");
  let message2 = document.getElementById("message2");
  if (myUsername.value === "") {
    alert("Please enter a username");
  } else {
    message2.textContent = `Hello ${myUsername.value}`;
    console.log(myUsername.value);
    let userColors = document.getElementById("color");
    if (userColors.value === "") {
      alert("Please select a color");
    } else if (userColors.value === "Red") {
      message2.style.color = "red";
      console.log("Red color selected");
    } else if (userColors.value === "Green") {
      message2.style.color = "green";
      console.log("Green color selected");
    } else if (userColors.value === "Blue") {
      message2.style.color = "blue";
      console.log("Blue color selected");
    } else if (userColors.value === "Yellow") {
      message2.style.color = "yellow";
      console.log("Yellow color selected");
    }
    localStorage.setItem("userColors", userColors.value);
    localStorage.setItem("myUsername", myUsername.value);
    console.log(localStorage.getItem("userColors"));
  }
});
window.addEventListener("load", () => {
  let savedColor = localStorage.getItem("userColors");
  let savedUsername = localStorage.getItem("myUsername");

  if (savedColor && savedUsername) {
    let message2 = document.getElementById("message2");
    message2.textContent = `Hello ${savedUsername}`;
    message2.style.color = savedColor;
    console.log(savedUsername);
    console.log(savedColor);
  }
});

const resetBtn = document.getElementById("resetButton");

resetBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

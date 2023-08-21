// Get the input element
document.addEventListener("DOMContentLoaded", function() {
const screen = document.getElementById("scn");
// Attach event listener to the keys
document.querySelector(".keys").addEventListener("click", function (event) {
  if (event.target.tagName === "button") {
    const buttonText = event.target.textContent;
    if (buttonText === "C") {
       
      screen.value = "";
    } else if (buttonText === "Del") {
      screen.value = screen.value.slice(0, -1);
    } else if (buttonText === "=") {
      try {
        screen.value = eval(screen.value);
      } catch (error) {
        screen.value = "Error";
      }
    } else {
      screen.value += buttonText;
    }
  }
});
});

// Get the elements we want to change
const body = document.querySelector("body");
const toggleSwitch = document.querySelector(".fa-sun");

// Add click event listener to toggle switch
toggleSwitch.addEventListener("click", () => {
  // If light mode, turn to dark mode
  if (body.classList.contains("light-mode")) { 
    toggleSwitch.classList.replace('fa-moon', 'fa-sun');  
    body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("mode", "dark-mode");
  } else {
    // If dark mode, turn to light mode
    toggleSwitch.classList.replace('fa-sun', 'fa-moon');
    body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("mode", "light-mode");
  }
});

// Check local storage for saved mode
const currentMode = localStorage.getItem("mode");

// If saved mode found, set it
if (currentMode) {
  body.classList.add(currentMode);
} else {
  // If not, default to light mode
  body.classList.add("dark-mode");
}

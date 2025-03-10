const toggleButton = document.createElement("button");
toggleButton.innerText = "Dark Mode";
document.body.prepend(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Add dark-mode styles in CSS

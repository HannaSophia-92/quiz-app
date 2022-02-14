console.clear();

const toggleButton = document.querySelector(".card__bookmark");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
});

// const toggleButton = document.querySelector("[data-js=toggleBookmark]");

// toggleButton.addEventListener("click", () => {
//   toggleButton.classList.toggle("active");
// });

console.log(toggleButton);

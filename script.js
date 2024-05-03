const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

function redirectToAnotherPage() {
  // Change the page location to another URL
  window.location.href = "orders.html";
}
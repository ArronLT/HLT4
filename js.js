const alertMain = function () {
  alert("Welcome to the site. Please register or login");
};
alertMain();

const dateOne = new Date();
document.querySelector(".date").textContent = dateOne;

const toggleButtonOne = document
  .querySelector(".hideShowButton")
  .addEventListener("click", function () {
    document.querySelector(".div2").classList.toggle("hidden");
  });

const hideShowButtonTwo = document
  .querySelector(".hideShowButtonTwo")
  .addEventListener("click", function () {
    document.querySelector(".div3").classList.toggle("hidden");
  });

const darkMode = document
  .querySelector(".lightDark")
  .addEventListener("click", function () {
    document.querySelector(".bodyClass").classList.toggle("darkMode");
    document.querySelector(".header").classList.toggle("darkMode");
    document.querySelector(".description").classList.toggle("darkMode");
  });

const html = document.querySelector("html");
const btn = document.querySelector("#theme-toggle");
const dark = document.querySelector("#theme-toggle-dark-icon");
const light = document.querySelector("#theme-toggle-light-icon");

var current = html.getAttribute("class");

if (current == "light") {
  light.classList.toggle("hidden");
} else {
  dark.classList.toggle("hidden");
}

btn.addEventListener("click", function () {
  var now = html.getAttribute("class");

  light.classList.toggle("hidden");
  dark.classList.toggle("hidden");

  if (now == "light") {
    html.classList.remove("light");
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
    html.classList.add("light");
  }
});

// const navLink = document.querySelectorAll(".nav_link");

// navLink.forEach((navLinkEl) => {
//   navLinkEl.addEventListener("click", function () {
//     document
//       .querySelector(".md:text-blue-70")
//       ?.classList.remove("md:text-blue-70");
//     navLinkEl.classList.add("md:text-blue-70");
//   });
// });

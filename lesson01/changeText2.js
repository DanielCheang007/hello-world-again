console.log("changeText2.js loaded");

let h2s = document.querySelectorAll("h2");
console.log(h2s);

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded fired");
  let h2s = document.querySelectorAll("h2");
  console.log(h2s);

  for (let i = 0; i < h2s.length; i++) {
    h2s[i].innerHTML = "test";
  }
});

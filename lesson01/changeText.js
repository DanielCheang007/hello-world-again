console.log("changeText.js loaded");

let h2s = document.querySelectorAll("h2");
console.log(h2s);

for (let i = 0; i < h2s.length; i++) {
  h2s[i].innerHTML = "test";
}

// function sleep(seconds) {
//   let d = new Date();
//   d.setSeconds(d.getSeconds() + seconds);
//   while (new Date() < d) {
//     // do nothing
//   }
// }

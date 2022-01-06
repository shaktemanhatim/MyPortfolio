const nav = document.querySelector("nav");
nav.addEventListener("mouseover", function run(e) {
  if (e.target.classList.contains("lll")) {
    let link = e.target;
    let sibling = link.closest("nav").querySelectorAll("lll");
    const logo = link.closest("nav").querySelector("p");
    console.log("jover");
    sibling.forEach(function (el) {
      if (el !== sibling) {
        el.style.opacity = 0.5;
      }
      logo.style.opacity = 0.5;
    });
  }
});
console.log("checking contious intergration");

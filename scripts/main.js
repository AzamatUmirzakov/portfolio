// making work examples tilt

document.body.onload = function () {
  document.querySelector("div.loading").classList.toggle("hide");
  document
    .querySelector("div.loading")
    .addEventListener("transitionend", () => {
      document.querySelector("div.loading").remove();
    });
};
let works = document.querySelector(".works-grid");
let settings = {
  perspective: 1000,
  maxDegree: 25,
  scale: 1.2,
};
for (let work of works.children) {
  let tilt = (event) => {
    let width = work.offsetWidth;
    let height = work.offsetHeight;
    let centerX = work.getBoundingClientRect().left + width / 2;
    let centerY = work.getBoundingClientRect().top + height / 2;

    let mouseX = event.clientX - centerX;
    let mouseY = event.clientY - centerY;

    let rotateX = (settings.maxDegree * mouseY) / (height / 2);
    let rotateY = (-1 * settings.maxDegree * mouseX) / (width / 2);
    if (document.documentElement.clientWidth > 870) {
      work.style.transform = `perspective(${settings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`;
    } else {
      work.style.transform = `scale(${settings.scale})`;
    }
  };
  work.addEventListener("pointermove", tilt);
  work.addEventListener("pointerenter", tilt);
  work.addEventListener("pointerdown", tilt);
  work.addEventListener("pointerleave", (event) => {
    work.style.transform = `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    // setTransition(element);
  });
}

// function setTransition(element) {
//   element.style.transition = `all 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
//   setTimeout(() => {
//     element.style.transition = ``;
//   }, 300);
// }

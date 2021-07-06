// making work examples tilt

let works = document.querySelector(".works-grid");
let settings = {
  perspective: 1000,
  maxDegree: 25,
  scale: 1.2,
};
for (let work of works.children) {
  work.addEventListener("mouseenter", (event) => {
    // setTransition(element);
  });
  work.addEventListener("mousemove", (event) => {
    let width = work.offsetWidth;
    let height = work.offsetHeight;
    let centerX = work.getBoundingClientRect().left + width / 2;
    let centerY = work.getBoundingClientRect().top + height / 2;

    let mouseX = event.clientX - centerX;
    let mouseY = event.clientY - centerY;

    let rotateX = (settings.maxDegree * mouseY) / (height / 2);
    let rotateY = (-1 * settings.maxDegree * mouseX) / (width / 2);
    work.style.transform = `perspective(${settings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`;
  });
  work.addEventListener("mouseleave", (event) => {
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

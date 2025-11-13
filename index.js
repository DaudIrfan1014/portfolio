new kursor({
  type: 4,
  removeDefaultCursor: true,
});
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
var timeL = gsap.timeline();
timeL.to("#rotate", {
  y: "100vh",
  scale: 0.1,
  duration: 0,
});
timeL.to("#rotate", {
  y: "-50vh",
  scale: 0.5,
  duration: 1,
  delay: 0.6,
});
timeL.to("#rotate", {
  y: "0vh",
  scale: 0.5,
  rotate: -30,
  duration: 0.7,
  delay: 0.2,
});
timeL.to("#rotate", {
  y: "0vh",
  scale: 1,
  rotate: 360,
  duration: 0.7,
  delay: 0.2,
});
function showImage() {
  document.getElementById("H3text").style.display = "none";
  document.getElementById("hoverImage").style.display = "block";
}

function hideImage() {
  document.getElementById("H3text").style.display = "block";
  document.getElementById("hoverImage").style.display = "none";
}

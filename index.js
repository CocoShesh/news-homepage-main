function handleClose() {
  var content = document.getElementById("content");
  var bg = document.getElementById("bg");
  content.style.right = "-100vh";
  bg.style.top = "-200vh";
}
function handleMenu() {
  var content = document.getElementById("content");
  var bg = document.getElementById("bg");
  bg.style.top = "";
  content.style.right = "";
}

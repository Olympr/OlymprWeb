var hamburgerMenu = document.getElementById("hamburger-menu");
var sidebar = document.getElementById("sidebar");
var closeBtn = document.getElementById("close-btn");

hamburgerMenu.addEventListener("click", function() {
  if (sidebar.style.right === "0px") {
    sidebar.style.right = "-250px";
  } else {
    sidebar.style.right = "0px";
  }
});

closeBtn.addEventListener("click", function() {
  sidebar.style.right = "-250px";
});


AOS.init({
  duration: 1200,
});

// Toolbar show / hide
document.addEventListener("scroll", function() {
  if (window.pageYOffset > 1000)
    document.getElementById('toolbar').style.display = "block";
});

document.addEventListener("scroll", function() {
  if (window.pageYOffset < 1000)
    document.getElementById('toolbar').style.display = "none";
});

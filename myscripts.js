

// Altenate colour palettes
var palettes = [ ["#e0e0e0", "#e8122f"], ["#000000", "#f9cd43"], ["#e8122f", "#000000"], ["#2e00fd", "#ff9600"], ["#e8122f", "#e0e0e0"], ["#003967", "#f2b300"], ["#00613f", "#ff6141"], ["#f9cd43", "#e8122f"] ];

// Random colour palette selector
function GetValue() {
  var newPalette = palettes[Math.floor(Math.random() * palettes.length)];
  //alert(random);
  document.getElementById("message").innerHTML=newPalette;
};

// Toolbar show
document.addEventListener("scroll", function() {
  if (window.pageYOffset > 1000)
    document.getElementById('toolbar').style.display = "block";
});

// Toolbar hide
document.addEventListener("scroll", function() {
  if (window.pageYOffset < 1000)
    document.getElementById('toolbar').style.display = "none";
});

AOS.init({
  duration: 1200,
});


// , ["#14f7a4", "#292929"], ["#292929", "#f7484e"]

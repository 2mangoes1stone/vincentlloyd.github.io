// //Smooth scroll
//
// //scroll to top of page
// function scrollRun() {
//   scrollTo(document.body, 0, 600);
// };
//
// var scrollme;
// //English: Search the DOM for the first element where id="scrollme", store address of this object in global variable 'scrollme'.
// scrollme = document.querySelector("#scrollme");
// //English: ...then execute 'scrollRun' function when user clicks this object. Execute this handler during the bubber phase i.e. the event is handled by the handler of the innermost element.
// scrollme.addEventListener("click",scrollRun,false);
//
// function scrollTo(element, to, duration) {
//   if (duration <= 0) return;
//   var difference = to - element.scrollTop;
//   var perTick = difference / duration * 10;
//
//   setTimeout(function() {
//     element.scrollTop = element.scrollTop + perTick;
//     if (element.scrollTop == to) return;
//     scrollTo(element, to, duration - 10);
//   }, 10);
// };

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

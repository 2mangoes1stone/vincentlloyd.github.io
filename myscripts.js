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


// COLOUR THEME SELECTOR


// Altenate colour palettes
var palettes = [ ["#e0e0e0", "#e8122f"], ["#000000", "#f9cd43"], ["#e8122f", "#000000"], ["#2e00fd", "#ff9600"], ["#e8122f", "#e0e0e0"], ["#003967", "#f2b300"], ["#00613f", "#ff6141"], ["#f9cd43", "#e8122f"] ];
// , ["#14f7a4", "#292929"], ["#292929", "#f7484e"]

// Random colour palette selector
function setColour() {
  var newPalette = palettes[Math.floor(Math.random() * palettes.length)];
  //alert(random);
  document.getElementById("message").innerHTML=newPalette;
};


// TOOLBAR SHOW / HIDE


// Toolbar show
document.addEventListener("scroll", function() {
  if (window.pageYOffset >= 41)
    document.getElementById('toolbar').style.display = "block";
});

// Toolbar hide
document.addEventListener("scroll", function() {
  if (window.pageYOffset < 41)
    document.getElementById('toolbar').style.display = "none";
});


// BOOTCAMP GRADUATION COUNDOWN TIMER


// Bootcamp graduation date
var targetDate = new Date("Aug 25, 2017 17:00:00").getTime();

// Refresh every second
var x = setInterval(function() {

  // Today's date and time remaining variables
  var now = new Date().getTime();
  var timeLeft = targetDate - now;

  // Days, hours, minutes, seconds remaining in countdown
  var day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hr = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Set values of appropiate html elements
  document.getElementById("day").innerHTML = day;
  document.getElementById("hr").innerHTML = hr;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;

}, 1000);

let featuredEl = document.getElementById("card");
let card1El = document.getElementById("card1");
let card2El = document.getElementById("card2");
let card3El = document.getElementById("card3");

document.getElementById("back").style.visibility = "hidden";
document.getElementById("back1").style.visibility = "hidden";
document.getElementById("back2").style.visibility = "hidden";
document.getElementById("back3").style.visibility = "hidden";

// FEATURE CARD
// Clear the front; display the back
featuredEl.addEventListener("mouseover", function(){
    $("#front").hide();     
    document.getElementById("back").style.visibility = "visible"; 
});

// Revert the card
featuredEl.addEventListener("mouseleave", function() {
    $("#front").show();
    document.getElementById("back").style.visibility = "hidden";
});
  
// CARD 1
card1El.addEventListener("mouseover", function(){
    $("#front1").hide();     
    document.getElementById("back1").style.visibility = "visible"; 
});

card1El.addEventListener("mouseleave", function() {
    $("#front1").show();
    document.getElementById("back1").style.visibility = "hidden";
});

// CARD 2
card2El.addEventListener("mouseover", function(){
    $("#front2").hide();     
    document.getElementById("back2").style.visibility = "visible"; 
});

card2El.addEventListener("mouseleave", function() {
    $("#front2").show();
    document.getElementById("back2").style.visibility = "hidden";
});


// CARD 3
card3El.addEventListener("mouseover", function(){
    $("#front3").hide();     
    document.getElementById("back3").style.visibility = "visible"; 
});

card3El.addEventListener("mouseleave", function() {
    $("#front3").show();
    document.getElementById("back3").style.visibility = "hidden";
});
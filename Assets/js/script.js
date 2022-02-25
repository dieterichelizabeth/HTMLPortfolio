let featuredEl = document.getElementById("card");
let card1El = document.getElementById("card1");
let card2El = document.getElementById("card2");
let card3El = document.getElementById("card3");
let frontEl = document.getElementById("front");

document.getElementById("back").style.visibility = "hidden";
document.getElementById("back1").style.visibility = "hidden";
document.getElementById("back2").style.visibility = "hidden";
document.getElementById("back3").style.visibility = "hidden";

// THIS WILL CLEAR THE FRONT SIDE OF THE CARD!!!
featuredEl.addEventListener("mouseover", function(){
    console.log("flipped!")
    $("#front").hide();     
    document.getElementById("back").style.visibility = "visible"; 
});

// THIS WILL REVERT THE CARD!!!
featuredEl.addEventListener("mouseleave", function() {
    $("#front").show();
    document.getElementById("back").style.visibility = "hidden";
});
  
// CARD 1
card1El.addEventListener("mouseover", function(){
    console.log("flipped!")
    $("#front1").hide();     
    document.getElementById("back1").style.visibility = "visible"; 
});

card1El.addEventListener("mouseleave", function() {
    $("#front1").show();
    document.getElementById("back1").style.visibility = "hidden";
});

// CARD 2
card2El.addEventListener("mouseover", function(){
    console.log("flipped!")
    $("#front2").hide();     
    document.getElementById("back2").style.visibility = "visible"; 
});

// THIS WILL REVERT THE CARD!!!
card2El.addEventListener("mouseleave", function() {
    $("#front2").show();
    document.getElementById("back2").style.visibility = "hidden";
});


// CARD 3
card3El.addEventListener("mouseover", function(){
    console.log("flipped!")
    $("#front3").hide();     
    document.getElementById("back3").style.visibility = "visible"; 
});

// THIS WILL REVERT THE CARD!!!
card3El.addEventListener("mouseleave", function() {
    $("#front3").show();
    document.getElementById("back3").style.visibility = "hidden";
});



// GAME PLAN!!

/*
Done: Refactor navbar/title styling - should take 100% of spacing
Done:  Same with recent projects
Done: Highlighted content is now one section
Done: -flex it 100%, figure out the spacing for the card
Add github links/further card details
Done: transition works with jquery: keep it simple!
other projects (content) is now one section
Done: flex it 100%, figure out the spacing
Done: keep the design the same for each card, so the HTML can be adjusted, but cards stay the same
Will need to revisit media queries
    - review needed changes before re-linking
Add delay on javascript eventListener
create function to count cards! For some reason it doesn't apply to multiple cards at once...
*/
let featuredEl = document.getElementById("card1");
let contentCardEl = document.getElementById("content-box");
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
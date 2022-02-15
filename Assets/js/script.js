let testEl = document.getElementById("card1");
let frontEl = document.getElementById("front");
document.getElementById("back").style.visibility = "hidden";

testEl.addEventListener("mouseover", function(event){
    $("#front").hide();     
    $("#back").show();  
});

testEl.addEventListener("mouseleave", function( event ) {
    $("#front").show();
    $("#back").hide(); 
});
  

// GAME PLAN!!

/*
Refactor navbar/title styling - should take 100% of spacing
- Same with recent projects
- figure out flexbox
Highlighted content is now one section
- flex it 100%, figure out the spacing for the card
- transition works with jquery: keep it simple!
other projects (content) is now one section
- flex it 100%, figure out the spacing
- keep the design the same for each card, so the HTML can be adjusted, but cards stay the same
    - possibly use persentages instead of pixels
Will need to revisit media queries
About me and down is fine.
*/
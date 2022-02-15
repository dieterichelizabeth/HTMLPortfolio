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
  
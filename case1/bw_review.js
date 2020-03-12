"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Isaiah Romo
   Date:   3/11/20
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
window.onload = init;
// changes mouse depending on what you hover over
function init(){
   var stars = document.querySelectorAll("span#stars img");
   for(var i = 0; i < stars.length; i++){
      stars[i].style.cursor = "pointer";
      stars[i].addEventListener("mouseenter", lightStars);
   }
   document.getElementById("comment").addEventListener("keyup", updateCount)
}
// lights up stars to see how much you are rating
function lightStars(e){
   var starNumber = e.target.alt;
   var stars = document.querySelectorAll("span#stars img");
   for(var i = 0; i < starNumber; i++){
      stars[i].src = "bw_star2.png";
   }
   for(var i = starNumber; i < 5; i++){
      stars[i].src = "bw_star.png";
   }
   document.getElementById("rating").value = starNumber + " stars";
   e.target.addEventListener("mouseleave", turnOffStars);
   // when you click it removes the function turnoffstars so you keep what you click
   e.target.addEventListener("click", function(){
         e.target.removeEventListener("mouseleave", turnOffStars);
      }
   );
}
// makes it when you dont select anything it removes all the stars and text of how many
function turnOffStars(){
   var stars = document.querySelectorAll("span#stars img");
   for(var i = 0; i < stars.length; i++){
      stars[i].src = "bw_star.png";
      document.getElementById("rating").value = "";
   }
}
// upfate the count of the word count to see how much you typed
function updateCount(){
   var commentText = document.getElementById("comment").value;
   var charCount = countCharacters(commentText);
   var wordCountBox = document.getElementById("wordCount");
   wordCountBox.value = charCount + "/1000"
   // changes the color when you go over the count then back when below the count
   if(charCount > 1000){
      wordCountBox.style.color = "white";
      wordCountBox.style.backgroundColor = "red";
   }else{
      wordCountBox.style.color = "black";
      wordCountBox.style.backgroundColor = "white";
   }
}
  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   
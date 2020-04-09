"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Isaiah Romo
   Date:   3/20/20
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

//steps 4a - 4f
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection = "right";
//step 5
window.onload = init;
//step 6
function init() {
   allLetters = document.querySelectorAll("table#crossword span");
   currentLetter = allLetters[0]; 
   var acrossID = currentLetter.dataset.clueA;
   var downID = currentLetter.dataset.clueD;
   acrossClue = document.getElementById(currentLetter.dataset.clueA);
   downClue = document.getElementById(currentLetter.dataset.clueD);
   //step 8-a
   formatPuzzle(currentLetter);
   //step8-b
   for(var i = 0; i < allLetters.length; i++){
      //step 8-b-1
      allLetters[i].style.cursor = "pointer";
      //step 8-b-2
      allLetters[i].addEventListener("mousedown", 
         function(e){
            formatPuzzle(e.target)
         }
      )
   }
      //step 10
      document.addEventListener("keydown", selectLetter);
      //step12-a
      var typeImage = document.getElementById("directionImg");
      //step 12-b
      typeImage.style.cursor = "pointer";
      //step 12-c
      typeImage.addEventListener("click", switchTypeDirection);
      //step 13-a
      showErrors.addEventListener("click", init);
      for(var i = 0; i < allLetters.length; i++){
         if(allLetters[i].textContent != allLetters[i].dataset.letter){
            allLetters[i].style.color = "red";
         }
         //step 13-b
         setTimeout(function(){
            // find errors and marked them red
            for(var i = 0; i < allLetters.length; i++){
               allLetters[i].style.color = "red";
            }
         }, 3000);
         
      }
      // step 14
      // adds a eventlistener on showSolution button and runs the function when clicked
      showSolution.addEventListener("click", function(){
         // shows the right answers
            for(var i = 0; i < allLetters.length; i++){
               if(allLetters[i].textContent != allLetters[i].dataset.letter);
                  allLetters[i].textContent = allLetters[i].dataset.letter;
            }
         }
      );
}
//step 7
function formatPuzzle(puzzleLetter){
   // step 7-a
   currentLetter = puzzleLetter;
   //step 7-b
   for(var i = 0; i < allLetters.length; i++){
      allLetters[i].style.backgroundColor = "";
   }
   //step 7-c
   acrossClue.style.color = "";
   downClue.style.color = "";
   //step 7-d
   if(currentLetter.dataset.clueA !== undefined){
   //step 7-d-1
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      //step 7-d-2
      acrossClue.style.color = "blue";
      //step 7-d-3
      wordLetters = document.querySelectorAll("[data-clue-a = " + currentLetter.dataset.clueA + "]");
      //step 7-d-4
      for (var i = 0; i < wordLetters.length; i++) {
      wordLetters[i].style.backgroundColor = "rgb(231, 231, 255)";
      }
   }
   //step 7-e
   if (currentLetter.dataset.clueD !== undefined) {
      downClue = document.getElementById(currentLetter.dataset.clueD);
      downClue.style.color = "red";
      wordLetters = document.querySelectorAll("[data-clue-d = " + currentLetter.dataset.clueD + "]")
      for (var i = 0; i < wordLetters.length; i++) {
          wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";
      }
  }
  //step 7-f
   if (typeDirection === "right") {
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   } else {
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }
}
//step 9
   function selectLetter(e){
      //step 9-a
      var leftLetter = document.getElementById(currentLetter.dataset.left);
      var upLetter = document.getElementById(currentLetter.dataset.up);
      var rightLetter = document.getElementById(currentLetter.dataset.right);
      var downLetter = document.getElementById(currentLetter.dataset.down);
      //step 9-b
      var userKey = e.keyCode
      //step 9-c-1
      if(userKey === 37){
         formatPuzzle(leftLetter);
         //step 9-c-2
      }else if(userKey === 38){
         formatPuzzle(upLetter)
         //step9-c-3
      }else if(userKey === 39 || userKey === 9){
            formatPuzzle(rightLetter)
            //step 9-c-4
      }else if(userKey === 40 || userKey === 13){
         formatPuzzle(downLetter)
         //step 9-c-5
      }else if(userKey === 8 || userKey ===46){
         formatPuzzle(currentLetter)
         //step 9-c-6
      }else if(userKey === 32){
         switchTypeDirection()
         //step 9-c-7
      }else if (userKey >= 65 && userKey <= 90) {
         currentLetter.textContent = getChar(userKey);
         if (typeDirection === "right") {
             formatPuzzle(rightLetter);
         } else {
             formatPuzzle(downLetter);
         }
      }
      //step 9-d
      e.preventDefault();
}
//step 11
function switchTypeDirection(){
   //step 11-a
   var typeImage = document.getElementById("directionImg");
   //step  11-b and c
    if (typeDirection = "right") {
        typeDirection = "down";
        typeImage.src = "pc_right.png";
        currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
    } else {
        typeDirection = "right";
        typeImage.src = "pc_down.png";
        currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
    }
}



   





/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}

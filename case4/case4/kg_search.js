"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 4

   Wordsearch Game Script
   
   Filename: kg_search.js
   Author: Pete Burnham
   Date:   2018-03-01
   
   
   Global Variables
   
   allCells
      References all of the cells in the word search table
      
   found
      Stores a Boolean value indicating whether the currently
      selected letters represents a word in the word search list.
   
   Function List
   
   function drawWordSearch(letters, words)
      Returns the HTML code for a word search table based on the entries
      in the letters array and the location of the words
      in the words array
      
   showList(list)
      Returns the HTML for code for an unordered list of words based
      on the items in the list array

*/
// creates variable allcells
var allCells;
// sets found to false
var found = false;
// runs the init function when the window loads in
window.onload = init;

function init() {
   // get all that the query selector wants making the inner html to what wordSearchTitle is
   document.querySelectorAll("aside h1")[0].innerHTML = wordSearchTitle;
   // get all that the elements with the id wordTable making the inner html to what drawWordSearch(letterGrid, wordGrid) is
   document.getElementById("wordTable").innerHTML = drawWordSearch(letterGrid, wordGrid);
   // get all that the elements with the id wordList making the inner html to what showList(wordArray) is
   document.getElementById("wordList").innerHTML = showList(wordArray);
   // made allcells variable to document.querySelectorAll("table#wordSearchTable td")
   allCells = document.querySelectorAll("table#wordSearchTable td");
   
   for (var i = 0; i < allCells.length; i++) {
      // for all the allcells array put the cursor to a pointer style
      allCells[i].style.cursor = "pointer";
      // for all the allcells array added a event lister when mousedown event happen running the function startRecording
      allCells[i].addEventListener("mousedown", startRecording);
   }
   // got all the elements with the id wordSearchTable when the mouse up is done running the anonymous function
   document.getElementById("wordSearchTable").onmouseup = function() {
      // runs the stop recording function
      stopRecording();
      var wordList = document.querySelectorAll("ul#wordSearchList li");
      var solved = true;
      for (var i = 0; i < wordList.length; i++) {
         // if the textdecoration is not a line-through then the solved var is false
         if (wordList[i].style.textDecoration !== "line-through") {
            solved = false;
            break;
         }
      }
      // otherwise if there is textdecoration with a line-through then its solved
      if (solved) {
         alert("You solved the puzzle!");
      }
   };
   // when the elements with showSolution is clicked runs the anonymous function
   document.getElementById("showSolution").onclick = function() {
      for (var i = 0; i < allCells.length; i++) {
         // if the any allcells have the class name wordCell it makes the background color rgb(191, 191, 255)
         if (allCells[i].className === "wordCell") {
            allCells[i].style.backgroundColor = "rgb(191, 191, 255)";
         }
      }
   };

}

function startRecording(e) {
   // got the id pickedLetters and got the the value add the event target and the text content
   document.getElementById("pickedLetters").value += e.target.textContent;
   // if the background for the thing you are looking at is rgb(255, 197, 153) and not rgb(28, 255, 132) actives the for
   if (e.target.style.backgroundColor !== "rgb(28, 255, 132)") {
      e.target.style.backgroundColor = "rgb(255, 197, 153)";
   }
   // adds a event listeners to all the fit the condition of the if statement
   for (var i = 0; i < allCells.length; i++) {
      allCells[i].addEventListener("mouseenter", continueRecording);
   }
   // prevents the highlighting of the cells
   e.preventDefault();
}

function continueRecording(e) {
   // if the background for the thing you are looking at is rgb(255, 197, 153) and not rgb(28, 255, 132) actives the for
   if (e.target.style.backgroundColor !== "rgb(28, 255, 132)") {
      e.target.style.backgroundColor = "rgb(255, 197, 153)";
   }
   // got the id pickedLetters and got the the value add the event target and the text content
   document.getElementById("pickedLetters").value += e.target.textContent;
}

function stopRecording() {
   // when this runs removes the eventlisteners to the cells that run this
   for (var i = 0; i < allCells.length; i++) {
      allCells[i].removeEventListener("mouseenter", continueRecording);
   }
   // runs the function to check the letters
   checkLetters();
}
  

function checkLetters() {
   // set the variable currentLetters to the value of the elements with the id pickedLetters
   var currentLetters = document.getElementById("pickedLetters").value;
   // set the variable wordList to the what ever the selector wants which is ul#wordSearchList li and selects all of them
   var wordList = document.querySelectorAll("ul#wordSearchList li");
   for (var i = 0; i < wordList.length; i++) {
      // if the variable currentLetters is the same as the wordList array then puts a text decoration, a color, and makes the var found true
      if (currentLetters === wordList[i].textContent) {
         wordList[i].style.textDecoration = "line-through";
         wordList[i].style.color = "rgb(191, 191, 191)";
         found = true;
      }
   }
   
   for (var i = 0; i < allCells.length; i++) {
      // if the allcells background isn't rgb(28, 255, 132) then checks of the background matchs rgb(255, 197, 153) and found is true if it is then it changes the background to rgb(28, 255, 132) otherwise the backgrund is nothing
      if (allCells[i].style.backgroundColor !== "rgb(28, 255, 132)") {
         if (allCells[i].style.backgroundColor === "rgb(255, 197, 153)" && found) {
            allCells[i].style.backgroundColor = "rgb(28, 255, 132)";
         } else {
            allCells[i].style.backgroundColor = "";
         }
      }
   }
   document.getElementById("pickedLetters").value = "";
   found = false;
}



/*============================================================*/

function drawWordSearch(letters, words) {
   var rowSize = letters.length;
   var colSize = letters[0].length;

   var htmlCode = "<table id='wordSearchTable'>";
   htmlCode += "<caption>Word Search</caption>";

   for (var i = 0; i < rowSize; i++) {
      htmlCode += "<tr>";

      for (var j = 0; j < colSize; j++) {
         if (words[i][j] == " ") {
            htmlCode += "<td>";
         } else {
            htmlCode += "<td class='wordCell'>";
         }
         htmlCode += letters[i][j];
         htmlCode += "</td>";
      }

      htmlCode += "</tr>";
   }
   htmlCode += "</table>";

   return htmlCode;
}

function showList(list) {
   var htmlCode = "<ul id='wordSearchList'>";

   for (var i = 0; i < list.length; i++) {
      htmlCode += "<li>" + list[i] + "</li>";
   }

   htmlCode += "</ul>";

   return htmlCode;
}

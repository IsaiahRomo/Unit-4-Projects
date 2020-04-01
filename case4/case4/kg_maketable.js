"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 4
   
   Filename: kg_maketable.js

   Variables
   =========

   puzzleTitle
      Name of the word search puzzle

   wordList
      Array of hidden puzzle words

   letterGrid
      Multi-dimensional array of letters in the hidden puzzle

   wordGrid
      Multi-dimensional array specifying the location of hidden
      words in the puzzle where the # symbol marks the location
      of each letter
  	
*/

var wordSearchTitle = "Astronomy";

var wordArray = ["CALLISTO", "CERES", "CHARON", "DEIMOS", "EARTH", "ERIS", "EUROPA",
                "GANYMEDE", "HAUMEA", "IO", "JUPITER", "MAKEMAKE", "MARS", 
                "MERCURY", "MOON", "NEPTUNE", "PALLAS", "PHOBOS", "PLUTO", 
                "SATURN", "SOL", "TITAN", "URANUS", "VENUS", "VESTA"];

var letterGrid =
[
["R","K","M","F","T","S","N","Y","L","R","J","S","O","B","O","H","P","Y","X","D","N","A","V","Z","N"],
["T","E","A","A","E","E","U","E","F","N","K","M","T","H","E","B","V","K","W","U","S","E","N","D","I"],
["S","L","A","R","L","K","P","L","P","O","L","C","A","J","J","A","Q","D","X","A","S","R","A","M","P"],
["Z","J","E","R","E","Y","R","I","P","N","N","A","B","H","I","Z","X","O","N","T","M","R","A","T","H"],
["P","C","S","G","T","I","C","L","Y","M","S","L","U","Q","D","M","H","N","A","G","K","K","W","W","A"],
["O","A","W","M","W","H","N","V","A","M","T","L","E","R","Y","R","D","Z","T","L","Z","C","C","C","U"],
["D","K","N","B","G","H","R","X","S","V","N","I","U","D","A","F","B","V","O","P","U","J","Z","H","M"],
["E","K","A","M","E","K","A","M","Q","B","D","S","D","B","A","N","P","S","X","D","S","Q","W","T","E"],
["P","D","D","T","V","Y","W","C","E","H","Z","T","C","Z","C","N","U","F","T","B","F","X","H","M","A"],
["D","U","N","P","A","I","E","D","P","A","R","O","U","Q","Q","E","H","S","Q","H","X","T","D","V","M"],
["X","R","H","O","W","D","E","F","W","E","U","P","K","W","R","P","W","O","V","U","Y","F","B","B","D"],
["V","H","D","J","V","M","U","K","T","X","E","R","V","U","V","P","R","T","W","B","M","I","A","E","M"],
["U","C","T","K","Y","Q","C","I","X","J","R","E","B","D","R","P","Z","K","P","W","I","G","P","M","G"],
["S","Z","K","N","W","A","P","I","L","V","W","S","V","E","N","U","S","F","N","F","L","J","O","C","M"],
["E","O","A","G","K","U","T","I","Y","T","M","V","Z","U","W","W","S","A","T","U","R","N","R","E","D"],
["Z","G","J","N","J","Z","W","Y","G","S","O","V","G","M","Z","R","T","I","T","A","N","S","U","Y","U"],
["C","E","Z","R","D","U","Q","P","U","R","O","R","Z","T","I","I","S","B","Z","S","V","F","E","R","V"],
["N","N","L","W","E","P","F","W","A","R","N","U","F","D","B","A","K","F","X","D","I","V","R","U","T"],
["D","U","B","N","T","N","A","F","W","J","R","J","D","W","L","A","W","R","C","L","Y","K","I","C","N"],
["S","T","U","J","O","K","Q","D","Y","D","M","R","S","L","X","S","F","W","I","G","Q","D","B","R","Z"],
["B","P","W","S","A","R","O","I","D","L","Z","T","A","Q","S","M","U","C","P","M","J","S","S","E","R"],
["J","E","E","H","I","H","A","C","N","D","Q","P","L","U","T","O","S","N","X","J","K","G","C","M","J"],
["Z","N","C","S","I","H","D","H","S","R","Z","J","U","N","E","O","J","T","Y","X","A","C","V","S","Z"],
["Q","X","S","Y","L","M","C","L","C","F","Z","K","Z","K","F","T","L","N","N","P","K","J","V","Q","K"],
["S","I","R","E","L","I","F","N","D","C","P","S","S","R","B","S","Q","O","B","D","E","I","M","O","S"]
]

var wordGrid =
[
[" "," "," "," "," ","#"," "," "," "," "," ","#","#","#","#","#","#"," "," "," "," "," ","#"," "," "],
[" ","#"," "," ","#"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","#"," "," "," "],
[" "," ","#","#"," "," "," "," "," "," "," ","#"," "," "," "," "," "," "," "," ","#","#","#","#"," "],
[" "," ","#","#"," "," "," "," "," "," "," ","#"," "," "," "," "," "," "," ","#"," "," "," "," ","#"],
[" ","#"," "," ","#"," "," "," "," "," "," ","#","#"," "," "," "," "," ","#"," "," "," "," "," ","#"],
[" "," "," "," "," ","#"," "," "," "," "," ","#"," ","#"," "," "," "," "," ","#"," "," "," "," ","#"],
[" "," "," "," "," "," "," "," "," "," "," ","#"," "," ","#"," "," "," ","#"," "," "," "," "," ","#"],
["#","#","#","#","#","#","#","#"," "," "," ","#"," "," "," ","#"," ","#"," "," "," "," "," "," ","#"],
[" "," "," "," "," "," "," "," ","#"," "," ","#"," "," "," "," ","#"," "," "," "," "," "," "," ","#"],
[" "," "," "," "," "," "," ","#"," "," ","#","#"," "," "," "," "," ","#"," "," "," "," "," "," "," "],
[" "," "," "," "," "," ","#"," "," ","#"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," ","#"," "," ","#"," "," "," "," "," "," "," "," "," "," "," "," "," ","#"," "," "],
[" "," "," "," ","#"," "," ","#"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","#"," "," "],
[" "," "," ","#"," "," ","#"," "," "," "," "," ","#","#","#","#","#"," "," "," "," "," ","#"," "," "],
[" "," ","#"," "," ","#"," "," "," "," ","#"," "," "," "," "," ","#","#","#","#","#","#","#"," "," "],
[" ","#"," "," ","#"," "," "," "," "," ","#"," "," "," "," "," ","#","#","#","#","#"," ","#","#"," "],
[" ","#"," "," "," "," "," "," "," "," ","#"," "," "," "," "," ","#"," "," "," "," "," ","#","#"," "],
[" ","#"," "," "," "," "," "," "," "," ","#"," "," "," "," ","#"," "," "," "," "," "," "," ","#"," "],
[" ","#"," ","#"," "," "," "," "," "," "," "," "," "," ","#"," "," "," "," "," "," "," "," ","#"," "],
[" ","#"," "," ","#"," "," "," "," "," "," "," "," ","#"," "," "," "," "," "," "," "," "," ","#"," "],
[" ","#"," "," "," ","#","#","#"," "," "," "," ","#"," "," "," "," "," "," "," "," "," "," ","#"," "],
[" ","#"," "," "," "," ","#"," "," "," "," ","#","#","#","#","#"," "," "," "," "," "," "," ","#"," "],
[" ","#"," "," "," "," "," ","#"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," ","#"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
["#","#","#","#"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","#","#","#","#","#","#"]
]
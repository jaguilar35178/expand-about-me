"use strict";

function game(){
   //
if (confirm("I'm my dad's favorite child")){
alert("nope!");
   } else{
    alert("yuhhhh!");

   }
   if (confirm("I am a skilled lanscaper")){
    alert("yuhhhh!");
    } else{
 alert("nope!");
        
    }
    if (confirm("been driving since 12")){
    alert("yuuhhhh!");
    } else{
  alert("nahhhh!");
       
    }

    //5 questions
    if(prompt("Is Timetravel possible?") ==="yes".toLowerCase || "y".toLowerCase){
    console.log("question one response is yes");
    }
    if(prompt("Do you belive in god?") ==="yes".toLowerCase || "y".toLowerCase){
      console.log("question one response is yes");
    }
    if(prompt("Do you belive in ghost?") ==="yes".toLowerCase || "y".toLowerCase){
         console.log("question one response is yes");
  }
  if(prompt("Do you belive in witchcraft?") ==="yes".toLowerCase || "y".toLowerCase){
      console.log("question one response is yes");
      }
      if(prompt("Can steriods decrease your year to live.") ==="yes".toLowerCase || "y".toLowerCase){
    console.log("question one response is yes");

    if(prompt("Do you have a plane?.") ==="yes".toLowerCase || "y".toLowerCase){
      console.log("question one response is yes");
   }

}

function getToKnowYou(){
    let username =prompt("what is your name");
    alert("Helloo"+ username + " This is a private website please log out!");
   alert(username +" ,I hope you get hacked");

   // Define array of correct answer
   const correctAnswers= ["red", "yellow", "orange", "purple"];

   // Function maximum attemps
   const maxAttempts= 6;

   // Function to check if user's guess is correct
    function checkGuess(){
      return correctAnswers.includes(guess.tolowerxase());

    }
// Function to start the game 
function startGame(){
   let attempts=0;
   let guessedCorrectly =false;
   //loop for user attempts
   while(attempts < maxAttempts && !guessedCorrectly ){
      const guess = prompt('Attempt ${attempts + 1}/${maxAttempts}:guess a color:');
   if (guess=== null) {
      alert("you have ended the game.");
      return;
   }
 if (checkGuess(guess)) {
   guessedCorrectly= true;
   alert("congratulations! You guessed correctly.");

 } else {
   attempts++;
   alert("Incorrect guess, please try again");

 }

 if(!guessedCorrectly) {
   alert('sorry, you have used all your attempts. The correct answers were: ${correctAnswers.join(",
}
  }
 
//Start the game
 startGame();
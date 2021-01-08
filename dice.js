var randNum1 = Math.floor(Math.random() * 6) + 1;   // Random number for firs dice
var randNum2 = Math.floor(Math.random() * 6) + 1;   // Random number for second dice
var heading = document.querySelector("h1");
var image1 = document.querySelectorAll("img")[0];   // Selecting the first image
var image2 = document.querySelectorAll("img")[1];   // Selecting the second image

// Modifying attribute using random number
image1.setAttribute("src", "images/dice" + randNum1 + ".png");
image2.setAttribute("src", "images/dice" + randNum2 + ".png");


// Getting the winner text
if (randNum1 > randNum2) {
    heading.textContent = "Player 1 Wins!";
}
else if (randNum1 == randNum2) {
    heading.textContent = "Draw!";
}
else {
    heading.textContent= "Player 2 Wins!"
}
var randomNumber1=Math.floor(Math.random()*6)+1;//random no for player 1
console.log(randomNumber1);

var randomDiceImage1="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);
//for gen for player 1

var randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber2);  // random no for player 2

var randomDiceImage2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);
 //for gen for player 2

// winner announcemnt

 if(randomNumber1>randomNumber2)
 {
    document.querySelector("h1").innerHTML="player 1 WINS 🚩";
 }
 else if(randomNumber2>randomNumber1)
 {
    document.querySelector("h1").innerHTML="player 2 WINS 🚩";
 }
 else{
    document.querySelector("h1").innerHTML="that's a DRAW";
 }
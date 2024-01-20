var no = Math.floor(Math.random() * 6)+1;
var imageset = "images/dice" + no + ".png";
document.querySelectorAll("img")[0].setAttribute("src",imageset);

var no2 = Math.floor(Math.random()*6)+1;
var imgs="images/dice" + no2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",imgs);

//////check////

if (no > no2) {
    document.querySelector("h1").innerHTML= "Player 1 Wins";
} else if (no < no2) {
    document.querySelector("h1").innerHTML= "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML= "Draw..!!";
}

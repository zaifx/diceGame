// for first image 

var randomnumber1 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceimage = "dice" + randomnumber1 + ".png";

var randomImagesource = "images/" + randomDiceimage;

var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomImagesource);



// for second image

var randomnumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomImagesource2 = "images/dice" + randomnumber2 + ".png" ;

var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImagesource2);


//if statement 

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = " 🚩 Player 1 Win !!";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = " 🚩 Player 2 Wins !!";
}
else{
    document.querySelector("h1").innerHTML = " Draw !!";
}
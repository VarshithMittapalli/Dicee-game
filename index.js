//code for promting Player names
var player1 = prompt( "Enter Player 1 name :" );
var player2 = prompt( "Enter Player 2 name :" );

// code for assigning players names
document.getElementsByClassName( "player1" )[0].innerHTML = player1;
document.getElementsByClassName( "player2" )[0].innerHTML = player2;


// code For dice1
var randomNumber1 = Math.floor( Math.random() * 6 + 1 );

var dice1 = document.getElementsByClassName( "img1" );

dice1[ 0 ].setAttribute( "src", "images/dice" + randomNumber1 + ".png" );

// code for dice2
var randomNumber2 = Math.floor( Math.random() * 6 + 1 );

var dice2 = document.getElementsByClassName( "img2" );

dice2[ 0 ].setAttribute( "src", "images/dice" + randomNumber2+ ".png" );


// code for winner

if( randomNumber1 > randomNumber2 ){
  document.querySelector( "h1" ).innerHTML = player1 + " wins";
}else if( randomNumber2 > randomNumber1 ){
   document.querySelector( "h1" ).innerHTML = player2 + " wins";
 }else{
   document.querySelector( "h1" ).innerHTML = "Draw!";
 }

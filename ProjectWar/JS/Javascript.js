$(document).ready(function() {


var player = [];
var Enemy = [];
var playedCards = [];
var cards = [];
var $draw = $("#draw");
var $player = $("#player");
var $Enemy = $("#Enemy");
var $playerNumber = $("#playerNumber");
var $EnemyNumber = $("#EnemyNumber");
var $playerSuit = $("#playerSuit");
var $EnemySuit = $("#EnemySuit");
var $winner = $("#winner");
var $playerCount = $("#playerCount");
var $EnemyCount = $("#EnemyCount");
var $playerAnswer = $("#playerAnswer");
var $submit = $("#submit");
var number1;
var number2;
var suit1;
var suit2;
var numberImg1;
var numberImg2;
var compare = 0;
var chosen = 0;
var winner = 0;
var integerChoice = 0;
var addition = 0;
var multiplication = 0;
var subtraction = 0;
var arithmetic = 0;

    var audio1 = new Audio('losingsword.mp3');
    var audio2 = new Audio('begin.mp3');

var audio = new Audio('draw.mp3');

for (i=1; i<14; i++){
  for (k=1; k<5; k++) {
    var j = [i,k];
    cards.push(j);
  }
}

cards.shuffle = function() {
    var input = this;
    for (var i = cards.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = cards[randomIndex][0];
		    var itemAtSecond = cards[randomIndex][1];
        input[randomIndex][0] = input[i][0];
		    input[randomIndex][1] = input[i][1];
        input[i][0] = itemAtIndex;
		    input[i][1] = itemAtSecond;
    }
    return input;
}
//end of shuffle function

cards.shuffle();

var half = cards.length/2;
for (i=0; i<half; i++) {
  player.push(cards[i]);
}

cards.splice(0, half);

Enemy = cards;

$Enemy.unbind("click");
$player.unbind("click");

$playerCount.html(player.length);
$EnemyCount.html(Enemy.length);

function endGame(){
if(player.length == 0){
  $winner.html("GAME OVER </br> Enemy Wins </br> You have no more cards to play.");
}
if(Enemy.length == 0){
  $winner.html("GAME OVER </br> Player Wins </br> The Enemy has no more cards to play.");
}
  $winner.css("color", "darkgrey");
  $winner.css("font-weight", "bold");
  $("#end").css("display", "none");
  $playerNumber.html("");
  $EnemyNumber.html("");
  $draw.off();
}

$draw.on('click', function() {
  $("#EnemyName").css("color", "#000");
  $("#playerName").css("color", "#000");
  $("#optionSection").css("display", "none");
  if (arithmetic == 1) {
    $("#submit").css("display", "block");
    $("#playerAnswer").css("display", "block");
  }

  $('input').val(''); //This empties out the input box.

    assign();
})

$submit.on('click', function(){
    playerAnswer = $playerAnswer.val().trim();
    submit();
})

function assign(){

  $player.css("border-color", "black");
  $Enemy.css("border-color", "black");

  if(player.length == 0 || Enemy.length == 0){
    endGame();
  }

  $playerSuit.empty();
  $EnemySuit.empty();

  $playerSuit.css("display", "block");
  $EnemySuit.css("display", "block");

  number1=player[0][0];
  number2=Enemy[0][0];

  $playerNumber.html(number1);
  $EnemyNumber.html(number2);

  audio.play();

  suit1 = player[0][1];
  suit2 = Enemy[0][1];

if (integerChoice == 1){
   if (suit1 == 1){
     number1 = number1 - 2*(number1);
  }
     if (suit1 == 2){
       number1 = number1 - 2*(number1);
   }
   if (suit2 == 1){
     number2 = number2 - 2*(number2);
   }
     if (suit2 == 2){
       number2 = number2 - 2*(number2);
   }
}

  if (suit1 == 1) {
    suit1 = "<img src='./images/hearts.jpg'/>";
  }
  if (suit1 == 2) {
    suit1 = "<img src='./images/diamonds.jpg'/>";
  }
  if (suit1 == 3) {
    suit1 = "<img src='./images/clubs.jpg'/>";
  }
  if (suit1 == 4) {
    suit1 = "<img src='./images/spades.jpg'/>";
  }
  if (suit2 == 1) {
    suit2 = "<img src='./images/hearts.jpg'/>";
  }
  if (suit2 == 2) {
    suit2 = "<img src='./images/diamonds.jpg'/>";
  }
  if (suit2 == 3) {
    suit2 = "<img src='./images/clubs.jpg'/>";
  }
  if (suit2 == 4) {
    suit2 = "<img src='./images/spades.jpg'/>";
  }

  if (number1<11){
    for (i=0; i<(Math.abs(number1)); i++) {
      $playerSuit.append(suit1);
    };
  } else {
    if (number1 == 11 || number1 == -11) {
      numberImg1 = "<img src='./images/Jack.png'/>";
      $playerSuit.append(suit1);
      $playerNumber.html(numberImg1);
    }
    if (number1 == 12 || number1 == -12) {
      numberImg1 = "<img src='./images/Queen.png'/>";
      $playerSuit.append(suit1);
      $playerNumber.html(numberImg1);
    }
    if (number1 == 13 || number1 == -13) {
      numberImg1 = "<img src='./images/King.png'/>";
      $playerSuit.append(suit1);
      $playerNumber.html(numberImg1);
    }
  }

  if (number2<11){
    for (i=0; i<(Math.abs(number2)); i++) {
      $EnemySuit.append(suit2);
    }
  }  else {
    if (number2 == 11 || number2 == -11) {
      numberImg2 = "<img src='./images/Jack.png'/>";
      $EnemySuit.append(suit2);
      $EnemyNumber.html(numberImg2);
    }
    if (number2 == 12 || number2 == -12) {
      numberImg2 = "<img src='./images/Queen.png'/>";
      $EnemySuit.append(suit2);
      $EnemyNumber.html(numberImg2);
    }
    if (number2 == 13 || number2 == -13) {
      numberImg2 = "<img src='./images/King.png'/>";
      $EnemySuit.append(suit2);
      $EnemyNumber.html(numberImg2);
    }
  }

  playedCards.push(player[0]);
  playedCards.push(Enemy[0]);

  player.splice(0,1);
  Enemy.splice(0,1);
  $playerCount.html(player.length);
  $EnemyCount.html(Enemy.length);

  greater();

}

function war() {

  $draw.prop('disabled', true);

      for (i=0; i<3; i++){
        playedCards.push(player[0]);
        playedCards.push(Enemy[0]);
        player.splice(0,1);
        Enemy.splice(0,1);
        $playerCount.html(player.length);
        $EnemyCount.html(Enemy.length);
      }

        numberImg1 = "<img style='height:14rem;' src='./images/cards.png'/>";
        numberImg2 = "<img style='height:14rem;' src='./images/cards.png'/>";

         window.setTimeout(function() {
          audio.play();
          $playerSuit.css("display", "none");
          $EnemySuit.css("display", "none");
          $playerNumber.html(numberImg1);
          $EnemyNumber.html(numberImg2);
        }, 1800);
        window.setTimeout(function() {
          audio.play();
        }, 2600);
        window.setTimeout(function() {
          audio.play();
        }, 3400);
        window.setTimeout(function() {
            assign();
            audio.play();
        }, 4200);

        $draw.prop('disabled', false);
    }//closes war

//Alternative cHoices

function submit() {
  if (addition == 1) {
    addMath();
  }

  if (subtraction == 1) {
    subtractMath();
  }

  if (multiplication == 1) {
    multiplyMath();
  }

  if (playerAnswer == answer) {
    chosen = winner;
  } else {
    chosen = winner - 1;
  }

  mathCheck();
}

    function compareMath(){
      if (number1 > number2) {
         winner = 1;
       } else {
         winner = 2;
       }
     }

     function addMath() {
       answer = number1 + number2;
     }

     function subtractMath() {
       answer = number1 - number2;
     }

     function multiplyMath() {
       answer = number1 * number2;
     }

     function mathCheck() {
       if (chosen == winner){
         for (i=0; i<playedCards.length; i++) {
           player.push(playedCards[i]);
         }
         $winner.html("Player Wins Round");
         audio.currentTime=0;
         audio1.play();
         $("#playerName").css("color", "darkgrey");
         $playerCount.html(player.length);
         playedCards=[];
       } else if (chosen != winner) {
         for (i=0; i<playedCards.length; i++) {
           Enemy.push(playedCards[i]);
         }
         $winner.html("Enemy Wins Round");
         audio.currentTime=0;
         audio2.play();
         $("#EnemyName").css("color", "darkgrey");
         $EnemyCount.html(Enemy.length);
         playedCards=[];
       }
     }

function greater(){
  if (number1 === number2) {
    war();
  }

  if (compare == 1) {
    compareMath();
    return;
  }

  if (arithmetic == 1) {
    return;
  }

  if (number1 > number2) {
      $winner.html("Player Wins Round");
      $player.css("border-color", "red");
      for (i=0; i<playedCards.length; i++) {
        player.push(playedCards[i]);
      }
      $playerCount.html(player.length);
      playedCards=[];
  } else if (number2 > number1){
      $winner.html("Enemy Wins Round");
      $Enemy.css("border-color", "red");
      for (i=0; i<playedCards.length; i++) {
        Enemy.push(playedCards[i]);
      }
      $EnemyCount.html(Enemy.length);
      playedCards=[];
  }

}//closes greater

$("#mathOptions").on('click', function() {
    $(".hidden").css("display", "none");
    $("#options").css("display", "block");
    $(".faceCards").css("display", "block");
})

$("#compare").on('click', function() {
    $("#options").css("display", "none");
    $("#integers").css("display", "block");
    $(".compareDirections").css("display", "block");
    $("#mathOptions").css("display", "none");
    $("#directions").css("display", "block");
    compare = 1;

    $player.on('click', function(){
      chosen = 1;
      mathCheck();
    })

    $Enemy.on('click', function(){
      chosen = 2;
      mathCheck();
    })
})

//When the player clicks on arithmetic
$("#arithmetic").on('click', function() {
    $("#options").css("display", "none");
    $("#math").css("display", "flex");
    $("#mathOptions").css("display", "none");
    $("#directions").css("display", "block");
    arithmetic = 1;
})

$("#math").on('click', function() {
    $("#math").css("display", "none");
    $("#integers").css("display", "block");
})

$("#no").on('click', function() {
    $("#integers").css("display", "none");
})

$("#yes").on('click', function() {
    $("#integers").css("display", "none");
    $(".integerDirections").css("display", "block");
    integerChoice = 1;
})

$("#add").on('click', function() {
    $(".addDirections").css("display", "block");
    addition = 1;
})

$("#multiply").on('click', function() {
    $(".multiplyDirections").css("display", "block");
    multiplication = 1;
})

$("#subtract").on('click', function() {
    $(".subtractDirections").css("display", "block");
    subtraction = 1;
})


}); //closes document ready

var winConditions =[["1","2","3"], ["4","5","6"], ["7","8","9"], ["1","4","7"], ["2","5","8"], ["3","6","9"], ["1","5","9"], ["3","5","7"]];
var resetBtn = document.getElementsByTagName("button")[0]; // poosh battan plz
var tiles = document.querySelectorAll('#board #rowOne div, #board #rowTwo div, #board #rowThree div'); // Grabbing the squares
var turnCounter = document.getElementById('nextTurn'); // Title should change.

var tilesPlayed = 0; // Hit 9, prompt draw
var playerFlip = true; // what it says on the tin

var arrayX = []; // push IDs to these, pass to winConditions
var arrayO = [];

var victory = false;


for (var i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", turn);
  tiles[i].innerHTML = "-";
  } 

function turn() {
  if (this.innerHTML === "-") {
    if (playerFlip) {
      arrayX.push(this.id);
      this.innerHTML = "X";
      this.className = 'playerOneClass';
      console.log(arrayX);
      winCheck(arrayX);
        if (victory === true) {
          var audio = new Audio('match.wav');
          audio.play();
          window.setTimeout(r, 500);
          function r() {
            alert("X wins! Play again?");
            resetBoard();
          }
        }
        else {
          playerFlip = false;
          tilesPlayed++;
          turnCounter.innerHTML = "It's O's turn!";
        }
    }
    else { 
      arrayO.push(this.id);
      this.innerHTML = "O";
      this.className = 'playerTwoClass';
      console.log(arrayO);
      winCheck(arrayO);
      if (victory === true) {
        var audio = new Audio('match.wav');
        audio.play();
        window.setTimeout(r, 500);
        function r() {
          alert("O wins! Play again?");
          resetBoard();
        }
      }
      else {
        playerFlip = true;
        tilesPlayed++;
        turnCounter.innerHTML = "It's X's turn!";
        }  
    } 

    if (tilesPlayed === 9) {
      alert("It's a draw! Play again?");
    }
  }
}

function winCheck(turnArray) {
  function win(a,b,c) {
    if (turnArray.includes(a) && turnArray.includes(b) && turnArray.includes(c)) {
      victory = true; 
    }
  }
    for (var i = 0; i < 8; i++) {
      win(winConditions[i][0], winConditions[i][1],winConditions[i][2]);
    }
}

resetBtn.addEventListener('click', resetBoard);

function resetBoard() {
  console.log(tiles);
  playerFlip = true;
  victory = false;
  tilesPlayed = 0;
  arrayX = [];
  console.log(arrayX);
  arrayO = [];
   for (var i = 0; i < tiles.length; i++) {
    tiles[i].className = 'tile';
    tiles[i].innerHTML = "-";
   }
}







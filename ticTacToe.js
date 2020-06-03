const crossClass = "cross";
const circleClass ="hollowCircle";
let turn = 0; //starts from player1




// odd turns for player 1; when clicked, add crossClass to div
// even turns for player 2; when clicked, add circleClass to div

$(document).ready(function () {

  const winningConditions = [
    // Vertical cells:
    $('.cell:nth-child(3n+1)'),
    $('.cell:nth-child(3n+2)'),
    $('.cell:nth-child(3n+3)'),
    //Horizonal cells:
    $('.cell').slice(0, 3),
    $('.cell').slice(3, 6),
    $('.cell').slice(6, 9),
    // Hypotenuse cells:
    $('.cell:nth-child(4n+1)'),
    $('.cell:nth-child(2n+3)').slice(0, 3)
  ];

  const cells = $("div.cell");

  const restartButton = $("#restartButton");


  let isGameWon = false;

  const win = function () {
    let isGameWon = true;
    let isWin = false;
    for (let i=0; i<winningConditions.length; i++) {
      if ((winningConditions[i]).filter(".cross").length === 3 ||
      (winningConditions[i]).filter(".hollowCircle").length === 3) {
        isWin = true;
      }
    } return isWin;
  }


  const checkForDraw = function () {
    let drawAgain = false;
    if (cells.filter(".cross, .hollowCircle").length === 9 && win() === false) {
        drawAgain = true;
    }
    return drawAgain;
  }


  const restart = function() {
      // remove text
      $(".winningMessage").hide();
      cells.removeClass(crossClass).removeClass(circleClass);
  };


  $("div.board").addClass(crossClass);
  //show hover

  $("div.winningMessage").hide();

  cells.click( function() {
    if ($(this).is('.hollowCircle, .cross')) {
      return;} //excluding non-empty cells

    turn++ //switch turns

    if (turn % 2 !== 0) { // player 1 turns
      $(this).addClass(crossClass);
      //draw cross

      $('.board').toggleClass(circleClass).toggleClass(crossClass);
      //change hover

      if (win() === true) {
        $(".messageText").text(`Congratulation! X won the game!`);
        $(".winningMessage").show();
      }
    }


    if (turn % 2 === 0) { // switch turns to player2
      $(this).addClass(circleClass);

      $('.board').toggleClass(circleClass).toggleClass(crossClass);


      if (win() === true) {
        $(".messageText").text(`Congratulation! O won the game!`);
        $(".winningMessage").show();
      }
    }

    if (checkForDraw() === true) {
      $(".messageText").text(`There's no winner. Please draw again!`);
      $(".winningMessage").show();
    }
    // Add event listener for button. When clicked, page refresh/back to origin.
    $("#restartButton").click(restart);
  })
})











// const winningConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

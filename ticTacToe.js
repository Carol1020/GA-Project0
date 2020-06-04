const crossClass = "cross";
const circleClass ="hollowCircle";
let turn = 0; //starts from player1
let roundCounter = 1;
let crossCounter = 0;
let circleCounter = 0;
let drawCounter = 0;
let player1Name = "";
let player2Name = "";





// odd turns for player 1; when clicked, add crossClass to div.
// even turns for player 2; when clicked, add circleClass to div.

$(document).ready(function () {

  // Enter users' names.

  $("header, main, .winningMessage").hide();


  $("#nameButton").click(function(){
    if ($(".player1Name").val().length >0) {
      player1Name = $(".player1Name").val();
    } else {
      player1Name = "PLAYER 1";
    }

    if ($(".player2Name").val().length >0) {
      player2Name = $(".player2Name").val();
    } else {
      player2Name = "PLAYER 2";
    }

    $(".player1").text(`${ player1Name }`);
    $(".player2").text(`${ player2Name }`);

    $(".playerDetails").hide();
    $("header, main").show();
  })





  //Game Starts
  const cells = $("div.cell");

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
    if (cells.filter(".cross, .hollowCircle").length === cells.length && win() === false) {
      drawAgain = true;
    }
    return drawAgain;
  }


  const restart = function() {
      // remove text
      $(".playerDetails").hide();
      $(".winningMessage").hide();
      cells.removeClass(crossClass).removeClass(circleClass);
      $(".roundCounter").text(`Round: ${roundCounter}`);
      $(".crossCounter").text(`${ crossCounter }`);
      $(".circleCounter").text(`${ circleCounter }`);
      $(".drawCounter").text(`${ drawCounter }`);
  };



  $("div.board").addClass(crossClass);
  //show hover
  $(".turn").text(`${ player1Name } turn`);
  $(".turn").css('color', 'blue');

  $(".winningMessage").hide();

  cells.click( function() {
    if ($(this).is('.hollowCircle, .cross')) {
      return;
    } //excluding non-empty cells

    turn++ //switch turns

    if (turn % 2 !== 0) { // player 1 turns
      $(this).addClass(crossClass);
      //draw cross

      $(".turn").text(`${ player2Name } turn`);
      $(".turn").css('color', 'red');
      $(".board").toggleClass(circleClass).toggleClass(crossClass);
      //change hover

      if (win() === true) {
        $(".messageText").text(`Congratulation! X won the game! `);
        $(".winningMessage").show();
        crossCounter++;
        roundCounter++;
      }
    }


    if (turn % 2 === 0) { // switch turns to player2
      $(this).addClass(circleClass);

      $(".turn").text(`${ player1Name } turn`);
      $(".turn").css('color', 'blue');

      $('.board').toggleClass(circleClass).toggleClass(crossClass);


      if (win() === true) {
        $(".messageText").text(`Congratulation! O won the game! `);
        $(".winningMessage").show();
        circleCounter++;
        roundCounter++;
      }
    }

    if (checkForDraw() === true) {
      $(".messageText").text(`No winner. Draw again! `);
      $(".winningMessage").show();
      drawCounter++;
      roundCounter++;
    }

    // Add event listener for button. When clicked, page refresh/back to origin.
    $("#restartButton").click(restart);

  });
});

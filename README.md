# Project0 - ticTacToe

## 1. Functionality
* Allows players to input their names.
* Records scores of players.
* Shows whose turn it is.
* Shows numbers of rounds in total.
* Tells players who wins the game.
* Restart

## 2. HTML

### Header
* Title of the page.

### Main
* This includes everything that is shown on the actual game page.

### Aside
* Two sections:
  - Welcome page where players can input their names;
  - winning message where is shown when the game finishes.

### Features
* Each section is covered by a seperate div with a specific class/id (easier for alignments in CSS).


## 3. css Highlights
* `box-sizing: border-box;` If you set box-sizing: border-box; on an element, padding and border are included in the width and height.

* ```:root {
  --cell-width: 200px;
  --cell-height: 200px;
}``` custom properties (variables). `width: calc(var(--cell-width)*0.9)` to use it as a variable later;

* `margin: 0 20%` it uses the percentage of the window. Unless you use something over 100%, it should balance it on whatever size.

* `width: 100vw;
  height: 50vh;` A percentage of the full viewport width.

* `grid-template-columns: repeat(3, auto);` Repeat(#columns, sizeOfColumns)

* `.cell:nth-child()` Remove outer borders

* Content alignment with `display: flex`. [Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

* [Draw a shape in CSS](https://css-tricks.com/the-shapes-of-css/)

## 4. JS
* Mainly used `.hide()` & `.show()` to display welcome page, game page and winning massage.

* Call `$('.cell':nth-child())` and `.slice()` and from html to find out winnning conditions. This works for any size of board.

* Check winning conditions: cells with cross/hollowCircle Class have a length of 3. (Line 71-80 in tiTacToe.js)

* Process
  - Find winning conditions
  - Set isGameWon to be false
  - Change isGameWon to be true. Check if there is winner. If yes, print winning message.
  - If not, isGameWon stays as false. return drawAgain and print draw again message.
  - Click restart button to restart the game.

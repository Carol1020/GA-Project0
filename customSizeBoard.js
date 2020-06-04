let winningVertical = [];
let winningHorizontal = [];
let winningHypotenuse = [];
let winningConditions = [];


//support custom board sizes
const numOfColumns = Math.sqrt(cells.length);

const numOfRows = numOfColumns;

console.log(typeof(numOfColumns));

verticalConditions = function() {
  for (let i=1; i<= numOfRows; i++) {
    const verticalCondition = $(`.cell:nth-child(${numOfRows}n+${i})`);
    winningVertical.push(verticalCondition);
    winningVertical.join(" ");
  } return winningVertical;
};

horizontalConditions = function () {
  for (let i=1; i<=numOfRows; i++) {
    const horizontalCondition = $('.cell').slice((i-1)*(numOfColumns), i*numOfColumns);
    winningHorizontal.push(horizontalCondition);
  } return winningHorizontal;
};

hypotenuseConditions = function() {
  hypoenuseCondition1 = $(`.cell:nth-child(${numOfRows+1}n+1)`);
  hypoenuseCondition2 = $(`.cell:nth-child(${numOfRows-1}n+${numOfRows})`).slice(0, numOfRows);
  winningHypotenuse.push(hypoenuseCondition1, hypoenuseCondition2);
  return winningHypotenuse;
}


console.log(verticalConditions())


winningConditions.push(verticalConditions(), horizontalConditions(), hypotenuseConditions())
console.log(winningConditions)

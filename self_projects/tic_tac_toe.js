const playerSymbols = (() => {
  let turn = 0;
  const symbols = ["🟡", "🟢"];
  return () => symbols[turn++ % 2];
})();

const isPositionEmpty = (index, board) => board[index] === 0;

const isValidIndex = (index) => index >= 0 && index < 9;

const isValidMove = (index, board) =>
  isValidIndex(index) && isPositionEmpty(index, board);

const hasGameTied = (board) => board.every((cell) => cell !== 0);

const hasAnyOneWon = (symbol, board) => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningConditions.some((line) =>
    line.every((index) => board[index] === symbol)
  );
};

const generateBoardInString = (newBoard, cell, index) => {
  const symbol = cell === 0 ? "⬜️" : cell;
  newBoard += symbol + ((index + 1) % 3 === 0 ? "\n" : " ");
  return newBoard;
};

const displayBoard = (board) => {
  const boardInString = board.reduce(generateBoardInString, "");
  console.clear();
  console.log(boardInString);
};

const getUserInput = (currentSymbol, board) => {
  while (true) {
    const input = +prompt(`\t\t ${currentSymbol} Enter Your Choice (1-9)`);
    const index = input - 1;
    if (isValidMove(index, board)) {
      return index;
    }
    console.log("\t\t Please enter a valid Input!\n");
  }
};

const declareMessage = (symbol, board) => {
  const winningMsg = `\t\t${symbol} win the game🥳`;
  const tieMsg = `\t\tTie, play again!`;
  return hasAnyOneWon(symbol, board) ? winningMsg : tieMsg;
};

const isGameOver = (board, symbol) => {
  return hasAnyOneWon(symbol, board) || hasGameTied(board);
};

const startGame = () => {
  const board = Array(9).fill(0);
  let shouldGameGoOn = true;

  while (shouldGameGoOn) {
    const currentSymbol = playerSymbols();
    displayBoard(board);
    const userInput = getUserInput(currentSymbol, board);

    board[userInput] = currentSymbol;
    if (isGameOver(board, currentSymbol)) {
      displayBoard(board);
      shouldGameGoOn = false;
      console.log(declareMessage(currentSymbol, board));
    }
  }
};

startGame();

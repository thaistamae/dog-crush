const newGame = new Game();

const board = document.getElementById("board");
const startButton = document.getElementById("createGame");

const cells = document.getElementsByClassName("cell")

newGame.printBoard(board);

startButton.addEventListener("click", () => {
    board.innerHTML = "";
  
    newGame.init();
    newGame.printBoard(board);
});
  

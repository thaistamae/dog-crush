const newGame = new Game();

const board = document.getElementById("board");
const startButton = document.getElementById("createGame");
const updateBoard = document.getElementById("updateBoard");

const cells = document.getElementsByClassName("cell")


startButton.addEventListener("click", () => {
    board.innerHTML = "";
  
    newGame.init();
    newGame.printBoard(board);
    
});

updateBoard.addEventListener("click", () => {
    board.innerHTML = "";
  
    newGame.updateBoard();
    newGame.printBoard(board);
    
});
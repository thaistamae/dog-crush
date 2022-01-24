const newGame = new Game();

const board = document.getElementById("board");
const startButton = document.getElementById("createGame");
const updateBoard = document.getElementById("updateBoard");

const cells = document.getElementsByClassName("cell")

function setStartButton(){
    startButton.innerText = "RESET";
}

startButton.addEventListener("click", () => {
    if (startButton.innerText === "START"){
        board.innerHTML = "";
        newGame.init();
        newGame.printBoard(board);
        setStartButton()

    }else{
        board.innerHTML = "";
        newGame.init();
        newGame.printBoard(board);
    }
    
});

updateBoard.addEventListener("click", () => {
    board.innerHTML = "";
  
    for(let i = 0; i < 50; i++){
    newGame.updateBoard();
    }

    newGame.printBoard(board);
    
});


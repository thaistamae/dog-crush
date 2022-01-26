
const newGame = new Game();

const board = document.getElementById("board");
const resetButton = document.getElementById("createGame");
const score = document.getElementById("score");
let containers;

function cleanLinesAndColumns(){
    board.innerHTML = "";
    for(let i = 0; i < 20; i++){
    newGame.updateBoard();
    }
    newGame.printBoard(board);
}

//Gerar tela inicial
newGame.init();
cleanLinesAndColumns();
containers = document.querySelectorAll('.container');
newGame.score = 0;
score.innerText = newGame.score;


containers.forEach((container) => {
    container.addEventListener('dragstart', dragstart)
    container.addEventListener('dragover', dragover)
    container.addEventListener('dragenter', dragenter)
    container.addEventListener('drop', drop)
    container.addEventListener('dragend', dragend)
})        

// RESETBUTTON

resetButton.addEventListener("click", () => {
        board.innerHTML = "";
        newGame.init();
        cleanLinesAndColumns();      
        
        containers = document.querySelectorAll('.container');

        containers.forEach((container) => {
        container.addEventListener('dragstart', dragstart)
        container.addEventListener('dragover', dragover)
        container.addEventListener('dragenter', dragenter)
        container.addEventListener('drop', drop)
        container.addEventListener('dragend', dragend)
})        
    }  
);


// Movimentos dos icones

let cellDragged;
let cellReplaced;
let cellIdDragged;
let cellIdReplaced;

let cellDraggedBoard;
let cellReplacedBoard;
let cellIdDraggedBoard;
let cellIdReplacedBoard;

function dragstart(){
    cellDragged = this.textContent
    cellIdDragged = parseInt(this.id)
    cellDraggedBoard = newGame.board[Math.floor(parseInt(this.id)/8)][Math.floor(parseInt(this.id)%8)]    
    cellIdDraggedBoard = `${Math.floor(parseInt(this.id)/8)} ${Math.floor(parseInt(this.id)%8)}`
}

function dragover(event){
    event.preventDefault()
}

function dragenter(event){
    event.preventDefault()
}

function drop() {
    cellReplaced = this.textContent
    cellIdReplaced = parseInt(this.id)
    cellReplacedBoard = newGame.board[Math.floor(parseInt(this.id)/8)][Math.floor(parseInt(this.id)%8)]
    cellIdReplacedBoard = `${Math.floor(parseInt(this.id)/8)} ${Math.floor(parseInt(this.id)%8)}`

    this.textContent = cellDragged

    newGame.board[`${cellIdReplacedBoard[0]}`].splice([`${cellIdReplacedBoard[2]}`],1,cellDraggedBoard)

    containers[cellIdDragged].textContent = cellReplaced

    let renamedReplaced = `newGame.board`+cellIdReplacedBoard 
    renamedReplaced = cellDragged
    newGame.board[`${cellIdDraggedBoard[0]}`].splice([`${cellIdDraggedBoard[2]}`],1,cellReplacedBoard)

}

function dragend(){
    let validMoves = [cellIdDragged -1 , cellIdDragged -8, cellIdDragged +1, cellIdDragged +8]
    let validMove = validMoves.includes(cellIdReplaced)
    
    if (cellIdReplaced && validMove) {
        cellIdReplaced = null;
        cleanLinesAndColumns(); 
        
        console.log(newGame.board);
        containers = document.querySelectorAll('.container');

        containers.forEach((container) => {
        container.addEventListener('dragstart', dragstart)
        container.addEventListener('dragover', dragover)
        container.addEventListener('dragenter', dragenter)
        container.addEventListener('drop', drop)
        container.addEventListener('dragend', dragend)

        

        })

    }  else if (cellIdReplaced && !validMove) {
        containers[cellIdReplaced].textContent = cellReplaced
        containers[cellIdDragged].textContent = cellDragged
        cellIdReplaced = null;

    } else {containers[cellIdDragged].textContent = cellDragged

    }

}

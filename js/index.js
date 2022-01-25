
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

function dragstart(){
    cellDragged = this.textContent
    cellIdDragged = parseInt(this.id)
    console.log(cellIdDragged)
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
    this.textContent = cellDragged  
    containers[cellIdDragged].textContent = cellReplaced
}

function dragend(){
    let validMoves = [cellIdDragged -1 , cellIdDragged -8, cellIdDragged +1, cellIdDragged +8]
    let validMove = validMoves.includes(cellIdReplaced)
    
    if (cellIdReplaced && validMove) {
        cellIdReplaced = null;

    }  else if (cellIdReplaced && !validMove) {
        containers[cellIdReplaced].textContent = cellReplaced
        containers[cellIdDragged].textContent = cellDragged
        cellIdReplaced = null;

    } else {containers[cellIdDragged].textContent = cellDragged

    }
}


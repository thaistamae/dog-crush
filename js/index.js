
const newGame = new Game();

const board = document.getElementById("board");
const startButton = document.getElementById("createGame");
const updateBoard = document.getElementById("updateBoard");
let containers;


function setStartButton(){
    startButton.innerText = "RESET";
}

startButton.addEventListener("click", () => {
    if (startButton.innerText === "START"){
        board.innerHTML = "";
        newGame.init();
        newGame.printBoard(board);
        setStartButton();
        containers = document.querySelectorAll('.container');

        containers.forEach((container) => {
            container.addEventListener('dragstart', dragstart)
            container.addEventListener('dragover', dragover)
            container.addEventListener('dragenter', dragenter)
            //container.addEventListener('dragleave', dragleave)
            container.addEventListener('drop', drop)
            container.addEventListener('dragend', dragend)
        })        

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

/*function dragleave() {
    this.textContent = ''
}*/

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

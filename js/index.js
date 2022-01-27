const newGame = new Game();

//game
const board = document.getElementById("board");
const resetButton = document.getElementById("createGame");
const score = document.getElementById("score");
let containers;

// cronometer
const btnStart = document.getElementById('btnStart');
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');

// funcões do game 
function cleanLinesAndColumns(){
    board.innerHTML = "";
    for(let i = 0; i < 20; i++){
    newGame.updateBoard();
    }
    newGame.printBoard();
}

function printScore(){
    score.innerText = newGame.score;
}

function includeIcons(){
    for (let i = 0; i < 64; i++){
        if (containers[i].textContent == 1){
            containers[i].classList.add("border-collie")
        } else if (containers[i].textContent == 2){
            containers[i].classList.add("bull-terrier")
        } else if (containers[i].textContent == 3){
            containers[i].classList.add("dogo-argentino")
        } else if (containers[i].textContent == 4){
            containers[i].classList.add("dogo-alemao")
        }else if (containers[i].textContent == 5){
            containers[i].classList.add("poodle-frances")
        }else if (containers[i].textContent == 6){
            containers[i].classList.add("retriever-dourado")
        }
}
}

//Gerar tela inicial
newGame.init();
cleanLinesAndColumns();
containers = document.querySelectorAll('.container');
newGame.resetScore();
score.innerText = newGame.score;
includeIcons();

btnStart.addEventListener('click', () =>{
    containers.forEach((container) => {
        container.addEventListener('dragstart', dragstart)
        container.addEventListener('dragover', dragover)
        container.addEventListener('dragenter', dragenter)
        container.addEventListener('drop', drop)
        container.addEventListener('dragend', dragend)
    })
});
        

// RESETBUTTON

resetButton.addEventListener("click", () => {
        board.innerHTML = "";
        newGame.init();
        cleanLinesAndColumns();      
        newGame.resetScore();
        score.innerText = newGame.score;   
        newGame.reset();
        printTime();
        containers = null;
        containers = document.querySelectorAll('.container');
        btnStart.addEventListener('click', () =>{
        containers.forEach((container) => {
        container.addEventListener('dragstart', dragstart)
        container.addEventListener('dragover', dragover)
        container.addEventListener('dragenter', dragenter)
        container.addEventListener('drop', drop)
        container.addEventListener('dragend', dragend)
    })
})    

        includeIcons();
     
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
let renamedReplaced;

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

    newGame.board[`${cellIdDraggedBoard[0]}`].splice([`${cellIdDraggedBoard[2]}`],1,cellReplacedBoard)
    console.log(newGame.board)
}

function dragend(){
    let validMoves = [cellIdDragged -1 , cellIdDragged -8, cellIdDragged +1, cellIdDragged +8]
    let validMove = validMoves.includes(cellIdReplaced)
    
    if (cellIdReplaced && validMove) {
        cellIdReplaced = null;
        cleanLinesAndColumns();
        printScore();
                
        console.log(newGame.board);
        containers = document.querySelectorAll('.container');

        containers.forEach((container) => {
        container.addEventListener('dragstart', dragstart)
        container.addEventListener('dragover', dragover)
        container.addEventListener('dragenter', dragenter)
        container.addEventListener('drop', drop)
        container.addEventListener('dragend', dragend)

        includeIcons();

        })

    }  else if (cellIdReplaced && !validMove) {
        containers[cellIdReplaced].textContent = cellReplaced
        containers[cellIdDragged].textContent = cellDragged
        cellIdReplaced = null;

    } else {containers[cellIdDragged].textContent = cellDragged

    }



}

// funções do cronometros

function printTime() {
    printMinutes();
    printSeconds();
  }
  
  function printMinutes() {
    minDecElement.innerText = newGame.computeTwoDigitNumber(newGame.getMinutes())[0]
    minUniElement.innerText = newGame.computeTwoDigitNumber(newGame.getMinutes())[1]
  }
  
  function printSeconds() {
    secDecElement.innerText = newGame.computeTwoDigitNumber(newGame.getSeconds())[0]
    secUniElement.innerText = newGame.computeTwoDigitNumber(newGame.getSeconds())[1]
  }
  
  
  function setPauseBtn() {
    newGame.stop();
    btnStart.innerText = "START"

    
  }
  
  function setStartBtn() {
    newGame.start(printTime);
    btnStart.innerText = "PAUSE"
  }

  
  // Start/Stop Button
  btnStart.addEventListener('click', () => {
    if(btnStart.textContent === "START"){
        setStartBtn();   
    }else if(btnStart.textContent === "PAUSE"){
        setPauseBtn();
      }
  
    });
  
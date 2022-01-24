class Game {
    constructor() {
        this.boardRowsLength = 8;
        this.boardColumnsLength = 8;
        this.board = [];
        this.necessaryElements = 0;
        this.randomArray = [];
        this.typeOfElements = 5;
        this.eliminationPositionsInRows = [];
        this.eliminationPositionsInColumns = [];
        this.score = 0;
        this.clearArray = [];
    }

    generateEmptyBoard() {          
        for (let i = 0; i < this.boardRowsLength; i++) {
            this.board.push([]);
        }
    }

    countElementsToBeGenarated() {
        let elementsOnTheFullBoard = this.boardRowsLength * this.boardColumnsLength;
        let elementsOnTheBoard = 0;
        
        for(let i = 0; i < this.boardRowsLength; i++){

            elementsOnTheBoard += this.board[i].length;
            
        }     
         this.necessaryElements = elementsOnTheFullBoard - elementsOnTheBoard;
    }
    
    generateRandomElements(){
        
        for(let i = 0; i < this.necessaryElements; i++){
            this.randomArray.push(Math.floor(Math.random()*(this.typeOfElements)) + 1)
        }
    }

    bringElementsToBoard(){
        for(let i = 0; i < this.boardRowsLength; i++){
            let randomArraySize = this.randomArray.length
            for(let j = 0; j < randomArraySize; j++){
                if(this.board[i].length < this.boardColumnsLength){
                    let numberToPush = this.randomArray.shift()
                    this.board[i].push(numberToPush)
                    numberToPush = "";
                }
            }
        }
    }

    init(){
        this.board = [];
        this.generateEmptyBoard();
        this.countElementsToBeGenarated();
        this.generateRandomElements();
        this.bringElementsToBoard();
    }

    updateBoard(){
        newGame.verifyElementsInRowsToBeEminated();
        newGame.verifyElementsInColumnsToBeEminated();
        newGame.substituteElementsToBeEliminated();
        newGame.sumScore();
        newGame.eliminateTenFromMatrix();
        newGame.countElementsToBeGenarated();
        newGame.generateRandomElements();
        newGame.bringElementsToBoard();
    }


    printBoard(board) {
        for (let i = 0; i < this.board.length; i++) {
          const row = document.createElement("DIV");
          row.classList.add("row");  
    
          for (let j = 0; j < this.board[i].length; j++) {
            const container = document.createElement("DIV");
            container.classList.add("container");  
            const cell = document.createElement("SPAN");
            cell.classList.add("cell");  
            cell.innerText = this.board[i][j];
            container.appendChild(cell);
            row.appendChild(container);
          }
    
          board.appendChild(row);
        }
      }

    verifyElementsInRowsToBeEminated(){

        for (let i = 0; i < this.boardRowsLength; i++) {    
            for (let j = 0; j < this.boardColumnsLength; j++) {
              
            let verification1 = 
            (this.board[i][j] === this.board[i][j + 1] &&
             this.board[i][j] === this.board[i][j + 2] &&
             this.board[i][j] === this.board[i][j + 3] &&
             this.board[i][j] === this.board[i][j + 4]);

            let verification2 = 
            (this.board[i][j] === this.board[i][j + 1] &&
             this.board[i][j] === this.board[i][j + 2] && 
             this.board[i][j] === this.board[i][j + 3]);

            let verification3 = 
            (this.board[i][j] === this.board[i][j + 1] && 
             this.board[i][j] === this.board[i][j + 2])
                      
                if(verification1){
                    this.eliminationPositionsInRows.push(`${[i]}${[j]}`);
                    this.eliminationPositionsInRows.push(`${[i]}${[j+1]}`);
                    this.eliminationPositionsInRows.push(`${[i]}${[j+2]}`);
                    this.eliminationPositionsInRows.push(`${[i]}${[j+3]}`);
                    this.eliminationPositionsInRows.push(`${[i]}${[j+4]}`);
                } else if(verification2){
                    this.eliminationPositionsInRows.push(`${[i]}${[j]}`);
                    this.eliminationPositionsInRows.push(`${[i]}${[j+1]}`);
                    this.eliminationPositionsInRows.push(`${[i]}${[j+2]}`);
                    this.eliminationPositionsInRows.push(`${[i]}${[j+3]}`);
                } else if(verification3){
                    this.eliminationPositionsInRows.push(`${[i]}${[j]}`);  
                    this.eliminationPositionsInRows.push(`${[i]}${[j+1]}`);
                    this.eliminationPositionsInRows.push(`${[i]}${[j+2]}`);
                }
            }
        }

    }

    verifyElementsInColumnsToBeEminated(){

        for (let i = 0; i < this.boardRowsLength - 3; i++) {    
            for (let j = 0; j < this.boardColumnsLength; j++) {
              
                let verification1 = 
                (this.board[i][j] === this.board[i + 1][j] &&
                 this.board[i][j] === this.board[i + 2][j] &&
                 this.board[i][j] === this.board[i + 3][j] &&
                 this.board[i][j] === this.board[i + 4][j]);

                let verification2 = 
                (this.board[i][j] === this.board[i + 1][j] &&
                 this.board[i][j] === this.board[i + 2][j] && 
                 this.board[i][j] === this.board[i + 3][j]);
     
                let verification3 = 
                (this.board[i][j] === this.board[i + 1][j] && 
                 this.board[i][j] === this.board[i + 2][j]);
                      
                if(verification1){
                    this.eliminationPositionsInColumns.push(`${[i]}${[j]}`);
                    this.eliminationPositionsInColumns.push(`${[i+1]}${[j]}`);
                    this.eliminationPositionsInColumns.push(`${[i+2]}${[j]}`);
                    this.eliminationPositionsInColumns.push(`${[i+3]}${[j]}`);
                    this.eliminationPositionsInColumns.push(`${[i+4]}${[j]}`);
                } else if(verification2){
                    this.eliminationPositionsInColumns.push(`${[i]}${[j]}`);
                    this.eliminationPositionsInColumns.push(`${[i+1]}${[j]}`);
                    this.eliminationPositionsInColumns.push(`${[i+2]}${[j]}`);
                    this.eliminationPositionsInColumns.push(`${[i+3]}${[j]}`);
                } else if(verification3){
                    this.eliminationPositionsInColumns.push(`${[i]}${[j]}`);  
                    this.eliminationPositionsInColumns.push(`${[i+1]}${[j]}`);
                    this.eliminationPositionsInColumns.push(`${[i+2]}${[j]}`);
                }
            }
        }
    }

    substituteElementsToBeEliminated() {
        for (let i = 0; i < this.eliminationPositionsInRows.length; i++) {
          const y = this.eliminationPositionsInRows[i][0];
          const x = this.eliminationPositionsInRows[i][1];
          this.board[y][x] = 10;
        }

        for (let i = 0; i < this.eliminationPositionsInColumns.length; i++) {
            const y = this.eliminationPositionsInColumns[i][0];
            const x = this.eliminationPositionsInColumns[i][1];
            this.board[y][x] = 10;
          }

      }

    sumScore(){
        for(let i = 0; i < this.boardRowsLength; i++){
            for(let j = 0; j < this.boardColumnsLength; j++){
                if(this.board[i][j] === 10){
                    this.score += 100
                }
            }
        }
    }

    eliminateTenFromMatrix(){
        for(let i = 0; i < this.boardRowsLength; i++){
        this.clearArray.push(this.board[i].filter((currentElement) => currentElement !== 10)) 
        }
        this.board = this.clearArray
    }

    resetScore(){
        this.score = 0;
    }
}
               



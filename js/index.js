class Game {
    constructor() {
        this.boardRowsLength = 8;
        this.boardColumnsLength = 8;
        this.minesLength = 0;
        this.board = [];
        this.necessaryElements = 0;
        this.randomArray = [];
        this.typeOfElements = 5;
    }

    generateEmptyBoard() {          
        for (let i = 0; i < this.boardRowsLength; i++) {
            this.board.push([]);
        }
        return this.board;
    }

    countElementsToBeGenarated() {
        let elementsOnTheFullBoard = this.boardRowsLength * this.boardColumnsLength;
        let elementsOnTheBoard = 0;
        this.necessaryElements = elementsOnTheFullBoard - elementsOnTheBoard;
        for(let i = 0; i < this.boardRowsLength; i++){

            elementsOnTheBoard += this.board[i].length; 
        }     
            return this.necessaryElements;
    }
    
    genarateRandomElements(){
        
        for(let i = 0; i < this.necessaryElements; i++){
            this.randomArray.push(Math.floor(Math.random()*(this.typeOfElements)))

        }
        return this.randomArray;
    }

    bringElementsToBoard(){
        for(let i = 0; i < this.boardRowsLength; i++){
            for(let j = 0; j < this.randomArray.length; j++){
                if(this.board[i].length < this.boardColumnsLength){
                    this.board[i].push(this.randomArray[j])
                }
            }
        }
        return this.board;
    }


}





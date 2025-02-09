const squares = document.querySelectorAll('.tdr');
let playerTurn = document.getElementById('playerturn');
const resetButton = document.getElementById('resetButton');

let isPlayerOneTurn = true;

let playerOneChoices = [];
let playerTwoChoice = [];

const winningCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [2,5,8],
    [3,5,7],
    [1,4,7],
    [3,6,9],
]

squares.forEach((square) => {
    square.addEventListener('click', (event) =>{
        const index = event.target.dataset.index;
        if(isPlayerOneTurn && event.target.textContent == ''){
            event.target.textContent = 'X';
            playerOneChoices.push(parseInt(index));
            isPlayerOneTurn = false;
            playerTurn.textContent = "Player 2 Turn"
            playerOneChoices.sort();
            console.log(playerOneChoices);
            isWinner(winningCombos, playerOneChoices, 'Player 1');
        } else if (isPlayerOneTurn != true && event.target.textContent == ''){
            event.target.textContent = 'O';
            playerTwoChoice.push(parseInt(index));
            isPlayerOneTurn = true;
            playerTurn.textContent = "Player 1 Turn"
            playerTwoChoice.sort()
            console.log(playerTwoChoice)
            isWinner(winningCombos, playerTwoChoice, 'Player 2');
        } else {
            alert("Pick a square that has not been selected")
        }
        
    })
})
    
/* reset button resets all arrays and text settings to beginning originals */
resetButton.addEventListener('click',(event) => {
    event.preventDefault();
    squares.forEach((square) => {
        square.textContent = '';
    })
    playerOneChoices =[];
    playerTwoChoice =[];
    isPlayerOneTurn = true;
    playerTurn.textContent = "Player 1 Turn";
    $('#BSwinner').text(`No Winner yet, this should be hidden!`);
    $('#BSwinner').toggle();
})
/*this functions detects for winner*/
let isWinner = (winningArray, playerArray, currentPlayer) => {
    
    let filterArray = [];
    winningArray.forEach(function(index){
        
        filterArray = index.filter(number => playerArray.includes(number));
        console.log("index " + index);
        console.log("PlayerArray " + playerArray);
        console.log("FilterArray " + filterArray);
        console.log(true);
        if (arraysAreEqual(filterArray,index)){
           $('#BSwinner').text(`${currentPlayer} is the WINNER!!!`);
            $('#BSwinner').toggle();
            console.log(true);
        }else {
            console.log(false);
        }
    })
   
}
/*this function compares the value for the arrays to see if the values are equal */
let arraysAreEqual = (array1, array2) => {
    if(array1.length !== array2.length) return false;
    for (let i= 0; i < array1.length; i++){
        if (array1[i] !== array2[i]) return false;
    }
    return true;
};


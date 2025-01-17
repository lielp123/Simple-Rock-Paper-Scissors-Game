// Defind the elements

const thirdDiv = document.getElementById('thirdDiv');
const resultDiv = document.getElementById('resultDiv');

let result = 1;


// Called when player pressed a button, playing the game.
// Async in order to be able to use the sleep function
async function play(action)
{
    // Display ... while the program wait
    thirdDiv.innerHTML = `...`;

    // Make the program wait for 1 second.
    await sleep(1000);

    // Picks The computer's result, number from 1 to 3
    // Each number represents an action: 1 = Rock, 2 = Paper, 3 = Scissors
    let computerNumber = Math.floor(Math.random() * 3) + 1;
    console.log(computerNumber);
    displayComputerResult(computerNumber);

    checkResult(action, computerNumber);
}

// Gets the action of the player and the result of the computer and check who won
function checkResult(action, computerNum)
{
    /*
    1 > 3
    2 > 1
    3 > 2
    */

    if(action == 1){
        if(computerNum == 1){
            resultDiv.innerHTML = `Tie`;
        }
        else if (computerNum == 2){
            resultDiv.innerHTML = `Loss`;
        }
        else{
            resultDiv.innerHTML = `Win!`;
        }
    }
    else if (action == 2){
        if(computerNum == 1){
            resultDiv.innerHTML = `Win!`;
        }
        else if (computerNum == 2){
            resultDiv.innerHTML = `Tie`;
        }
        else {
            resultDiv.innerHTML = `Loss`;
        }
    }
    else {
        if (computerNum == 1){
            resultDiv.innerHTML = `Loss`;
        }
        else if(computerNum == 2){
            resultDiv.innerHTML = `Win!`
        }
        else {
            resultDiv.innerHTML = `Tie`;
        }
    }
}

// Displays the result of the computer based on the number randomized
function displayComputerResult(computerNum)
{
        if(computerNum == 1){
            thirdDiv.innerHTML = `<img class="img rock" src="Images/Rock.png">`
        }            
        else if(computerNum == 2){
            thirdDiv.innerHTML = `<img class="img paper" src="Images/Paper.png">`
        }            
        else if(computerNum == 3){
            thirdDiv.innerHTML = `<img class="img scissors" src="Images/Scissors.png">`
        }
}

// Sleep function to make the program wait before picking the computer result
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
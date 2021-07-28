/*1st step. */
/* cache the DOM */
/*as you notice we use getElementbyId when specific element meanwhile querySelector when a container element. */

let playerScore = 0;
let compScore = 0;
const userScore_Span = document.getElementById("user-score");
const compScore_Span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result = document.getElementById("para");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

/* step 4 lets create a function that will return the computers choice. */
/* lets use array. */
function pcChoice () {
    const choices = ["r", "p", "s"];
    const number = Math.floor(Math.random()*3); //we multiply it by 3 so that number range will be 0 to 2.
    return choices[number];
}

/* step 5.1 we create a function where it converts the letter into word. */
function letterConverter (letter) {
    if (letter === "r") {
        return "ROCK";
    } else if (letter === "p") {
        return "PAPER";
    } else {
        return "SCISSOR";
    }
}

/* step 5 create the argument for function win, lose, and draw. */
function winner (x, y) {
    playerScore++;
    userScore_Span.innerHTML = playerScore; //innerHTML will allow it to display in score board.
    compScore_Span.innerHTML = compScore;
    result.innerHTML= letterConverter(x) + " beats " +letterConverter(y)+ " you win lets go!!"; //since the parameter is only a letter. lets make a function that will convert it to a word.
}

function loser (x, y) {
    compScore++;
    compScore_Span.innerHTML = compScore; //innerHTML will allow it to display in score board.
    userScore_Span.innerHTML = playerScore; 
    result.innerHTML= letterConverter(x) + " beats " +letterConverter(y)+ " you lose sorry!!"; //since the parameter is only a letter. lets make a function that will convert it to a word.
}

function draw (x, y) {
    compScore_Span.innerHTML = compScore; //innerHTML will allow it to display in score board.
    userScore_Span.innerHTML = playerScore; 
    result.innerHTML= letterConverter(x) + " and " +letterConverter(y)+ " its a draw. Nice Try!"; //since the parameter is only a letter. lets make a function that will convert it to a word.
}



/* 3rd step */
/*before we fill in the arguments in the function game. lets do first the step 4, 
  where we will get the computer choice. And once we get the computer's choice we can
  now fill in the step 3 with conditionals wether who wins or lose. */
/*  */

function game(playerChoice){
    const computerChoice = pcChoice(); //we assign the function pcChoice to a variable
    switch(playerChoice+computerChoice) {

        //when user wins
        case "rs":
        case "pr":
        case "sp":
            winner (playerChoice, computerChoice);  // create a function where you can increase your score and display that you win.
            break;
        //when user lose
        case "rp":
        case "ps":
        case "sr":
            loser (playerChoice, computerChoice);   // create a function where you can increase the score of computer and display that you lose.
            break;
        //when draw
        case "rr":
        case "pp":
        case "ss":
            draw (playerChoice, computerChoice);    // create a function where you can i display that its draw.
            break;
    }

}

/* 2nd step */
/*lets create a function main where it will call the javascript and waits for user to click.
/* lets add eventListener when user clicks rock,paper, or scissor. */
/* when rock clicks, it will call the function game with parameters "r". same goes to paper and scissor. */
/* the game function will be above this step. */ 

function main () {
    rock.addEventListener('click', () => {
        game("r");
    })

    paper.addEventListener('click', () => {
        game("p");
    })

    scissor.addEventListener('click', () => {
        game("s");
    })
}

/* lets call function main */
main ();
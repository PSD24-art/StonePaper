let userScore = 0;
let compScore = 0;
let userChoice = document.querySelectorAll(".item");
let compChoices = ["rock", "paper", "scissor"];
let compChoice;

let showWinner = (userWin) =>{
    if(userWin){
        console.log("You won!")
    }
    else{
        console.log("You Lost")
    }
}

let action = userChoice.forEach((item)=>{
    item.addEventListener("click", ()=>{
        console.log("User Choice= ", item.id )
        let compIdx = Math.floor(Math.random()*3);
        compChoice = compChoices[compIdx];
        console.log("Computer Choice= ",compChoice);
        let userWin = true;
        if( item.id=== compChoice){
            console.log("its a draw");
            return;
        }
        else if(
            userChoice === "rock"
        ){
            
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice ==="rock" ? true : false;
        }
        else{
            userWin = compChoice === "rock"? false: true;
        }
         showWinner(userWin);
    })
   
})


let btnp1 = document.getElementById("btn__player-1");
let btnp2 = document.getElementById("btn__player-2");
let reset = document.getElementById("btn__reset");
let spanp1 = document.getElementById("span__player-1");
let spanp2 = document.getElementById("span__player-2");
let winScore = document.getElementById("score");
let winnerPlayer = document.getElementById("winners");
let finish = document.getElementsByClassName("winners");
let scorep1 = 0;
let scorep2 = 0;
let win = 5;

btnp1.addEventListener('click',increasep1);
btnp2.addEventListener("click",increasep2);
reset.addEventListener("click",reset_);
winScore.addEventListener("change", updateScore);

function endgame(winner){
    btnp1.disabled = true;
    btnp2.disabled = true;
    
    if (winner == 1) {
         winnerPlayer.innerHTML ="Player 1 Win!" ;
         winnerPlayer.style.color = "green";
         spanp1.style.color = "green"; 
         spanp2.style.color = "red";
    }

    if (winner == 2) {
        winnerPlayer.innerHTML = "Player 2 Win!";
        winnerPlayer.style.color = "green";
        spanp2.style.color = "green"; 
        spanp1.style.color = "red";
    }
}

function updateScore() {
    win = winScore.value;
}

function reset_(){
    spanp1.innerHTML = 0;
    spanp2.innerHTML = 0;
    scorep1 = scorep2 = 0;
    spanp1.style.color = "black"; 
    spanp2.style.color = "black";
    btnp1.disabled = false;
    btnp2.disabled = false;
    winnerPlayer.style.color = "#FFF";
}


function increasep1(){
    scorep1++;
    
    if (scorep1 >= win) endgame(1) ;
    spanp1.innerHTML = scorep1;
    
}

function increasep2(){
    scorep2++;

    if(scorep2 >= win)endgame(2);
    spanp2.innerHTML = scorep2;
        
    
}




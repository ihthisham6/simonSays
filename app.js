let gameSeq =[];
let userSeq= [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function()
{

    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});


function gameFlash(btns){
    btns.classList.add("flash");
    setTimeout(function(){
        btns.classList.remove("flash");},250);
    }
    


    function userFlash(btns){
        btns.classList.add("userflash");
        setTimeout(function(){
            btns.classList.remove("userflash");},250);
        }
        
function levelUp(){
userSeq=[];
    level++;
    h2.innerText =`Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
//console.log("curr level:",level);

  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
    }
}else{
    h2.innerHTML = `Game over ! your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";},150);
    reset();
}
}



function btnPress() {
    console.log(this); 
    let btns= this;
    userFlash(btns);
    userColor = btns.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");
for(btnq of allBtns){
    btnq.addEventListener("click",btnPress);
}

function reset(){
    started =false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}








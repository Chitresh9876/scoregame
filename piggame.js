'use strict'
const newgame=document.querySelector(".newgame");
const rolldice=document.querySelector(".rolldice");
const hold=document.querySelector(".hold");
const player0=document.querySelector(".player0");
const player1=document.querySelector(".player1");
let cscore0=document.querySelector(".cscore0");
const cscore1=document.querySelector(".cscore1");
const score0=document.querySelector(".score0");
const score1=document.querySelector(".score1");
const dice=document.querySelector(".dice");


//Initial Conditions
score0.textContent=0;
score1.textContent=0;
cscore0.textContent=0;
cscore1.textContent=0;
dice.style.display="none";
let num=0;
let i=0;
let score=0;
hold.addEventListener('click',function(){
    console.log("hold");
    if(i===0)
    score0.textContent=Number(score0.textContent)+Number(cscore0.textContent);
    else score1.textContent=Number(score1.textContent)+Number(cscore1.textContent);
    held();
    win();

});
rolldice.addEventListener('click',function(){
    num=Math.floor(Math.random()*6+1);
    console.log(num);
    dice.style.display="block";
    dice.src=`${num}.png`;
    score+=num;
    if(num===1){held()}else
    i===0?i0():i1();
    

});
newgame.addEventListener('click',function(){
    console.log("new game");
     player1.style.opacity="0.4";
    player0.style.opacity="0.6";
    cscore1.textContent="0";
    initial();
});


const i0=function(){
    cscore0.textContent=score;
    player1.style.opacity="0.4";
    player0.style.opacity="0.6";
}

const i1=function(){
    cscore1.textContent=score;
    player1.style.opacity="0.6";
    player0.style.opacity="0.4";

}

const held=function(){
    score=0;
    if(i===0){
        i=1;
        player1.style.opacity="0.6";
        player0.style.opacity="0.4";
        cscore0.textContent="0";

    }else{
        i=0;
        player1.style.opacity="0.4";
        player0.style.opacity="0.6";
        cscore1.textContent="0";
    }
    
}
const win=function(){
if(Number(score0.textContent)>=100){
alert("Player 1 Wins🎉");
initial();
}
else if(Number(score1.textContent)>=100){
alert("Player 2 Wins🎉");
initial();
}
}

const initial=function(){
cscore0.textContent=0;
cscore1.textContent=0;
score0.textContent=0;
score1.textContent=0;
dice.style.display="none";
num=0;
i=0;
score=0;
}

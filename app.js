var userScore=0;
var compScore=0;
const userScoreSpan=document.getElementById("user-score");
const compScoreSpan=document.getElementById("comp-score");
const rock=document.getElementById("r");
const paper=document.getElementById("p");
const scissors=document.getElementById("s");
const result=document.querySelector(".result>p");



function getComputerChoise(){
const choises=['rock','paper','scissors'];
const randomNum=Math.floor(Math.random() * 3);
return choises[randomNum];
}

function win(userChoice,compChoice){
 userScore++;
 userScoreSpan.innerHTML=userScore;
 compScoreSpan.innerHTML=compScore;
 result.innerHTML="you win!" + userChoice + " beats " + compChoice;
 }

 function loose(userChoice,compChoice){
 compScore++;
 compScoreSpan.innerHTML=compScore;
 userScoreSpan.innerHTML=userScore;
 result.innerHTML="computer wins!" + compChoice + " beats " + userChoice;
 }

function draw(userChoice,compChoice){

 result.innerHTML="it's a draw!";}


function game(userChoise){
const compChoice=getComputerChoise();
if(userChoise==="rock" && compChoice==="scissors" ||  userChoise==="paper" && compChoice==="rock" || userChoise==="scissors" && compChoice==="paper"){
win(userChoise,compChoice);}
else if(userChoise==="rock" && compChoice==="paper" || userChoise==="paper" && compChoice==="scissors" || userChoise==="scissors" && compChoice==="rock"){
loose(userChoise,compChoice);}
else{
draw(userChoise,compChoice); } }



function main(){
rock.addEventListener('click',function(){
game("rock");
})
paper.addEventListener('click',function(){
game("paper");
})
scissors.addEventListener('click',function(){
game("scissors");
})
}
main();
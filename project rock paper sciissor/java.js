let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
          //rock,paper,scissor
};
const drawGame=()=>{
    
    msg.innerText="game was drawn ,play again";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        userScorepara.innerText=userscore;
        
        msg.innerText=`you win!" Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorePara.innerText=compscore;
        
        msg.innerText=`You lose"; ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userchoice) =>{
       console.log("user choice=",userchoice);
       //genearte computer choice->modular
       const compchoice=genCompChoice();
       console.log("comp choice=",compchoice);
       if(userchoice==compchoice){
        //draw game
        drawGame();
       }else{
        let userWin=true;
        if(userchoice==="rock"){
            //scissors,paaper
            userWin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //rock,scissor
            userWin=compchoice==="scissors"?false:true;
        }else{
            //rock,paper
              userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compchoice);
       }
};
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});

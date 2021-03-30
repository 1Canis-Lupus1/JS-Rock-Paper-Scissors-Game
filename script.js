console.log("Connected")

function rpsGame(humanChoice){
    // console.log(humanChoice.id);
    var random=Math.floor(Math.random()*3)+1;
    var botChoice;
    switch(random){
        case 1: botChoice="rock";break;
        case 2:botChoice="paper";break;
        case 3:botChoice="scissors";break;
    }
    // console.log(botChoice)
    let res=rpsWinner(humanChoice,botChoice);
    console.log("Result:",res);
    dispResult(res,humanChoice,botChoice);
}

function rpsWinner(humanChoice,botChoice){
    console.log("human and bot:",humanChoice.id,botChoice)
    var result;
    if(humanChoice.id==botChoice){
        result="Tie";
    }
    else if((humanChoice.id="paper" && botChoice=="rock") || (humanChoice.id="scissors" && botChoice=="paper")){
        result="Won";
    }
    else if((humanChoice.id="paper" && botChoice=="scissors") || (humanChoice.id="scissors" && botChoice=="rock") || (humanChoice.id=="rock" && botChoice=="paper")){
        result="Lost";
    }
    else if(humanChoice.id="rock"){
        result="Won"
    }
    return result;
}

function dispResult(result,humanChoice,botChoice){
    //Image of Human Choice and Bot Choice Left to display:

    // const humanImage = document.createElement('img');
    // const botImage = document.createElement('img');
    // if(humanChoice=="rock"){
    //     humanImage.src="images/rock.jpg";
    // }
    // else if(humanChoice=="paper"){
    //     humanImage.src="images/paper.jpg";
    // }
    // else if(humanChoice=="scissors"){
    //     humanImage.src="images/scissors.jpg";
    // }

    // if(botChoice=="rock"){
    //     botImage.src="images/rock.jpg";
    // }
    // else if(botChoice=="paper"){
    //     botImage.src="images/paper.jpg";
    // }
    // else if(botChoice=="scissors"){
    //     botImage.src="images/scissors.jpg";
    // }

    // document.getElementById("rock").appendChild(humanImage);
    // document.getElementById("scissors").appendChild(botImage);

    if(result=="Won"){
        document.getElementById("res").innerHTML=" You Won ";
        document.getElementById("res").style.color="green";
        document.getElementById("res").style.fontSize="30px";
    }
    else if(result=="Lost"){
        document.getElementById("res").innerHTML=" You Lost ";
        document.getElementById("res").style.color="red";
        document.getElementById("res").style.fontSize="30px";
    }
    else if(result=="Tie"){
        document.getElementById("res").innerHTML=" Oops a Tie ";
        document.getElementById("res").style.color="orange";
        document.getElementById("res").style.fontSize="30px";
    }
}
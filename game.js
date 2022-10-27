let score={
    user:0,
    comp:0
}

document.querySelector(".buttons").onclick=(e)=>{
    let input=e.target.id
    if(input){
        document.querySelectorAll(".hand").forEach(($elt) => {
            $elt.classList.remove("active");
        });
        console.log(input)
        playChance(input);
    }
}

let options=["rock","paper","scissor"]

let win={
    "rock":{
        "paper":false,
        "scissor":true
    },
    "paper":{
        "rock":true,
        "scissor":false
    },
    "scissor":{
        "rock":false,
        "paper":true
    }
}

function playChance(userChoice){
    console.log({userChoice})
    let compChoice = options[Math.floor(Math.random() * options.length)];
    document.getElementById(`user-${userChoice}`).classList.add("active");
    document.getElementById(`comp-${compChoice}`).classList.add("active");
    if(compChoice==userChoice){
        updateGame("draw")
    }
    else if(win[userChoice][compChoice]){
        updateGame("user")
    }
    else{
        updateGame("comp")
    }
    
}

function updateGame(winner){
    if(winner!="draw"){
        score[winner]++;
    }
    document.querySelector(".score .user").innerText=score.user;
    document.querySelector(".score .comp").innerText = score.comp;
    if(score.user>=5||score.comp>=5){
        endGame()
    }
}

function endGame(){
    let $winner=document.getElementById("winner")
    let winner
    if(score.user>score.comp){
        winner="You"
    }
    else{
        winner="Computer"
    }
    $winner.innerText=winner
    document.querySelector("#player .buttons").classList.add("hide")
    document.querySelector(".result").classList.add("active-flex");
}

document.getElementById("play-again").onclick = () => {
    window.location = "game.html";
};
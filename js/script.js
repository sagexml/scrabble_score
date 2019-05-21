var input, score;
function init(){
    input= document.querySelector("#inputDisplay");
    score= document.querySelector("#score");
}

function showScore(){
    score.innerHTML=input.value;
}

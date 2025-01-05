var timer = 60;
var score = 0;
var hitNumber = 0;


function gameWorking(){
    document.querySelector('.bottom-p').addEventListener('click', function(dets){
        clickNumber = Number(dets.target.textContent);
        if(clickNumber === hitNumber){
            increaseScore();
            bubbleMaker();
            hitVal();
        }
    });
}

function increaseScore(){
    score += 10;
    document.querySelector('#score').textContent = score;
}

function hitVal(){
    hitNumber = Math.floor(Math.random()*10);
    document.querySelector('#hit').textContent = hitNumber;
}

function bubbleMaker(){
    var clutter = '';

for( let i = 1; i <= 119; i++){
    var repeat = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${repeat}</div>`;
}

document.querySelector('.bottom-p').innerHTML = clutter;
}

function startTimer(){
    setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector('#timer').textContent = timer;
        }      
        else{
            clearInterval(timer);
            document.querySelector('.bottom-p').innerHTML = `<h1 id = "over">Game over</h1>`;
        }  
    }, 1000);
}


startTimer();
bubbleMaker();
hitVal();
gameWorking();
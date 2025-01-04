function bubbleMaker(){
    var clutter = '';

for( let i = 1; i <= 119; i++){
    var repeat = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${repeat}</div>`;
}

document.querySelector('.bottom-p').innerHTML = clutter;
}

var timer = 60;
function startTimer(){
    setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector('#timer').textContent = timer;
        }      
        else{
            clearInterval(timer);
        }  
    }, 1000);
}


startTimer();
bubbleMaker();
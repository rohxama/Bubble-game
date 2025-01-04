var clutter = '';

for( let i = 1; i <= 119; i++){
    var repeat = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${repeat}</div>`;
}

document.querySelector('.bottom-p').innerHTML = clutter;
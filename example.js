var pos = 0;
let pagewidth = window.innerWidth;

const pacArray = [
    ['./pacMan1.png', './pacMan2.png'],
    ['./pacMan3.png', './pacMan4.png'],
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById('pacMan');
    let imgWidth = img.width;
    focus = (focus + 1) % 2;
    direction = checkpageBounds(direction, imgWidth, pos, pagewidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + 'px';
    }else {
        pos += 20;
        img.style.left = pos + 'px';
    }
}

setInterval(Run,200)

function checkpageBounds(direction, imgWidth, pos, pagewidth) {
    if (direction == 0 && pos + imgWidth > pagewidth) direction = 1;
    if (direction == 1 && pos < 0) direction = 0;
    
    return direction;
}
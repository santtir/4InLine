let canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");
let buttonDraw = document.getElementById("buttonDraw");

let width = canvas.width;
let height = canvas.height;

let drawing = false;

function getMousePos (canvas, e) {
    let clientRect = canvas.getBoundingClientRect();
    return{
        x: Math.round(e.clientX - clientRect.left),
        y: Math.round(e.clientY - clientRect.top)
    }
}

buttonDraw.addEventListener('click', function(){
    ctx.beginPath();

    canvas.addEventListener("click", function(e) {
        drawing = !drawing;
    }, false);

    canvas.addEventListener("mousemove", function(e) {
        if (drawing) {
            let m = getMousePos(canvas, e);
            ctx.lineWidht = 2;
            ctx.strokeStyle = '#A1C25E';
            ctx.fillStyle = '#A1C25E';

            ctx.arc(m.x, m.y, 50, 0, 2*Math.PI);
            //ctx.fillRect(m.x -25, m.y - 25, 50, 50);

            console.log('x: ' + m.x + 'y: ' + m.y);
            ctx.stroke();
        }
}, false);
})
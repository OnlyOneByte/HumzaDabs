
var
    // Obtain a reference to the canvas element using its id.
    htmlCanvas = document.getElementById('c'),
    // Obtain a graphics context on the canvas element for drawing.
    context = htmlCanvas.getContext('2d');


a



let width = 390;
let height = 100;
let spacerFromTop = 5;
var secondsPerDab = 1.4;
let numDabs = 0;




// Start listening to resize events and draw canvas.
initialize();

// does the interval
setInterval(calculateDab, secondsPerDab*1000);




// dab calculations
function calculateDab() {
    var myDateTime = 0;
    // yeehaw
    var startTime = 1550449465000;
    myDateTime = new Date().getTime();
    myDateTime = (myDateTime - startTime)/1000;
    numDabs = myDateTime / secondsPerDab;
    numDabs = Math.trunc(numDabs);
    redraw();

}



function initialize() {
    // Register an event listener to call the resizeCanvas() function 
    // each time the window is resized.
    window.addEventListener('resize', resizeCanvas, false);
    // Draw canvas border for the first time.
    calculateDab();
    resizeCanvas();
}

// Display custom canvas. In this case it's a blue, 5 pixel 
// border that resizes along with the browser window.
function redraw() {
    // draw the filled in rect with text.
    context.fillStyle = "#292c2f";
    context.rect(window.innerWidth / 2 - width / 2, spacerFromTop, width, height);
    context.fill();

    // get text
    context.fillStyle = "#8f9296";
    context.font = "26px Arial";
    context.fillText("Humza's dabs are an artform.", window.innerWidth / 2 - width / 2 + 25, spacerFromTop + 35);
    context.fillStyle = "#8f9296";
    context.font = "18px Arial";
    context.fillText("Number of dabs: " + numDabs, window.innerWidth / 2 - width / 2 + 25, spacerFromTop + 75);

}

// Runs each time the DOM window resize event fires.
// Resets the canvas dimensions to match window,
// then draws the new borders accordingly.
function resizeCanvas() {
    htmlCanvas.width = window.innerWidth;
    htmlCanvas.height = window.innerHeight;

    redraw();
}

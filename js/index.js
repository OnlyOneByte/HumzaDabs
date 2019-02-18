
var
    // Obtain a reference to the canvas element using its id.
    htmlCanvas = document.getElementById('c'),
    // Obtain a graphics context on the canvas element for drawing.
    context = htmlCanvas.getContext('2d');

// Start listening to resize events and draw canvas.
initialize();

function initialize() {
    // Register an event listener to call the resizeCanvas() function 
    // each time the window is resized.
    window.addEventListener('resize', resizeCanvas, false);
    // Draw canvas border for the first time.
    resizeCanvas();
}

// Display custom canvas. In this case it's a blue, 5 pixel 
// border that resizes along with the browser window.
function redraw() {
    // draw the filled in rect with text.
    context.fillStyle = "#85B3E7";
    let width = 350;
    let height = 100;
    let spacerFromTop = 80;
    context.rect(window.innerWidth / 2 - width / 2, spacerFromTop, width, height);
    context.fill();

    // get text
    context.fillStyle = "#000000";
    context.font = "26px Arial";
    context.fillText("Welcome to Hamza Dabs!", window.innerWidth / 2 - width / 2 + 25, spacerFromTop + 35);
    context.font = "18px Arial";
    context.fillText("Counter to be added", window.innerWidth / 2 - width / 2 + 90, spacerFromTop + 75);
}

// Runs each time the DOM window resize event fires.
// Resets the canvas dimensions to match window,
// then draws the new borders accordingly.
function resizeCanvas() {
    htmlCanvas.width = window.innerWidth;
    htmlCanvas.height = window.innerHeight;
    redraw();
}
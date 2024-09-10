let rotationX = 0;
let rotationY = 0;
let velocityX = 0;
let velocityY = 0.0150; // Initial rotation speed
let isDragging = false;
let lastMouseX, lastMouseY;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(0);
    
    if (!isDragging) {
        // Continue rotation when not dragging
        rotationX += velocityX;
        rotationY += velocityY;
    }
    
    rotateX(rotationX);
    rotateY(rotationY);
    
    // Draw the globe
    stroke(255);
    noFill();
    sphere(200); // 200 is the radius of the sphere
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
    isDragging = true;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
}

function mouseReleased() {
    isDragging = false;
}

function mouseDragged() {
    if (isDragging) {
        const deltaX = mouseX - lastMouseX;
        const deltaY = mouseY - lastMouseY;
        
        velocityX = -deltaY * 0.00055;
        velocityY = deltaX * 0.00055;
        
        rotationX += velocityX;
        rotationY += velocityY;
        
        lastMouseX = mouseX;
        lastMouseY = mouseY;
    }
}

const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function Circle(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI * 2);
        c.fillStyle = "rgba(255,255,255,0.5)";
        c.fill();
        c.stroke();
    }

    this.update = function () {
        if (x + radius > window.innerWidth || x - radius < 0) {
            dx = -dx;
        }
    
        if (y + radius > window.innerHeight || y - radius < 0) {
            dy = -dy;
        }
    
        x += dx;
        y += dy;

        this.draw();
    }
}

var circleArray = []

for (var i = 0; i < 2000; i++) {

    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    var radius = Math.random() * 3;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}



function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

    
}

animate();
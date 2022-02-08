/*canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d")
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;

class Ball {
    constructor(x,y,speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    };
    draw = () => {
        ctx.beginPath();
        ctx.fillStyle = 'red';
		ctx.arc(this.x,this.y,25,0,2*Math.PI);
		ctx.fill();
        ctx.closePath();
    };
};

function animate() {
    ball.draw();
    requestAnimationFrame(animate);
};

let ball = new Ball(30,30,30);

animate();*/
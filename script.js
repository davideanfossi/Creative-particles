// ------------------ FINAL VERSION ------------------
class particle{

    constructor(){
        this.x = mx;
        this.y = my;

        lastmx = this.x;
        lastmy = this.y;

        if(setShape === 0){
            this.vx = (Math.random() - 0.5) * speed;
            this.vy = (Math.random() - 0.5) * speed;
        } else {
            this.angle = Math.random() * 2*Math.PI;
            this.vx = Math.sin(this.angle) * speed * 0.5;
            this.vy = Math.cos(this.angle) * speed * 0.5;
        }   

        this.alpha = 1;
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.frequency = 0.06;
        this.color = "";
    }

    update(){
        this.x += this.vx;
        this.y += this.vy;

        this.alpha -= 0.018;
    }

    updateColor(i){
        this.r = Math.sin(this.frequency*i + 0) * 127 + 128; 
        this.g = Math.sin(this.frequency*i + 2) * 127 + 128; 
        this.b = Math.sin(this.frequency*i + 4) * 127 + 128; 
    }

    show(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, 2*Math.PI, false);
        this.color = "rgba(" + this.r + ", " + this.b + ", " + this.g + ", " + this.alpha + ")";
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    finished(){
        return this.alpha < 0;
    }

}

var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

var speedSlider = document.getElementById("speed");
var slider2 = document.getElementById("onOff");
var onOff = slider2.checked;
var radius = document.getElementById("radius");
var colorSlider = document.getElementById("color");
var rvs = document.getElementById("rvs");
var revers = rvs.checked;
var squareBox = document.getElementById("square");

var lastX = 0, lastY = 0;
var mx, my, lastmx, lastmy, setShape = 0;
var speed = speedSlider.value * 0.05;
var r = radius.value.value / 10;
var colorSpeed = colorSlider.value / 100;
var flag = false;

function resize(){
    canvas.setAttribute("width", window.innerWidth - 200 + "px");
    canvas.setAttribute("height", window.innerHeight + "px");
    document.getElementById("controls").style.height =  window.innerHeight + "px";
}
resize();

function turn(){
    particles = [];
    mx = -600;
    my = -600;
    onOff = slider2.checked;
    if (onOff) {
        canvas.style.cursor = "none";
    } else {
        canvas.style.cursor = "default ";
    }
}

canvas.onmousedown = function(down){
    if (down.button === 0){
        flag = true;
        mx = down.clientX;
        my = down.clientY;
    }   
}

canvas.onmouseup = function(up){
    if (up.button === 0){
        flag = false;
        mx = -600;
        my = -600;
    }    
}


//setXY function is also used to update sliders values.
function setXY(event){
    if (flag) {
        mx = event.clientX;
        my = event.clientY;
        speed = speedSlider.value * 0.05;
        r = radius.value / 10;
        colorSpeed = colorSlider.value / 100;
    }
}

function clr(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mx = -600;
    my = -600;
    particles = [];
}

function rst(){
    speedSlider.value = 80;
    radius.value = 120;
    colorSlider.value = 50;
    rvs.checked = false;
    revers = false;
    setShape = 0;
    squareBox.checked = true;
}

function setCircle(){
    setShape = 1;
}

function setSquare(){
    setShape = 0;
}

function reverse(){
    revers = rvs.checked;
    particles = [];
    mx = -600;
    my = -600;
}


var particles = [];
var i = 0;
var j = 0;

var id = setInterval(draw, 10);
function draw(){
    if (onOff) {
        for(var k = 0; k < 4; k++){
            let p = new particle();
            p.updateColor(j);
            particles.push(p);
        }
        
        if (revers) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        for(var i = 0; i < particles.length; i++){
            particles[i].update();
            particles[i].show();
            if (particles[i].finished()){
                particles.splice(i, 1);
            }
        }
        j += colorSpeed;
    }
}






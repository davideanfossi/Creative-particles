// ------------------ MOUSE CLICK + NEW PARTICLES CHANGING COLOR ------------------
var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
var speedSlider = document.getElementById("speed");
var slider2 = document.getElementById("onOff");
var onOff = slider2.checked;
var radius = document.getElementById("radius");

canvas.setAttribute("width", window.innerWidth - 200 + "px");
canvas.setAttribute("height", window.innerHeight + "px");
document.getElementById("controls").style.height =  window.innerHeight + "px";

function turn(){
    onOff = slider2.checked;
    if (onOff) {
        canvas.style.cursor = "none";
    } else {
        canvas.style.cursor = "default ";
    }
}


var mx, my, lastmx, lastmy;
var speed = speedSlider.value * 0.05;
var r = radius.value.value / 10;

function setXY(event){
    mx = event.clientX;
    my = event.clientY;
    speed = speedSlider.value * 0.05;
    r = radius.value / 10;

}

var lastX = 0, lastY = 0;
class particle{

    constructor(){
        this.x = mx;
        this.y = my;

        lastmx = this.x;
        lastmy = this.y;

        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;

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

var particles = [];
var i = 0;
var j = 0;

function clr(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mx = -200;
    my = -200;
    particles = [];
}

var id = setInterval(draw, 10);
function draw(){
    if (onOff) {
        for(var k = 0; k < 4; k++){
            let p = new particle();
            p.updateColor(j);
            particles.push(p);
        }
        
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(var i = 0; i < particles.length; i++){
            particles[i].update();
            particles[i].show();
            if (particles[i].finished()){
                particles.splice(i, 1);
            }
        }
        j += 0.5;
    }
}





// ------------------ MOUSE FOLLOW v2 + NEW PARTICLES CHANGING COLOR ------------------
/* var mx, my, lastmx, lastmy, lastvx, lastvy;

function setXY(event){
    mx = event.clientX;
    my = event.clientY;
}

var lastX = 0, lastY = 0;
class particle{

    constructor(){
        this.x = mx;
        this.y = my;
        

        if((mx - lastmx) !== 0){
            this.vx = -(mx - lastmx) * 0.5;
            this.vy = -(my - lastmy) * 0.5;
        } else{
            this.vx = lastvx;
            this.vy = lastvy;
        }
        this.vx += -(Math.random() - 0.5) * 0.1;
        this.vy += -(Math.random() - 0.5) * 0.1;

        lastvx = this.vx;
        lastvy = this.vy;

        lastmx = this.x;
        lastmy = this.y;

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
        ctx.arc(this.x, this.y, 16, 0, 2*Math.PI, false);
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

var particles = [];
var i = 0;
var j = 0;


var id = setInterval(draw, 10);
function draw(){
    for(var k = 0; k < 3; k++){
        let p = new particle();
        p.updateColor(j);
        particles.push(p);
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < particles.length; i++){
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()){
            particles.splice(i, 1);
        }
    }
    j++;
} */


// ------------------ MOUSE FOLLOW + NEW PARTICLES CHANGING COLOR ------------------
/* let mx, my;

function setXY(event){
    mx = event.clientX;
    my = event.clientY;
}

var lastX = 0, lastY = 0;
class particle{

    constructor(){
        this.x = mx;
        this.y = my;
        
        this.vx = Math.random()*2 - 1;
        this.vy = Math.random()*4 - 5;

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
        this.alpha -= 0.012;
    }

    updateColor(i){
        this.r = Math.sin(this.frequency*i + 0) * 127 + 128; 
        this.g = Math.sin(this.frequency*i + 2) * 127 + 128; 
        this.b = Math.sin(this.frequency*i + 4) * 127 + 128; 
    }

    show(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 16, 0, 2*Math.PI, false);
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

var particles = [];
var i = 0;
var j = 0;


var id = setInterval(draw, 10);
function draw(){
    let p = new particle();
    p.updateColor(j);
    particles.push(p);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < particles.length; i++){
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()){
            particles.splice(i, 1);
        }
    }
    j++;
} */





// ------------------ ALL PARTICLES CHANGING COLOR ------------------
/* class particle{

    constructor(){
        this.x = 300;
        this.y = 550;
        this.vx = Math.random()*2 - 1;
        this.vy = Math.random()*4 - 5;
        this.alpha = 1;
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.frequency = 0.06;
        this.color = "";
    }

    update(i){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.012;
        this.r = -1 * Math.sin(this.frequency*i + 0) * 127 + 128; 
        this.g = -1 * Math.sin(this.frequency*i + 2) * 127 + 128; 
        this.b = -1 * Math.sin(this.frequency*i + 4) * 127 + 128; 
    }

    show(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 16, 0, 2*Math.PI, false);
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

var particles = [];
var i = 0;
var j = 0;


var id = setInterval(draw, 20);
function draw(){
    let p = new particle();
    //p.updateColor(j);
    particles.push(p);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < particles.length; i++){
        particles[i].update(j);
        particles[i].show();
        if (particles[i].finished()){
            particles.splice(i, 1);
        }
    }
    j++;
} */
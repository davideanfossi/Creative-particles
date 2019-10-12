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
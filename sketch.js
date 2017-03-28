var budi;

function preload(){
    budi = loadImage("budi.png");
}

function setup(){
    createCanvas(600, 400);
    p1 = new Pacman(300, 200);
}

function draw(){
    background(0);
    p1.display();
    p1.move();
    p1.boundary();
}


function Pacman(x, y){
    this.x = x;
    this.y = y;
    this.display = function(){
        image(budi, this.x, this.y, 40, 40);
    };
    this.move = function(){
        if(keyIsDown(UP_ARROW)){
            this.y -= 5;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.y += 5;
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.x += 5;
        }
        if(keyIsDown(LEFT_ARROW)){
            this.x -= 5;
        }
    };
    this.boundary = function(){
        if(this.x > width){
            this.x = 0;
        }
        if(this.x < 0){
            this.x = width;
        }
        
        if(this.y > height){
            this.y = 0;
        }
        if(this.y < 0){
            this.y = height;
        }
    }
}

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;
car1_img = "car1.png";

car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 100;
car2_img = "car2.png";

background_img = "racing.jpg";


//Showing pictures on html
function add(){
    background_imgTag = new Image();//Defining a var with a new image
    background_imgTag.onload = uploadBackground; //Setting a function, onloading this var
    background_imgTag.src= background_img;//Load Img
    //car1
    car1_imgTag = new Image();//Defining a var with a new image
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_img;
    //car2
    car2_imgTag = new Image();//Defining a var with a new image
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}


//Coding for key pressing
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log (keyPressed);

if (keyPressed=='38'){
    up();
    console.log ("car 1 up");
}

if (keyPressed=='40'){
    down();
    console.log ("car1 down");
}
if (keyPressed=='37'){
    left();
    console.log ("car1 left");
}
if (keyPressed=='39'){
    right();
    console.log ("car1 right");
}







if (keyPressed=='65'){
    up();
    console.log ("car2 up");
}

if (keyPressed=='66'){
    down();
    console.log ("car2 down");
}
if (keyPressed=='67'){
    left();
    console.log ("car2 left");
}
if (keyPressed=='68'){
    right();
    console.log ("car2 right");
}
}
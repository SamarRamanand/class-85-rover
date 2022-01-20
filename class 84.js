canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;

//img_image="Alpkey.png";
//function add();



background_image="mars.jpg";
rover_image="rover.png";

rover_X = 10;
rover_Y = 10;
function add(){
    background_imageTag=new Image();
    background_imageTag.onload= uploadBackground;
    background_imageTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imageTag, 0 , 0 , canvas.width,canvas.height);
}

   // function my_keydown(e){
//keyPressed = e.keyCode;
//console.log(keyPressed);
    

//if((keyPressed >=97 && keyPressed<=122)) (keyPressed >=65 &&keyPressed >=90);

   // {
//alphabetkey();
//document.getElementById("d1").innerHTML="You pressed Alphabet Key"
//}
function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_X, rover_Y, rover_width, rover_height);

}
window.addEventListener("keydown", my_keydown); 
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed =='38')
    {
        up();
        console.log("up");
        
    }
    
    if(keyPressed =='40')
    {
        down();
        console.log("down");
        
    }
    if(keyPressed =='37')
    {
        left();
        console.log("left");
        
    }
    if(keyPressed =='39')
    {
        right();
        console.log("right");
        
    }
}

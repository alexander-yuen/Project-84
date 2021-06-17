canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "https://i.pinimg.com/736x/d0/9c/4c/d09c4cfd1b93cc66dc13c8b461fd2145.jpg";

rover_image = "https://i.pinimg.com/736x/d0/9c/4c/d09c4cfd1b93cc66dc13c8b461fd2145.jpg";
rover_x = 10;
rover_y = 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = "https://i.pinimg.com/736x/d0/9c/4c/d09c4cfd1b93cc66dc13c8b461fd2145.jpg";
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover.width, rover.height);
    
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }

        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }

        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }

        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
    }
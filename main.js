var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object)});
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        player_image_object = Img;
        player_image_object.scaleToWidth(block_image_width);
        player_image_object.scaleToHeight(block_image_height);
        player_image_object.set({
            top:player_y,
            left:player_x
            });
        canvas.add(player_image_object)});
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38') {
        up();
        console.log("UP")
    }

    if(keyPressed == '37') {
        left();
        console.log("LEFT")
    }

    if(keyPressed == '39') {
        right();
        console.log("right")
    }

    if(keyPressed == '40') {
        down();
        console.log("DOWN")
    }

    if(keyPressed == '70') {
        new_image("ironman_face.png");
        console.log("face is shown")
    }

    if(keyPressed == '66') {
        new_image("spiderman_body.png");
        console.log("body is shown")
    }

    if(keyPressed == '76') {
        new_image("hulk_legs.png");
        console.log("legs are shown")
    }

    if(keyPressed == '82') {
        new_image("thor_right_hand.png");
        console.log("right hand is shown")
    }

    if(keyPressed == '72') {
        new_image("ironman_left_hand.png");
        console.log("left hand is shown")
    }
}
var canvas = new fabric.Canvas('myCanvas');

playerX = 500;
playerY = 250;

partHeight = 30;
partWidth = 30;

var player = "";
var part = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        player = Img;

        player.scaleToWidth(150);
        player.scaleToHeight(140);

        player.set({
            top:playerY,
            left:playerX
        });

        canvas.add(player);
    });
}

function newImg(getImg) {
    fabric.Image.fromURL(getImg, function(Img) {
        part = Img;

        part.scaleToWidth(partWidth);
        part.scaleToHeight(partHeight);

        part.set({
            top:playerY,
            left:playerX
        });

        canvas.add(part);
    });
}

addEventListener("keydown", kDown);

function kDown(e) {
    keyPress = e.keyCode;
    console.log(keyPress);

    if (e.shiftKey == true & keyPress == '80') {
        console.log("p + shift key pressed");

        partHeight = partHeight + 10;
        partWidth = partWidth + 10;

        document.getElementById("current_height").innerHTML = partHeight;
        document.getElementById("current_width").innerHTML = partWidth;
    }

    if (e.shiftKey == true & keyPress == '77') {
        console.log("m + shift key pressed");

        partHeight = partHeight - 10;
        partWidth = partWidth - 10;

        document.getElementById("current_height").innerHTML = partHeight;
        document.getElementById("current_width").innerHTML = partWidth;
    }

    if (keyPress == '37') {
        left();
        console.log("left");
    }
    if (keyPress == '38') {
        up();
        console.log("up");
    }
    if (keyPress == '39') {
        right();
        console.log("right");
    }
    if (keyPress == '40') {
        down();
        console.log("down");
    }

    if (keyPress == 87) {
        newImg('head.png');
        console.log("a");
    }
    if (keyPress == 65) {
        newImg('leftArm.png');
        console.log("w");
    }
    if (keyPress == 68) {
        newImg('rightArm.png');
        console.log("d");
    }
    if (keyPress == 83) {
        newImg('leg.png');
        console.log("s");
    }
    if (keyPress == 66) {
        newImg('body.png');
        console.log("_");
    }
    
}

function up() {
    if (playerY >= 0) {
        playerY = playerY - partHeight;
        console.log("Player x = " + playerX + ", y = " + playerY);
        canvas.remove(player);
        playerUpdate();
    }
}
function down() {
    if (playerY <= 500) {
        playerY = playerY + partHeight;
        console.log("Player x = " + playerX + ", y = " + playerY);
        canvas.remove(player);
        playerUpdate();
    }
}
function left() {
    if (playerY >= 0) {
        playerX = playerX - partWidth;
        console.log("Player x = " + playerX + ", y = " + playerY);
        canvas.remove(player);
        playerUpdate();
    }
}
function right() {
    if (playerY <= 1000) {
        playerX = playerX + partWidth;
        console.log("Player x = " + playerX + ", y = " + playerY);
        canvas.remove(player);
        playerUpdate();
    }
}
function TriangleWave() {

    while (instance1.count < instance1.rotationMax) {
        instance1.rect(instance1.count, instance1.count, 1, 1);
        instance1.count++;
    }

    if (instance1.count === instance1.rotationMax) {
        instance1.xContinue = instance1.count;
        while (i1.count > 0) {
            instance1.rect(instance1.xContinue, instance1.count, 1, 1);
            instance1.xContinue++;
            instance1.count--;
        }
    }

}

function TriangleWaveMousePressed() {
    while (instance1.mousePressed) {
        while (instance1.count < instance1.rotationMax) {
            instance1.rect(instance1.count, instance1.count, 1, 1);
            instance1.count++;
        }

        if (instance1.count === instance1.rotationMax) {
            instance1.xContinue = instance1.count;
            while (i1.count > 0) {
                instance1.rect(instance1.xContinue, instance1.count, 1, 1);
                instance1.xContinue++;
                instance1.count--;
            }
        }
    }
}


var canvas;
var MousePress = false;

function windowResized() {
    canvas = createCanvas(600, 300);
    canvas.position(100, 300);
    canvas.style('z-index', '-1');

    background(180, 90, 0);
}

function setup() {
    canvas = createCanvas(600, 300);
    canvas.parent('#Parent');
    canvas.style('z-index', '-1');
}

function draw() {
    if (!MousePress) {

        background(180, 0, 0);
    }
}

function MOUSEFOLLOW() {
    var Canvas1 = document.getElementById('ParentCanvas');
    Width = Canvas1.offsetWidth;
    Height = Canvas1.offsetHeight;
    var canvas1 = createCanvas(Width, 600);
    canvas1.parent('#ParentCanvas');

    var MouseX = mouseX;
    var MouseY = mouseY;

    if (MouseY <= Height && MouseY >= 0) {
        if (MouseX < Width / 2) {
            if (MouseY > Height / 2) {
                background(30, 60, 90);
                rect((Width / 2) - 90 - (Width / 3), MouseY, 90, 30);
                MousePress = true;
                Count = 0;
            }
            else {
                background(30, 60, 90);
                rect((Width / 2) - 90 - (Width / 3), MouseY, 90, 30);
                MousePress = true;
                Count = 0;
            }
        }

        else {
            if (MouseY > Height / 2) {
                background(30, 60, 90);
                rect((Width / 2) + (Width / 3), MouseY, 90, 30);
                MousePress = true;
                Count = 0;
            }
            else {
                background(30, 60, 90);
                rect((Width / 2) + (Width / 3), MouseY, 90, 30);
                MousePress = true;
                Count = 0;
            }
        }
    }

    else {
        if (MouseX < Width / 2) {
            if (MouseY > Height / 2) {
                background(30, 60, 90);
                rect((Width / 2) - 90 - (Width / 3), (Height / 2) + (Height / 3), 90, 30);
                MousePress = true;
                Count = 0;
            }
            else {
                background(30, 60, 90);
                rect((Width / 2) - 90 - (Width / 3), (Height / 2) - 30 - (Height / 3), 90, 30);
                MousePress = true;
                Count = 0;
            }
        }

        else {
            if (MouseY > Height / 2) {
                background(30, 60, 90);
                rect((Width / 2) + (Width / 3), (Height / 2) + (Height / 3), 90, 30);
                MousePress = true;
                Count = 0;
            }
            else {
                background(30, 60, 90);
                rect((Width / 2) + (Width / 3), (Height / 2) - 30 - (Height / 3), 90, 30);
                MousePress = true;
                Count = 0;
            }
        }
    }
}
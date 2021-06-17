var Width;
var Height;

function setup() {
    var Canvas1 = document.getElementById('ParentCanvas');
    Width = Canvas1.offsetWidth;
    Height = Canvas1.offsetHeight;
    var canvas1 = createCanvas(Width, 600, WEBGL);
    angleMode(DEGREES);
    canvas1.parent('#ParentCanvas');
}

function windowResized() {
    var Canvas1 = document.getElementById('ParentCanvas');
    Width = Canvas1.offsetWidth;
    var canvas1 = createCanvas(Width, 600);
    canvas1.parent('#ParentCanvas');
}

var Count = 0;
var MousePress = false;

function draw() {

    MainFlow();

    Count++;

    console.log(Count);

    if (Count === 30) {
        MousePress = false;
    }
}

function MainFlow() {
    if (!MousePress) {
        background(0, 0, 0);

        rotateX(60);

        noFill();
        stroke(90);

        for (var track = 0; track < 27; track++) {

            var red = map(sin(frameCount / 2), -1, 1, 90, 90);
            var green = map(track, 30, 60, 90, 180);
            var blue = map(cos(frameCount), -1, 1, 180, 180);

            stroke(red, green, blue);

            beginShape()
            for (var sector = 0; sector < 360; sector += 9) {
                var radius = track * 10;
                var x = radius * cos(sector);
                var y = radius * sin(sector);
                var z = sin(frameCount * 3 + track * 10) * 27;

                vertex(x, y, z);
            }
            endShape(CLOSE);
        }
    }
}

function mousePressed() {
    background(0, 0, 0);

    rotateX(60);

    noFill();
    stroke(90);

    for (var track = 0; track < 27; track++) {

        stroke(30, 60, 90);

        beginShape()
        for (var sector = 0; sector < 360; sector += 9) {
            var radius = track * 10;
            var x = radius * cos(sector);
            var y = radius * sin(sector);
            var z = sin(frameCount * 3 + track * 10) * 27;

            vertex(x, y, z);
        }
        endShape(CLOSE);
    }

    Count = 0;
    MousePress = true;
}
w = window.innerWidth * .9;
h = window.innerHeight;

aspect = w/h;

var lines = [];

var speed = 10;

//var y = 100;
var x1Offset = 0.0;
var y1Offset = 1.0;
var x2Offset = 2.0;
var y2Offset = 3.0;

var offsetIncrement = 0.01;

var colorStart = 50;
var strokeColorRed = colorStart;
var strokeColorGreen = colorStart;
var strokeColorBlue = colorStart;
var strokeColorInc = 'r';
var colorIncrement = 10;

function setup() {
  var lineCount = 200;
  createCanvas(w, h);
  for (var i = 0; i < lineCount; i++) {
    x1Offset = x1Offset + offsetIncrement;
    y1Offset = y1Offset + offsetIncrement;
    x2Offset = x2Offset + offsetIncrement;
    y2Offset = y2Offset + offsetIncrement;
    var x1 = noise(x1Offset) * width;
    var y1 = noise(y1Offset) * height;
    var x2 = noise(x2Offset) * width;
    var y2 = noise(y2Offset) * height;
    switch (strokeColorInc) {
      case 'r':
        strokeColorRed += colorIncrement;
        if (strokeColorRed > 255) {
          strokeColorRed = colorStart;
          strokeColorInc = 'g';
        }
        break;
      case 'g':
        strokeColorGreen += colorIncrement;
        if (strokeColorGreen > 255) {
          strokeColorGreen = colorStart;
          strokeColorInc = 'b';
        }
        break;
      case 'b':
        strokeColorBlue += colorIncrement;
        if (strokeColorBlue > 255) {
          strokeColorBlue = colorStart;
          strokeColorInc = 'r';
        }
        break;
    }
    lines[i] = new Line(x1, y1, x2, y2, 'rgb(' + strokeColorRed + ',' + strokeColorGreen + ',' + strokeColorBlue + ')');
  }

}

function draw() {
  try {
  //speed = map(mouseX, 0, width, 0, 50);
    background(0);
    for (i = 0; i < lines.length; i++) {
      lines[i].show();
    }
    x1Offset = x1Offset + offsetIncrement;
    y1Offset = y1Offset + offsetIncrement;
    x2Offset = x2Offset + offsetIncrement;
    y2Offset = y2Offset + offsetIncrement;
    x1 = noise(x1Offset) * width;
    y1 = noise(y1Offset) * height;
    x2 = noise(x2Offset) * width;
    y2 = noise(y2Offset) * height;
    //translate(width / 2, height / 2);

    switch (strokeColorInc) {
      case 'r':
        strokeColorRed += colorIncrement;
        if (strokeColorRed > 255) {
          strokeColorRed = colorStart;
          strokeColorInc = 'g';
        }
        break;
      case 'g':
        strokeColorGreen += colorIncrement;
        if (strokeColorGreen > 255) {
          strokeColorGreen = colorStart;
          strokeColorInc = 'b';
        }
        break;
      case 'b':
        strokeColorBlue += colorIncrement;
        if (strokeColorBlue > 255) {
          strokeColorBlue = colorStart;
          strokeColorInc = 'r';
        }
        break;
    }

    lines.push(new Line(x1, y1, x2, y2, 'rgb(' + strokeColorRed + ',' + strokeColorGreen + ',' + strokeColorBlue + ')'));
    lines.shift();
  }
  catch(e) {
    console.error('error: ' + e.message + ' - strokeColor: ' + strokeColor);
  }

}

function newSize() {
  location.reload();
}

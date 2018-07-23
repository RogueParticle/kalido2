w = window.innerWidth;
h = window.innerHeight * .9;

aspect = w/h;

var lines = [];

var speed = 10;

//var y = 100;
var x1Offset = 0.0;
var y1Offset = 0.1;
var x2Offset = 0.2;
var y2Offset = 0.2;

var offsetIncrement = 0.01;

var
  strokeColorRed,
  strokeColorGreen,
  strokeColorBlue,
  colorIncrement = 10,
  colorRedDirection,
  colorGreenDirection,
  colorBlueDirection,
  colorIncDuration = 16,
  strokeWidth = 2;

var lineCount = 20, countSlider, countP;

function setup() {
  colorRedDirection = random([0,1]);
  colorGreenDirection = random([0,1]);
  colorBlueDirection = random([0,1]);
  colorRed = round(random(0,256));
  colorGreen = round(random(0,256));
  colorBlue = round(random(0,256));
  createCanvas(w, h);
  for (var i = 0; i < lineCount; i++) {
    setCoordinates();
    setColors();
    lines[i] = new Line(x1, y1, x2, y2, 'rgb(' + colorRed + ',' + colorGreen + ',' + colorBlue + ')', strokeWidth);
  }

  countSlider = createSlider(lineCount, 300, lineCount, 10);
  countP = createP('Number of Lines: ' + lineCount);
}

function draw() {
  try {
  //speed = map(mouseX, 0, width, 0, 50);
    background(0);

    var newLineCount = countSlider.value();
    if (newLineCount < lineCount) {
      var index = newLineCount -1;
      var removeCount = (lines.length - 1) - newLineCount;
      lines.splice(index, removeCount);
      lineCount = newLineCount;
      countP.html('Number of Lines: ' + lineCount);
    } else if (newLineCount > lineCount){
      while (lines.length < newLineCount) {
        setCoordinates();
        setColors();
        lines.push(new Line(x1, y1, x2, y2, 'rgb(' + colorRed + ',' + colorGreen + ',' + colorBlue + ')', strokeWidth));
      }
      lineCount = newLineCount;
      countP.html('Number of Lines: ' + lineCount);
    } else {    //no change
      for (i = 0; i < lines.length; i++) {
        lines[i].show();
      }
      lines.shift(); //remove last line
      setCoordinates();
      setColors();
      lines.push(new Line(x1, y1, x2, y2, 'rgb(' + colorRed + ',' + colorGreen + ',' + colorBlue + ')', strokeWidth)); //add new line
    }
  }
  catch(e) {
    console.error('error: ' + e.message);
  }
}

function newSize() {
  location.reload();
}

function setColors() {
  //red
  if (colorRedDirection == 0) {
    colorRed += colorIncrement;
    if (colorRed > 255) {
      colorRedDirection = 1;
      colorRed = round(random(0,256));
    }
  } else {
    colorRed -= colorIncrement;
    if (colorRed < 0) {
      colorRedDirection = 0;
      colorRed = round(random(0,256));
    }
  }

  //green
  if (colorGreenDirection == 0) {
    colorGreen += colorIncrement;
    if (colorGreen > 255) {
      colorGreenDirection = 1;
      colorGreen = round(random(0,256));
    }
  } else {
    colorGreen -= colorIncrement;
    if (colorGreen < 0) {
      colorGreenDirection = 0;
      colorGreen = round(random(0,256));
    }
  }

  //blue
  if (colorBlueDirection == 0) {
    colorBlue += colorIncrement;
    if (colorBlue > 255) {
      colorBlueDirection = 1;
      colorBlue = round(random(0,256));
    }
  } else {
    colorBlue -= colorIncrement;
    if (colorBlue < 0) {
      colorBlueDirection = 0;
      colorBlue = round(random(0,256));
    }
  }
}

function setCoordinates() {
  x1Offset = x1Offset + offsetIncrement;
  y1Offset = y1Offset + offsetIncrement;
  x2Offset = x2Offset + offsetIncrement;
  y2Offset = y2Offset + offsetIncrement;
  x1 = noise(x1Offset) * width;
  y1 = noise(y1Offset) * height;
  x2 = noise(x2Offset) * width;
  y2 = noise(y2Offset) * height;
}

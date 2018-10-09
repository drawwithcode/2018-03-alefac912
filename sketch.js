function preload() {

}

function setup() {
  // setup
  frameRate(3);
  createCanvas(windowWidth, windowHeight);
  background(247);

  noFill();
  strokeWeight(7);
  // triangles
  for (var i = 0; i < 5; i++) {
    var x = random() * width;
    var y = random() * height;
    polygon(x, y, 25, 3);

  }

  // squares
  rectMode(CENTER);
  for (var i = 0; i < 5; i++) {
    var x = random() * width;
    var y = random() * height;
    rect(x, y, 30, 30);
  }
  noStroke();
  fill(0);
  for (var i = 0; i < 5; i++) {
    var x = random() * width;
    var y = random() * height;
    rect(x, y, 30, 30);
  }

  // circles
  noFill()
  strokeWeight(7);
  stroke(0);
  for (var i = 0; i < 5; i++) {
    var x = random() * width;
    var y = random() * height;
    ellipse(x, y, 20);
  }
  noStroke()
  fill(0);
  for (var i = 0; i < 5; i++) {
    var x = random() * width;
    var y = random() * height;
    ellipse(x, y, 40);
  }

  // x
  noFill()
  strokeWeight(7);
  stroke(0);
  for (var i = 0; i < 10; i++) {
    var x1 = random() * width;
    var y1 = random() * height;
    var x2 = x1 + 20;
    var y2 = y1 + 20;
    line(x1, y1, x2, y2);
    line(x2, y1, x1, y2);
  }

  // zigzag
  for (var i = 0; i < 10; i++) {
    var x = random() * width;
    var y1 = random() * height;
    var y2 = y1 + 10;
    beginShape();
    vertex(x, y1);
    vertex(x + 10, y2);
    vertex(x + 20, y1);
    vertex(x + 30, y2);
    vertex(x + 40, y1);
    vertex(x + 50, y2);
    vertex(x + 60, y1);
    vertex(x + 70, y2);
    endShape();
  }
}

function draw() {
  var blue = '#3d65b2';
  var red = '#d9453b';
  var yellow = '#fcf970';
  var colorList = [blue, red, yellow];

  // blue triangles
  if (frameCount % 2 == 0) {
    noStroke();
    var colorHex = colorList[0];
    fill(color(colorHex));
    polygon(random() * width, random() * height, 50, 3);
  }
  // red squares
  if (frameCount % 3 == 0) {
    var colorHex = colorList[1];
    fill(color(colorHex));
    rect(random() * width, random() * height, 50, 50);
  }

  // yellow circles
  if (frameCount % 5 == 0) {
    var colorHex = colorList[2];
    fill(color(colorHex));
    ellipse(random() * width, random() * height, 50);
  }

}

// This code “enables” the polygon() instruction
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

let yoff = 0.0;

function setup(){
  const canvas =  createCanvas(windowWidth, windowHeight);
  background(233, 205, 164)
  noFill()
  stroke(255)
  t = 0
}

function draw() {
  fill(color(50, 30, 200,1))
  beginShape()
  var xoff = 0
  for (var x = 0; x <= width; x += 5) {
    var y = map(noise(xoff, yoff), 0, 1, 100,300)
    vertex(x, y)
    xoff += 0.02
  }
  yoff += 0.0085
  vertex(width, height)
  vertex(0, height)
  endShape(CLOSE)
}


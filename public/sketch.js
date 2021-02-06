let yoff = 0.0;

function setup(){
  const canvas = createCanvas(1000, 600)
  // canvas.class("lemon")
}

function draw() {
  background(233, 205, 164)
  noFill()
  stroke(255)

  beginShape()
  for (let x = 0; x <= width; x++) {
    var nx = map(x, 0, width, 0, 10)
    var y = height * noise(nx)

    vertex(x, y)
  }
  endShape()
}


function setup() {

    createCanvas(600, 600);
    background("yellow");
  }
  
  function draw() {
  
    fill("orange")
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 60, 60)
       }
  }
  
  
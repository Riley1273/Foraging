function setup() {
    xplaces = []
    yplaces = []
    mushes = []
    let touching
    angleMode(DEGREES);
    let canvas = createCanvas(700, 700);
    canvas.parent("canvasContainer");
    ps = width / 2;
    py = height / 2;
    for (nm =1;nm<5;nm++){
      append(mushes,new Mushroom(nm))
    }
    for (room=0;room<mushes.length;room++){
      xp = random(-width/2,width)
      yp = random(-height/2,height)
      append(xplaces,xp)
      append(yplaces,yp)}
      
    tree1 = new Trees(0, 0);
    tree3 = new Trees(200, -100);
    tree2 = new Trees(420, 290);
    tree4 = new Trees(-50, 100);
    tree5 = new Trees(-200, 600);
    tree6 = new Trees(350, 500);
  }
  
  function draw() {
    on = false
    background(48, 63, 27);
    if (
      mouseIsPressed &&
      mouseX > 0 &&
      mouseX < width &&
      mouseY > 0 &&
      mouseY < height
    ) {
      ps = mouseX/2;
      py = mouseY/2;
    }
    push();
    translate(ps, py);
    path();
    pop();
    push();
    for (room=0;room<mushes.length;room++){
      mushes[room].display(xplaces[room]+ps,yplaces[room]+py)
      di = dist(xplaces[room]+ps,yplaces[room]+py,mouseX,mouseY);
  
      if (di < 35) {
          on = true
          touching = room;
        }
    }
    push();
    translate(ps, py);
  
    tree1.branch(100,100,0,0)
    tree3.branch(75,75,0,0)
    tree2.branch(112,112,0,0)
    //tree4.branch(80,80,0,0)
    tree5.branch(100,100,0,0)
    //tree6.branch(130,130,0,0)
    pop();
    if (on==true){
  
      fill(80,160,110,150);
      rect(-width/2, -height/2, 2*width, 2*height);
      mushes[touching].info()}
  
    
  
    pop();
  }
  function path() {
    noStroke();
    fill(135, 94, 59);
    beginShape();
    vertex(-100, 400);
    vertex(100, 400);
    vertex(180, 900);
    vertex(-180, 900);
    endShape();
  
    beginShape();
    vertex(-100, 400);
    vertex(100, 400);
    vertex(300, 0);
    vertex(200, -60);
    endShape();
  
    beginShape();
    vertex(300, 0);
    vertex(200, 0);
    vertex(-100, -200);
    vertex(-30, -200);
    endShape();
  
    beginShape();
    vertex(-100, -200);
    vertex(-30, -200);
    vertex(1000, -600);
    vertex(1020, -600);
    endShape();
  }
  
  
  
  
  
  
  
  
  
  
  
  class Mushroom {
    constructor(ty) {
      this.iden = ty;
  
    }
  
    display(x,y) {
      if (this.iden == 1) {
          this.name = 'Death Cap'
          this.sname = 'Amanita phalloides'
          this.location = 'Most commonly found in Europe, this mushroom is often found during the autumn months in rainy areas and near broadleafed trees.'
          this.facts = "The Death Cap mushroom is one of the most toxic among all mushroom species. It is especially dangerous due to its resemblance to other edible species of mushrooms."
          push();
          fill(255);
          translate(x, y);
          beginShape();
          vertex(-3, 0);
          vertex(3, 0);
          vertex(5, 20);
          vertex(-5, 20);
          endShape();
          fill(156, 139, 81);
          beginShape();
          curveVertex(-10, 0);
          curveVertex(-10, 0);
          curveVertex(-3, -10);
          curveVertex(5, -10);
          curveVertex(10, 0);
          endShape(CLOSE);
          pop();
        }
      else if (this.iden == 2) {
          this.name = 'Death Angel'
          this.sname = 'Amanita ocreata'
          this.location = 'Most commonly found in the Pacific Northwest of North America, this mushroom is often found during the spring months in dense forest areas, and especially near oak trees.'
          this.facts = "The Death Angel is notable for its entirely white color. Closely related to the Death Cap mushroom, it is responsible for approximately 90% of all mushroom consumption deaths."
          push();
          fill(255);
          translate(x, y);
          beginShape();
          vertex(-3, 0);
          vertex(3, 0);
          vertex(5, 20);
          vertex(-5, 20);
          endShape();
          beginShape();
          curveVertex(-10, 0);
          curveVertex(-10, 0);
          curveVertex(-8, -13);
          curveVertex(0, -15);
          curveVertex(8, -13);
          curveVertex(10, 0);
          endShape(CLOSE);
          pop();
        }
      else if (this.iden == 3) {
        this.name = 'Autumn Skullcap'
        this.sname = 'Galerina marginata'
        this.location = 'Most commonly distributed in the northern hemipshere, this mushroom gets nutrients from rotting organic matter, and is oftern found in groups, growing out of decaying conifer trees.'
        this.facts = "As the Autumn Skullcap grows and gets larger, it's cap becomes much more broad and flat. Although recognizable for its shape and rusty brown color, the mushroom is easily confused with other edible mushrooms."
        push();
        fill(102, 51, 0);
        translate(x, y);
          beginShape();
          curveVertex(-3, 0);
          curveVertex(3, 0);
          curveVertex(8, 10);
          curveVertex(3, 20);
          curveVertex(-3, 20);
          curveVertex(3, 10);
          curveVertex(-3, 0);
          curveVertex(-3, 0);
          endShape();
          fill(154, 75, 7);
          beginShape();
          curveVertex(-20, 0);
          curveVertex(-20, 0);
          curveVertex(-14, -6);
          curveVertex(0, -7);
          curveVertex(14, -6);
          curveVertex(20, 0);
          endShape(CLOSE);
          pop();
        }
      else if (this.iden == 4) {
        this.name = 'Fly Agaric'
        this.sname = 'Amanita muscaria'
        this.location = 'Although originally from the Northern Hemisphere, this mushroom can now be found world wide. It grows out of wood from both coniferous and deciduous trees, although it may sometimes appear to be growing in the ground when it is actually growing out of burried wood.'
        this.facts = "Due to it's red color and white spots, the Fly Agaric mushroom is perhaps the most iconic of all toadstools. Although poisonous, few few poisoning cases result in death. Poisoning from this mushroom often occurs due to people eating it for its hallucinogenic properties."
        push();
        fill(255);
        translate(x, y);
        fill(255)
        beginShape();
        vertex(-3, 0);
        vertex(3, 0);
        vertex(5, 20);
        vertex(-5, 20);
        endShape();
        fill(212, 22, 22);
        beginShape();
        curveVertex(-15, 0);
        curveVertex(-15, 0);
        curveVertex(-8, -13);
        curveVertex(0, -16);
        curveVertex(8, -13);
        curveVertex(15, 0);
        endShape(CLOSE);
        fill(255);
        noStroke();
        ellipse(0, -2, 2, 2);
        ellipse(-4, -3, 2, 2);
        ellipse(-13, -2, 2, 2);
        ellipse(-3, -12, 2, 2);
        ellipse(3, -10, 2, 2);
        ellipse(5, -5, 2, 2);
        ellipse(8, -4, 2, 2);
        ellipse(10, -6, 2, 2);
        pop();
      }
    }
    info(x,y) {
      fill(255)
      push();
      textFont('Tahoma',35)
      text("You have found a(n) "+this.name+'!',10,100)
      pop();
      
      push();
      textFont('Tahoma',30)
      text("Fun (or not so fun) Facts:",10,450,600,600)
      text("Location: ",10,220,600,600)
      text("Scientific Name: "+this.sname,10,150 )
      pop();
      push();
      textFont('Tahoma',25)
      text(this.location,10,255,600,600)
      text(this.facts,10,485,600,600)
      pop();
    }
  }
  class Trees {
    constructor(x, y) {
      this.r = random(25, 75);
      this.g = random(75, 175);
      this.b = random(0, 75);
      this.x = x;
      this.y = y;
      this.lens = [];
      for (this.i = 0; this.i < 4000; this.i++) {
        append(this.lens, random(0.7, 0.9));
      }
    }
    branch(len, d, check, counter) {
      push();
      if (len > 10) {
        strokeWeight(map(len, 10, d, 1, 25));
        stroke(70, 40, 20);
        if (check == 0) {
          line(this.x, this.y, this.x, this.y - len);
          translate(this.x, this.y - len);
          this.check = 1;
        } else {
          line(0, 0, 0, -len);
          translate(0, -len);
        }
        rotate(30);
        counter += 1;
        this.branch(len * this.lens[counter], d, 1, counter);
        rotate(-60);
        counter += 1;
        this.branch(len * this.lens[counter], d, 1, counter);
      } else {
        fill(this.r, this.g, this.b);
        ellipse(0, 0, 10, 10);
      }
      pop();
    }
  }
  
  
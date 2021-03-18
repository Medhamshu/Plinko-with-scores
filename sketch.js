var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];

var particle;

var divisionHeight=300;
var score =0;
var turn = 0;

var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  textSize(30)
  text("100",335,height - divisionHeight);
  text("100",415,height - divisionHeight);
  text("500",255,height - divisionHeight);
  text("100",495,height - divisionHeight);
  text("200",575,height - divisionHeight);
  text("200",655,height - divisionHeight);
  text("200",735,height - divisionHeight);
  text("500",175,height - divisionHeight);
  text("500",95,height - divisionHeight);
  text("500",15,height - divisionHeight);

  Engine.update(engine);

  if(particle!=null)
  {
    particle.display();

    if (particle.body.position.y>760)
    {
      if (particle.body.position.x < 300)
      {
        score = score + 500;
        particle = null;
        if (turn>= 5)
        gameState = "end"
      }

      else if (particle.body.position.x > 301 && particle.body.position.x < 600)
      {
        score = score + 100;
        particle = null;
        if (turn>= 5)
        gameState = "end"
      }

      else if (particle.body.position.x > 601 && particle.body.position.x < 900)
      {
        score = score + 200;
        particle = null;
        if (turn>= 5)
        gameState = "end"
      }


    }
  }

  if (gameState == "end")
  {
    textSize(50);
    text("GAMEOVER",300,300)
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed()
{
  if(gameState!=="end" && particle == null)
  {
    turn++;
    particle = new Particle(mouseX, 10, 10, 10)

  }
}

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 430;
canvas.height = 430;
ctx.fillStyle = 'black';
ctx.fillRect(0,0,canvas.width,canvas.height);

class Loptica{
  constructor(x, y, vx, vy, r, boja){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.r = r;
    this.boja = boja;
  }
  crtaj(){
    ctx.beginPath();
    ctx.fillStyle = this.boja;
    ctx.arc(this.x, this.y, this.r, 0, 6.28);
    ctx.fill();
  }
}

function random(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
function randomBoja(){
  return `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)}, 0.5)`;
}
let mnogoLoptica = [];
for(let i=0; i<50; i++){
  let loptica = new Loptica(random(30,400), random(30,400), 4, 4, random(10,30), randomBoja());
  loptica.crtaj();
  
}
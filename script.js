let phrases  = [];
let phrase = "To be or not to be,that is the question."
let phralen = phrase.length;
let population = 500;
let mutation = 0.01
let topGene=[];
function setup() {
    createCanvas(windowWidth,windowHeight)
      textFont("Times New Roman")
    initialize()
  }

function draw() {
  background(255,250,235)
  selection();
  display()
  
  if(topGene[1].fit===phralen){
    noLoop()
  }
}
function initialize(){
  for(let i=0;i<population;i++){
    phrases.push(new Phrase(phralen)); 
  } 
  phrases.forEach(t=>{
    t.create()
  })
}

const display=()=>{
  let scl = min(phralen*6,width-50)
  let k =0;
  push()
  textSize(25);
  text("Origional Phrase: "+phrase,20,50)
  textSize(40)
  text("Best Phrase: "+topGene[1].val.join(''),20,100)
  textSize(20)
  text("Total generations: "+frameCount,20,160)
  text("Total population: "+population,20,190)
  text("Mutation rate: "+(mutation*100)+"%",20,220)
  line(0,250,width,250);
  pop()
  for(let x=20;x<width-scl;x+=scl+50){
    for(let y=280;y<height;y+=30){
      push()
      textFont("Times New Roman")
      translate(x,y);
      textSize(16);
      phrases[k].show()
      pop()
      k++;
      if(k>=population)
      break;
    }
    if(k>=population)
      break;
  }
}
const selection=()=>{
  topGene=[]
  for(let i=0;i<=10;i++){
    topGene.push({
      val:"",
      fit:-1
    });
  }
  
  phrases.forEach(p=>{
    p.check_fitness(phrase,phralen)
    let i=10;
    while(p.fitness>topGene[i].fit && i>0){
      i--;
    }
    if(i>=0 && i<9){
      topGene[i+1].fit = p.fitness
      topGene[i+1].val = [...p.val]
            
    }
  })  
  phrases.forEach(p=>{
    let p1 = ceil(random(1,5))
    let p2 = ceil(random(1,5))
    p.reproduce(topGene[1].val,topGene[2].val)
  })  
}
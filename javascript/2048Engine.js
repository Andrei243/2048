window.addEventListener('load',()=>{
let numerePosibile=[2];

let reasezareValori = (vector)=>{
 for(let i=1;i<vector.length;i+=1){
   if(parseInt(vector[i].attr('val'))!=0 && parseInt(vector[i-1].attr('val'))===0){
      let j=i;
      while(j>0&&parseInt(vector[j].attr('val'))!==0 && parseInt(vector[j-1].attr('val'))===0){
        vector[j-1].attr('val',parseInt(vector[j].attr('val')));
        vector[j].attr('val',0);
      }
   }
 }
  return vector;
}

let adunareValori = (vector)=>{
  for(let i=0;i<vector.length-1;i+=1){
    if(parseInt(vector[i].attr('val'))==parseInt(vector[i+1].attr('val'))){
      vector[i].attr('val',parseInt(vector[i].attr('val'))*2);
      if(parseInt(vector[i].attr('val'))>numerePosibile[numerePosibile.length-1])
        {numerePosibile.push(parseInt(vector[i].attr('val')));}
      vector[i+1].attr('val',0);
    }

  }
return vector;
}

let executarePas = (rand)=>{
  rand=reasezareValori(rand);
  rand=adunareValori(rand);
  rand=reasezareValori(rand);
};


let returneazaNumar = ()=>numerePosibile[Math.floor(Math.random()*numerePosibile.length)];




let Engine2048 = {
divs:null,
adaugaNumarNou:()=>{
let vectorGol=[];
for(let i=0;i<divs.length;i++){
  for(let j=0;j<divs.length;j++){
    if(parseInt(divs[i][j].attr('val'))===0)vectorGol.push(divs[i][j]);
  }
}
let element = vectorGol[Math.floor(Math.random()*vectorGol.length)];
element.attr('val',returneazaNumar());
console.log(element,element.attr('val'));
},

init:()=>{
  divs= [];
  for(let i=0;i<4;i++){
    let linie = [];
      for(let j=0;j<4;j++){
        let div=$('#'+i+'-'+j);
        div.text('');
        div.attr('val',0);
        linie.push(div);
      }
    divs.push(linie);
  }

},
calculeazaScor:()=>{
  let scor=0;
for(let i=0;i<divs.length;i++){
  for(let j=0;j<divs.length;j++){
    scor+=parseInt(divs[i][j].attr('val'));
  }
}
  document.getElementById('scor').innerText=scor.toString();
},
refacereImagini : ()=>{
for(let i=0;i<divs.length;i++){
  for(let j=0;j<divs[i].length;j++){
    divs[i][j].html('');
    divs[i][j].append('<img src="../Numere/'+parseInt(divs[i][j].attr('val'))+'.png" width=100px height=100px/>')
  }
}

}

}
Engine2048.init();
Engine2048.calculeazaScor();
for(let i=0;i<6;i++){
  Engine2048.adaugaNumarNou();
}
Engine2048.refacereImagini();

})

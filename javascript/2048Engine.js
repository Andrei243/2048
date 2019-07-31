window.addEventListener('load',()=>{
let reasezareValori = (vector)=>{
 for(let i=1;i<vector.length;i+=1){
   if(vector[i].val!=0 && vector[i-1].val==0){
      let j=i;
      while(j>0&&vector[j].val!=0 && vector[j-1].val==0){
        vector[j-1].val=vector[j].val;
        vector[j].val=0;
      }
   }
 }
  return vector;
}

let adunareValori = (vector)=>{
  for(let i=0;i<vector.length-1;i+=1){
    if(vector[i].val==vector[i+1].val){
      vector[i].val*=2;
      vector[i+1].val=0;
    }

  }
return vector;
}

let executarePas = (rand)=>{
  rand=reasezareValori(rand);
  rand=adunareValori(rand);
  rand=reasezareValori(rand);
  for(let i=0 ;i<rand.length;i++){
    rand[i].innerHTML='';
    let imagine= document.createElement('img');
    imagine.src = '../Numere/'+rand[i].val+'.png';
    rand[i].appendChild(imagine);
  }

};

let Engine2048 = {
divs:null,
init:()=>{
  divs= [];
  for(let i=0;i<4;i++){
    let linie = [];
      for(let j=0;j<4;j++){
        console.log(i,j);
        let div=$('#'+i+'-'+j);
        console.log(div);
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
}


}
Engine2048.init();
Engine2048.calculeazaScor();

})

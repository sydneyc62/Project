// let rnd = (l,u) => Math.random()*(u-l)+l;
// Seeded random number generator for consistent tree placement
let seed = 12345;
let rnd = (l,u) => {
  seed = (seed * 9301 + 49297) % 233280;
  return (seed / 233280) * (u - l) + l;
}
let rnd2 = (l,u) => Math.floor(Math.random()*(u-l) + l);

let scene;
let progress = localStorage.getItem('points') || 0;



window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(30,-30);
    let z = rnd(60,30);
    let tree = new Tree(x, 0 , z);
    
  }
});


  window.addEventListener("DOMContentLoaded",function(){
    progress = 0;


  document.querySelectorAll('.artifact').forEach(artifact => {




    artifact.addEventListener('click', () => {
      artifact.setAttribute('visible', 'false');
      progress++;
      valueDisplay.setAttribute('value', `points: ${progress}`);
      localStorage.setItem('points', progress);
      });
    });
  }); 




// function distance(obj1,obj2){
//   let x1 = obj1.object3D.position.x;
//   let y1 = obj1.object3D.position.y;
//   let z1 = obj1.object3D.position.z;
//   let x2 = obj2.object3D.position.x;
//   let y2 = obj2.object3D.position.y;
//   let z2 = obj2.object3D.position.z;

//   let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
//   return d;
// }



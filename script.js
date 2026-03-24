// let rnd = (l,u) => Math.random()*(u-l)+l;
// Seeded random number generator for consistent tree placement
let seed = 12345;
let rnd = (l,u) => {
  seed = (seed * 9301 + 49297) % 233280;
  return (seed / 233280) * (u - l) + l;
}
let rnd2 = (l,u) => Math.floor(Math.random()*(u-l) + l);

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(30,-30);
    let z = rnd(60,30);
    let tree = new Tree(x, 0 , z);
    
  }
})

// function rndAnomalyPage(){
//   let links = new Array();
//   links = [anomaly1.html , anomaly2.html , anomaly3.html , anomaly4.html , anomaly5.html];

//   let rndIndex = Math.floor(Math.Random() * links.length);

//   let rndUrl = links[rndIndex];

  

// }


// window.addEventListener("DOMContentLoaded",function() {
  
  

//     let progress = localStorage.getItem('points') || 0;
//     let verify = document.getElementById("verify");
//     let verifyNeg = document.getElementById("verifyNeg");
//     let player = document.getElementById("player");
//     let valueDisplay = document.getElementById("valueDisplay");
//     let sky = document.getElementById("sky");

//     // if(d1 < 1){
//     //     progress ++;
//     //     valueDisplay.setAttribute('value', `Distance: ${d1}`);
//     // }


      
//     if(window.location.pathname === '/'){
//         progress = 0;

//     }

//     valueDisplay.setAttribute('value', `points: ${progress}`);

//     setInterval(()=>{
//         let d1 = distance(player, verify);
//         let d2 = distance(player, verifyNeg)
        

//         if (d1<2){
//             progress++;
//             valueDisplay.setAttribute('value', `points: ${progress}`);
//             localStorage.setItem('points', progress);
//             player.setAttribute('position', ' 0 1 0')
//             window.location.href = rndUrl;

//             if(window.location.pathname === '/game.html'){
//                 localStorage.setItem('points', 0);
//             }
//         }

//         if(d2<2){
//             progress--;
//             valueDisplay.setAttribute('value', `points: ${progress}`);
//             localStorage.setItem('points', progress);
//             player.setAttribute('position', ' 0 1 0')
//             window.location.href = 'game.html';

//             if(window.location.pathname === `/${rndUrl}` ){
//                 localStorage.setItem('points', 0);
//             }
            
//         }
        
//     }, 100);

    

// })

  window.addEventListener("DOMContentLoaded",function(){



     document.querySelectorAll('.artifact').forEach(artifact => {

        artifact.addEventListener('click', function() {
          artifact.setAttribute("opacity",0);
    });



      















  });






function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}



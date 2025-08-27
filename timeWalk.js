function timeWalk (steps, footprint, speed) {

    let distance = (steps * footprint) / 1000;
    let finalRest = Math.floor (distance / 0.5);
   
    let timeRest = (finalRest * 60);
    let time =  Math.round((distance / speed)*3600) + timeRest;
 
    
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - (hours*3600)) / 60);
    let seconds = (time - (hours*3600)- (minutes*60));

    console.log (`${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
      
}
timeWalk (4000, 0.60, 5);
timeWalk (2564, 0.70, 5.5);

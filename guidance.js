//check if any two helicopters are scheduled to land at the same time.

function similarTimings(landing_times) {
  let next = landing_times[0];
  for (let i = 0; i < landing_times.length; i++) {
    for (let j = i + 1; j < landing_times.length; j++) {
      if (landing_times[i] === landing_times[j]) {
        console.log(`same number : ${landing_times[i]}`);
      }
    }
  }
}
similarTimings([12, 15, 12, 18, 20]);

//Highest number in array

function Highest(soldiers) {
  let more = soldiers[0];
  for (let i = 0; i < soldiers.length; i++) {
    if (soldiers[i] > more) {
      more = soldiers[i];
    }
  }
  return more;
}
console.log("Highest number :" + Highest([120, 300, 250, 180, 150]));

//time converter
function time(taskTime){
  for(let i = 0; i < taskTime.length; i++){
      let hours = Math.floor(taskTime[i] / 60);
      let minutes = taskTime[i] % 60;
      taskTime[i] = { hours: hours, minutes: minutes };
  }
  return taskTime;
}
console.log(time([100, 300, 220, 340]));
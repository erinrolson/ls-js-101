const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function formatTime(hour, min){
  let valArr = [ String(hour), String(min) ];
  for ( let index = 0; index < valArr.length; index++) {
    if (valArr[index].length === 1) {
      valArr[index] = '0' + valArr[index];
    }
  }
  return `${valArr[0]}:${valArr[1]}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;
  
  return formatTime(hours, minutes);
}

console.log(timeOfDay(754));
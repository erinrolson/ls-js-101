function dms(number) {
  
  const DEGREE_SYMBOL = '\u00B0';
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_MINUTE = 60;
  
  let dmsObj = {number};
  dmsObj.degrees = parseInt(dmsObj.number);
  dmsObj.minutes = String(parseInt(
                   (dmsObj.number - dmsObj.degrees) * MINUTES_PER_DEGREE));
  dmsObj.seconds = String(parseInt(
                   (((dmsObj.number - dmsObj.degrees) * MINUTES_PER_DEGREE) - dmsObj.minutes) 
                   * SECONDS_PER_MINUTE));
  
  if (dmsObj.minutes.length === 1) { dmsObj.minutes = '0' + dmsObj.minutes; }
  if (dmsObj.seconds.length === 1) { dmsObj.seconds = '0' + dmsObj.seconds; }
  
  return dmsObj.degrees + DEGREE_SYMBOL + dmsObj.minutes + '\'' + dmsObj.seconds + '"';
}

console.log(dms(-40));
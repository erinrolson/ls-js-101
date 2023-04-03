function rotateRightmostDigits(number, count) {
  if ( count <= 1) return number;
  
  let origArr = [...String(number)];
  let removedEle = origArr.splice(-count, 1);
  
  origArr.push(removedEle[0]);
  
  return Number(origArr.join(''));
}

function maxRotation(number) {
  let count = [...String(number)].length; // 2
  while (count >= 1 ) {
    number = rotateRightmostDigits(number, count);
    count -= 1;
  }
  
  return number;
}

console.log(maxRotation(8703529146));
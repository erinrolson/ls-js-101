function rotateRightmostDigits(number, count) {
  if ( count <= 1) return number;
  
  let origArr = [...String(number)];
  let removedEle = origArr.splice(-count, 1);
  
  origArr.push(removedEle[0]);
  
  return Number(origArr.join(''));
}

let result = rotateRightmostDigits(735291, 3);
console.log(result);

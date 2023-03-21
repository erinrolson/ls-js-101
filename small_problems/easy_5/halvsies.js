function halvsies(arr) {
  let halfPoint = Math.ceil(arr.length / 2);
  return [ arr.slice(0, halfPoint), arr.slice(halfPoint) ];
}

console.log(halvsies([1, 5, 2, 4, 3]) )
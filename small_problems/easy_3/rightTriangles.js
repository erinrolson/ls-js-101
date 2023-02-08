function triangle(number) {
  let triangleBase = '*';
  while (triangleBase.length <= number) {
    console.log(triangleBase.padStart(number, ' '));
    triangleBase += '*';
  }
}

triangle(9);
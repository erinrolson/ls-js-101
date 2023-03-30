function buyFruit(nestedArr) {
  return nestedArr
  .map(repeatFruit)
  .flat();
}

function repeatFruit(fruitQuantityArr) {
  let [ fruit, quantity ] = fruitQuantityArr;
  let arr = [];
  for (let count = 0; count < quantity; count++) {
    arr.push(fruit);
  }
  return arr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
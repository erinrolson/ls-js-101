function sum(num) {
  return [...String(num)].map( val => Number(val))
        .reduce( (acc, ele) => acc + ele );
}

console.log(sum(123456789))
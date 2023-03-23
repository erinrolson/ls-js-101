function average(arr) {
  return Math.floor( arr.reduce( (acc, ele) => acc + ele) / arr.length );
}

console.log(average([9, 47, 23, 95, 16, 52]));
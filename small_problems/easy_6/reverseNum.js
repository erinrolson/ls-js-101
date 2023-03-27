// function takes a poitive int as an argument and returns a number w/ reversed digits

function reverseNumber(num) {
  return Number([...String(num)].reverse().join(''));
}

console.log(reverseNumber(0012));
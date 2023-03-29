// function takes a firstName lastName and returns a new string lastName, firstName
function swapName(name) {
  let nameArr = name.split(' ');
  return `${nameArr.pop()}, ${nameArr.join(' ')}`;
}

console.log(swapName('Karl Oskar Henriksson Ragvals'));

// function takes an integer and returns an array of acending ints to the arg val
function sequence(int) {
  let sequenceArr = [];
  
  for (let val = 1; val <= int; val++) {
    sequenceArr.push(val);
  }
  
  return sequenceArr;
}

console.log(sequence(1));

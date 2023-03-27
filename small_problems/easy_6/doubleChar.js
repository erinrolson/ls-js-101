// function that takes a string and returns a new string w/ every char x2

function repeater(string) {
  return [...string].reduce( (acc, ele) => {
    return acc + ele + ele;
    }, '');
}

console.log(repeater('Hello'));
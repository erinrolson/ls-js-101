// function that takes a string and returns a new string w/ every consonant x2

function repeater(string) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  
  return [...string].reduce( (acc, ele) => {
    return CONSONANTS.includes(ele.toLowerCase()) ?  acc + ele.repeat(2) : acc + ele;

    }, '');
}

console.log(repeater('hello-world'));
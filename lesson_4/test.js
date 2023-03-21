let statement = "The Flintstones Rock";

let obj = {};

statement.split('').forEach( character => {
  if (obj.hasOwnProperty(character)) {
    obj[character] += 1;
  } else {
    obj[character] = 1;
  }
});

console.log(obj);
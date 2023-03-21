// use a forEach() to output all vowels from the strings

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach( (arr) => {
  let str = '';
  arr.join('').split('').forEach( (char) => {
    //array of characters
    if (['a','e','i','o','u'].includes(char)) {
      str += char;
    }
  });
  console.log(str);
});

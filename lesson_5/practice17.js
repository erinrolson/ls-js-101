/*
Write a function that takes no arguments and returns a string that contains a UUID.
*/

function randomIndex() {
  //generate a random number between 0 and 15
  return Math.floor(Math.random() * 16);
}

// UUID length of 32
// 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

function uuid() {
  const UUIDARR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  const SECTION = [8, 4, 4, 4, 12]
  let uuid = '';
  for (let index of SECTION){
    for (let i = 0; i < index; i++) {
      uuid += UUIDARR[randomIndex()];
    }
    if (uuid.length < 36) { uuid = uuid + '-' };
  }
  return uuid;
}

console.log(uuid());
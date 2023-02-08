function numberGen() {
  let num = 0;
  while ( num < 20 ) {
    num = Math.floor(Math.random() * 121);
  }
  return num;
}

console.log(numberGen());
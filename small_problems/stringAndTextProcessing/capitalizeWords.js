function wordCap(string) {
  return string.split(' ')
                .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
}

console.log(wordCap('this is a "quoted" word'));
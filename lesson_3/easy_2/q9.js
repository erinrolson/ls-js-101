const width = 40;
let title = "Flintstone Family Members";
let padding =  title.length + Math.floor((width - title.length) / 2);
let padTitle = title.padStart(padding, '-');
console.log(padTitle);
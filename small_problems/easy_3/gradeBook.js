function getAverage(list) {
  let average = 0;
  for (let element of list) {
    average += element;
  }
  average = (average / list.length)
  return Number(average.toFixed(2));
}

function getGrade(number1, number2, number3) {
  let number = getAverage([number1, number2, number3]);
  switch (true) {
    case (number < 60) :
      return 'F';
    case (number < 70) :
      return 'D';
    case number < 80 :
      return 'C';
    case number < 90 :
      return 'B';
    case number > 90 && number <= 100 :
      return 'A';
  }
}

console.log(getGrade(90,90,95));
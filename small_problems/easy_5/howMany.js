function countOccurrences(arr) {
  let countObj = {};
  arr.forEach( ele => countObj[ele] ? countObj[ele] += 1 : countObj[ele] = 1);
  
  let objEntries = Object.entries(countObj);
  for (let val of objEntries) {
    console.log(`${val[0]} => ${val[1]}`);
  }
}

let vehicles = ['car', 'CAR', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

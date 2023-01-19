// what will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice(); //slice returns a new array but perfoms a shallow copy of values
arr2[0].first = 42;
console.log(arr1);
// [{ first: 42 }, { second: "value2" }, 3, 4, 5]
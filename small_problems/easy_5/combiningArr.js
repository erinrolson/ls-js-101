// takes a primary array and a secondary array,
// add all elements from secondary array not included in the primary array 
function copyNoDupsTo(primaryArr, secondaryArr) {
    secondaryArr.forEach(ele => {
        if (!primaryArr.includes(ele)) {
            //not in primary arr
            primaryArr.push(ele);
        } 
    });
}

// takes any number of arrays as arguments and returns a single array
// with all unique elements from arrays passed as arguments
function union(...arrayArgs) {
    let unionArr = [];
    arrayArgs.forEach( arr => {
        copyNoDupsTo(unionArr, arr);
    });
    return unionArr;
}

console.log(union([1, 3, 5], [3, 6, 9], [1,2,3,4,5,6,7,8,9,10]));
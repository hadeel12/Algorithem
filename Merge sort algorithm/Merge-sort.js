function mergeSort(values) {
    if (values.length === 1) {
        return values; }
    var middleIndex = Math.floor(values.length / 2);
    return (merge(mergeSort(values.slice(0, middleIndex)), mergeSort(values.slice(middleIndex))));
}
function merge(leftSideValues, rightSideValues) {
    var sortedValues = [];
    while(leftSideValues.length > 0 || rightSideValues.length > 0) {
        if (leftSideValues.length > 0 && rightSideValues.length > 0) {
            (leftSideValues[0] < rightSideValues[0])? sortedValues.push(leftSideValues.splice(0,1)[0]): sortedValues.push(rightSideValues.splice(0,1)[0]);
        }
        else if (leftSideValues.length > 0) sortedValues.push(leftSideValues.splice(0,1)[0]);
        else if (rightSideValues.length > 0) sortedValues.push(rightSideValues.splice(0,1)[0]);
    }
    return sortedValues;
}
console.log(mergeSort([5,4,3,2,1,100,21,8,1,94,9000]));
function mergeSort(values) {
    if (values.length === 1) {
        return values; }
    var middleIndex = Math.floor(values.length / 2);
    return (merge(mergeSort(values.slice(0, middleIndex)), mergeSort(values.slice(middleIndex))));
}
function merge(leftSideValues, rightSideValues) {
    var sortedValues = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while(leftIndex < leftSideValues.length  || rightIndex < rightSideValues.length) {
        if (leftIndex < leftSideValues.length && rightIndex < rightSideValues.length) {
            var lowerValue = (leftSideValues[leftIndex] < rightSideValues[rightIndex])? leftSideValues[leftIndex++]: rightSideValues[rightIndex++];
            sortedValues.push(lowerValue);
        }
        else if (leftIndex < leftSideValues.length) {
            sortedValues.push(leftSideValues[leftIndex++]);
        }
        else if (rightIndex < rightSideValues.length){
            sortedValues.push(rightSideValues[rightIndex++]);
        }
    }
    return sortedValues;
}
console.log(mergeSort([5,4,3,2,1,100,21,8,1,94,9000]));

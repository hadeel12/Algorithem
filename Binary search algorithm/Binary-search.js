function BinarySearch(values, searchedValue) {
    return runBinarySearch(values,0, values.length-1, searchedValue);
}

function runBinarySearch(values, startIndex, endIndex, searchedValue) {
    var middleIndex = Math.floor((startIndex + endIndex) / 2);
    var middleValue = values[middleIndex];

    if (middleValue === searchedValue) return true;
    else if (middleValue < searchedValue && middleIndex < endIndex) {
        return runBinarySearch(values, middleIndex  + 1 , endIndex, searchedValue);
    } else if (middleValue > searchedValue && startIndex < middleIndex) {
        return runBinarySearch(values, startIndex, middleIndex - 1, searchedValue);
    } else return false;
}

var values = [1, 2, 5, 12, 25,50,70,100];
alert(BinarySearch(values,100));
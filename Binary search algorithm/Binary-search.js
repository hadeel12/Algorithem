function BinarySearch(values, startIndex, endIndex, searchedValue) {
    var middleIndex = Math.floor((startIndex + endIndex) / 2);
    var middleValue = values[middleIndex];

    if (middleValue === searchedValue) return true;
    else if (middleValue < searchedValue && endIndex-startIndex > 1) {
        startIndex=middleIndex;
        return BinarySearch(values, startIndex, endIndex, searchedValue);
    } else if (middleValue > searchedValue && values.length > 1) {
        endIndex=middleIndex;
        return BinarySearch(values, startIndex, endIndex, searchedValue);
    } else return false;
}

var values = [1, 2, 5, 12, 25,50,70,100];
console.log(BinarySearch(values, 0, values.length-1, 100));
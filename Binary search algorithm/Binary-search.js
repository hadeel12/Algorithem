function BinarySearch(numbers,requiredNumber) {
    var middleIndex = Math.floor(numbers.length / 2);
    var middleNumber = numbers[middleIndex];

    if (middleNumber === requiredNumber) return true;
    else if (middleNumber < requiredNumber && numbers.length > 1) {
        return BinarySearch(numbers.splice(middleIndex, numbers.length), requiredNumber);
    }
    else if (middleNumber > requiredNumber && numbers.length > 1) {
        return BinarySearch(numbers.splice(0, middleIndex), requiredNumber);
    }
    else return false;
}
console.log(BinarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));
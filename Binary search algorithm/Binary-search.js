function BinarySearch(names,requiredName)
{
    return names.includes(requiredName)?true:false;
}
console.log(BinarySearch(['hadeel','ali','omar','ola','amer','ameen','momen','mamon','hala','alia','raghad','anwar'],'alia'));
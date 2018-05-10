function BinarySearch(names,requiredName)
{
    if(names.includes(requiredName)){
        return true;
    }else{
        return false;
    }
}
console.log(BinarySearch(['hadeel','ali','omar','ola','amer','ameen','momen','mamon','hala','alia','raghad','anwar'],'alia'));
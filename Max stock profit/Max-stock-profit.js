function maxStockProfit(stockPrices) {
    var maxProfit=0;
    for(var index=0;index<stockPrices.length;index++){
        if(stockPrices[index]<stockPrices[index+1]){
            var profit=stockPrices[index+1]-stockPrices[index];
            if(profit>maxProfit){
                maxProfit=profit;
            }
            stockPrices[index+1]=stockPrices[index];
        }
    }
    return maxProfit;
}
console.log(maxStockProfit([10,18,4,5,9,6,16,12]));

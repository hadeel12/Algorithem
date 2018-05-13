function maxStockProfit(stockPrices){
    var maxProfit = -1;
    var buyPrice=stockPrices[0];
    var sellPrice=stockPrices[1];
    for(var i = 1; i < stockPrices.length; i++) {
        if(buyPrice < sellPrice) {
            var tempProfit = sellPrice - buyPrice;
            if(tempProfit > maxProfit) maxProfit = tempProfit;
            sellPrice = stockPrices[i+1];
        }
        else {
            buyPrice = stockPrices[i];
            sellPrice = stockPrices[i+1];
        }
    }
    return maxProfit;
}

console.log(maxStockProfit([10,18,4,5,9,6,16,12]));